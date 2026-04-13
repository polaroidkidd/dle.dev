<script lang="ts" module>
  import type { Component, Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export interface ResumeTimelineEntryProps {
    reversed?: boolean;
    icon: Component<{ class?: string }>;
    class?: ClassValue;
    media?: Snippet;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';

  let {
    reversed = false,
    icon: Icon,
    class: className,
    media,
    children
  }: ResumeTimelineEntryProps = $props();
</script>

<article
  class={cn(
    'resume-timeline-item',
    reversed ? 'resume-timeline-item--right' : 'resume-timeline-item--left',
    className
  )}
>
  <div aria-hidden="true" class="resume-timeline-marker text-primary">
    <Icon class="size-4" />
  </div>

  {#if media}
    <div
      class={cn(
        'hidden lg:row-start-1 lg:flex lg:items-center',
        reversed ? 'lg:col-start-1 lg:justify-end' : 'lg:col-start-2 lg:justify-start'
      )}
    >
      {@render media()}
    </div>
  {/if}

  <div class="resume-timeline-card lg:row-start-1">
    <div class="p-6 sm:p-7">
      {@render children?.()}
    </div>
  </div>
</article>
