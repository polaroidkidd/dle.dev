<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export interface ArticleTabPanelProps {
    value: string;
    class?: ClassValue;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import * as Tabs from '$lib/components/ui/tabs';
  import { cn } from '$lib/utils.js';

  let { value, class: className, children }: ArticleTabPanelProps = $props();
</script>

<Tabs.Content
  {value}
  class={cn('rounded-2xl border border-border bg-background/80 p-4 sm:p-5', className)}
>
  <div
    class="prose max-w-none prose-neutral dark:prose-invert [&_pre]:my-0 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
  >
    {@render children?.()}
  </div>
</Tabs.Content>
