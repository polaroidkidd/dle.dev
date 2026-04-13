<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { ClassValue } from 'svelte/elements';

  import { cn } from '$lib/utils.js';

  type Props = TabsPrimitive.ContentProps & {
    class?: ClassValue;
  };

  let { ref = $bindable(null), class: className, children, ...restProps }: Props = $props();
</script>

<TabsPrimitive.Content
  bind:ref
  data-slot="tabs-content"
  class={cn('mt-4 outline-none focus-visible:ring-2 focus-visible:ring-ring/50', className)}
  {...restProps}
>
  {@render children?.()}
</TabsPrimitive.Content>
