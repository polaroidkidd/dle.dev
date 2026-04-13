import { readFile, writeFile } from 'node:fs/promises';

const DEFAULT_WORKER_PATH = '.svelte-kit/cloudflare/_worker.js';

const ROUTE_CACHE_SNIPPET = [
  '    let pragma = req.headers.get("cache-control") || "";',
  '    let res = !pragma.includes("no-cache") && await r2(req);',
  '    if (res) return res;',
  '    let { pathname, search } = new URL(req.url);',
  '    try {',
  '      pathname = decodeURIComponent(pathname);',
  '    } catch {',
  '    }',
  '    const stripped_pathname = pathname.replace(/\\/$/, "");',
  '    let is_static_asset = false;',
  '    const filename = stripped_pathname.slice(base_path.length + 1);',
  '    if (filename) {',
  '      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;',
  '    }',
  '    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";',
  '    if (is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable)) {'
].join('\n');

const ROUTE_CACHE_PATCH = [
  '    let pragma = req.headers.get("cache-control") || "";',
  '    let { pathname, search } = new URL(req.url);',
  '    try {',
  '      pathname = decodeURIComponent(pathname);',
  '    } catch {',
  '    }',
  '    const stripped_pathname = pathname.replace(/\\/$/, "");',
  '    let is_static_asset = false;',
  '    const filename = stripped_pathname.slice(base_path.length + 1);',
  '    if (filename) {',
  '      is_static_asset = manifest.assets.has(filename) || manifest.assets.has(filename + "/index.html") || filename in manifest._.server_assets || filename + "/index.html" in manifest._.server_assets;',
  '    }',
  '    const can_use_worker_cache = is_static_asset || prerendered.has(pathname) || pathname === version_file || pathname.startsWith(immutable);',
  '    let res = can_use_worker_cache && !pragma.includes("no-cache") && await r2(req);',
  '    if (res) return res;',
  '    let location = pathname.at(-1) === "/" ? stripped_pathname : pathname + "/";',
  '    if (can_use_worker_cache) {'
].join('\n');

const CACHE_WRITE_SNIPPET = '    return pragma && res.status < 400 ? c(req, res, ctx) : res;';
const CACHE_WRITE_PATCH =
  '    return can_use_worker_cache && pragma && res.status < 400 ? c(req, res, ctx) : res;';

export async function patchCloudflareWorker(workerPath = DEFAULT_WORKER_PATH) {
  const source = await readFile(workerPath, 'utf8');

  if (source.includes('const can_use_worker_cache =')) {
    return;
  }

  const withCacheReadPatched = source.replace(ROUTE_CACHE_SNIPPET, ROUTE_CACHE_PATCH);

  if (withCacheReadPatched === source) {
    throw new Error(`Could not patch Cloudflare worker cache read logic in ${workerPath}`);
  }

  const patched = withCacheReadPatched.replace(CACHE_WRITE_SNIPPET, CACHE_WRITE_PATCH);

  if (patched === withCacheReadPatched) {
    throw new Error(`Could not patch Cloudflare worker cache write logic in ${workerPath}`);
  }

  await writeFile(workerPath, patched);
}
