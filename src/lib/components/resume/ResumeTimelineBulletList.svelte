<script lang="ts" module>
  import type { ClassValue } from 'svelte/elements';

  export interface ResumeTimelineBulletListProps {
    items: string[];
    class?: ClassValue;
    itemClass?: ClassValue;
    bulletClass?: ClassValue;
  }
</script>

<script lang="ts">
  import Typography from '$lib/components/Typography.svelte';
  import { cn } from '$lib/utils.js';

  let { items, class: className, itemClass, bulletClass }: ResumeTimelineBulletListProps = $props();
</script>

{#if items.length > 0}
  <ul class={cn('space-y-3', className)}>
    {#each items as item (item)}
      <li
        class={cn('flex gap-3 text-sm leading-6 text-foreground/84 sm:text-[0.97rem]', itemClass)}
      >
        <span class={cn('mt-2.5 block size-1.5 shrink-0 rounded-full bg-primary/70', bulletClass)}
        ></span>
        <Typography as="span" variant="inline">{item}</Typography>
      </li>
    {/each}
  </ul>
{/if}
