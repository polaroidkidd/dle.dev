<script lang="ts">
  import { Tabs as TabsPrimitive } from 'bits-ui';
  import type { ClassValue } from 'svelte/elements';

  import { cn } from '$lib/utils.js';

  type Props = TabsPrimitive.RootProps & {
    class?: ClassValue;
  };

  let {
    ref = $bindable(null),
    value = $bindable(''),
    class: className,
    children,
    ...restProps
  }: Props = $props();
</script>

<TabsPrimitive.Root
  bind:ref
  bind:value
  data-slot="tabs"
  class={cn('w-full', className)}
  {...restProps}
>
  {@render children?.()}
</TabsPrimitive.Root>
