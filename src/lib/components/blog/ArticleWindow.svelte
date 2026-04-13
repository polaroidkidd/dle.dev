<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export interface ArticleWindowProps {
    title?: string;
    class?: ClassValue;
    contentClass?: ClassValue;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import { Window } from '$lib/components/ui/window';
  import { cn } from '$lib/utils.js';

  let { title, class: className, contentClass, children }: ArticleWindowProps = $props();
</script>

<div class="not-prose my-6">
  <Window
    class={cn('aspect-auto overflow-hidden', className)}
    contentClass={cn('space-y-4', contentClass)}
  >
    {#if title}
      <p class="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">{title}</p>
    {/if}

    {@render children?.()}
  </Window>
</div>
