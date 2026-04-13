<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export interface ArticleTerminalProps {
    title?: string;
    class?: ClassValue;
    contentClass?: ClassValue;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import Typography from '$lib/components/Typography.svelte';
  import { Window } from '$lib/components/ui/window';
  import { cn } from '$lib/utils.js';

  let { title, class: className, contentClass, children }: ArticleTerminalProps = $props();
</script>

<div class="not-prose my-6">
  <Window
    class={cn(
      'aspect-auto overflow-hidden border-zinc-900/80 bg-zinc-950 text-zinc-50 dark:border-white/10 dark:bg-zinc-950',
      className
    )}
    contentClass={cn(
      'space-y-3 bg-zinc-950 font-mono text-sm leading-6 text-zinc-50',
      contentClass
    )}
  >
    {#if title}
      <Typography as="p" variant="terminal-label">{title}</Typography>
    {/if}

    <div
      class="[&_code]:bg-transparent [&_code]:p-0 [&_code]:text-inherit [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:p-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
    >
      {@render children?.()}
    </div>
  </Window>
</div>
