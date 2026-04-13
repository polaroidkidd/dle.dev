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
  import Typography from '$lib/components/Typography.svelte';
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
      <Typography as="p" variant="eyebrow-tight">{title}</Typography>
    {/if}

    {@render children?.()}
  </Window>
</div>
