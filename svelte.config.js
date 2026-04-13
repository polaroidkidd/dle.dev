import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';

import { patchCloudflareWorker } from './scripts/patch-cloudflare-worker.mjs';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.svx'],
  highlight: {
    alias: {
      js: 'javascript',
      sh: 'bash',
      shell: 'bash',
      ts: 'typescript',
      yml: 'yaml'
    }
  }
};

const mdsvexPreprocess = mdsvex(mdsvexOptions);

function cloudflareAdapterWithCachePatch(options) {
  const cloudflare = adapter(options);

  return {
    ...cloudflare,
    async adapt(builder) {
      await cloudflare.adapt(builder);
      await patchCloudflareWorker();
    }
  };
}

const normalizeMdsvexModuleScript = {
  markup: async (options) => {
    const result = await mdsvexPreprocess.markup?.(options);

    if (!result?.code) {
      return result;
    }

    return {
      ...result,
      code: result.code.replace(/<script\s+context=(['"])module\1>/g, '<script module>')
    };
  }
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
    runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
  },
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: cloudflareAdapterWithCachePatch()
  },
  preprocess: [normalizeMdsvexModuleScript],
  extensions: ['.svelte', '.svx']
};

export default config;
