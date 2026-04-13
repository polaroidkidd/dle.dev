<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { ClassValue } from 'svelte/elements';

  import { cn } from '$lib/utils.js';

  type Props = TabsPrimitive.TriggerProps & {
    class?: ClassValue;
  };

  let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<TabsPrimitive.Trigger
  bind:ref
  data-slot="tabs-trigger"
  class={cn(
    'inline-flex min-w-0 items-center justify-center rounded-[calc(var(--radius-xl)-4px)] px-3 py-2 text-sm font-medium whitespace-nowrap text-muted-foreground transition-[color,background-color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    className
  )}
  {...restProps}
>
  {@render children?.()}
</TabsPrimitive.Trigger>
