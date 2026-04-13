<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export interface ArticleTabItem {
    value: string;
    label: string;
  }

  export interface ArticleTabsProps {
    tabs: ArticleTabItem[];
    value?: string;
    defaultValue?: string;
    activationMode?: 'automatic' | 'manual';
    onValueChange?: (value: string) => void;
    class?: ClassValue;
    listClass?: ClassValue;
    triggerClass?: ClassValue;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import { cn } from '$lib/utils.js';

  let {
    tabs,
    value = $bindable<string | undefined>(),
    defaultValue,
    activationMode = 'automatic',
    onValueChange,
    class: className,
    listClass,
    triggerClass,
    children
  }: ArticleTabsProps = $props();

  const currentValue = $derived(value ?? defaultValue ?? tabs[0]?.value ?? '');
</script>

<div class="not-prose my-6">
  <Tabs.Root
    value={currentValue}
    onValueChange={(nextValue) => {
      value = nextValue;
      onValueChange?.(nextValue);
    }}
    class={cn('w-full', className)}
    {activationMode}
  >
    <Tabs.List class={cn('h-auto w-full justify-start overflow-x-auto', listClass)}>
      {#each tabs as tab (tab.value)}
        <Tabs.Trigger value={tab.value} class={triggerClass}>{tab.label}</Tabs.Trigger>
      {/each}
    </Tabs.List>

    {@render children?.()}
  </Tabs.Root>
</div>
