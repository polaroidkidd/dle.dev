<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { ClassValue } from 'svelte/elements';

  import { cn } from '$lib/utils.js';

  type Props = TabsPrimitive.ListProps & {
    class?: ClassValue;
  };

  let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<TabsPrimitive.List
  bind:ref
  data-slot="tabs-list"
  class={cn(
    'inline-flex h-auto min-h-11 w-fit items-center justify-start gap-1 rounded-2xl border border-border/60 bg-muted/60 p-1 text-muted-foreground',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</TabsPrimitive.List>
