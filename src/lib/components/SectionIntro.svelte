<script lang="ts" module>
  import type { ClassValue } from 'svelte/elements';

  export interface SectionIntroProps {
    id: string;
    title: string;
    description?: string;
    eyebrow?: string;
    headingTag?: 'h1' | 'h2' | 'h3' | 'h4';
    class?: ClassValue;
    eyebrowClass?: ClassValue;
    titleClass?: ClassValue;
    descriptionClass?: ClassValue;
  }
</script>

<script lang="ts">
  import Typography from '$lib/components/Typography.svelte';
  import { cn } from '$lib/utils.js';

  let {
    id,
    title,
    description,
    eyebrow,
    headingTag = 'h2',
    class: className,
    eyebrowClass,
    titleClass,
    descriptionClass
  }: SectionIntroProps = $props();
</script>

<div class={cn('max-w-3xl', className)}>
  {#if eyebrow}
    <Typography as="p" variant="eyebrow" class={eyebrowClass}>
      {eyebrow}
    </Typography>
  {/if}

  <Typography as={headingTag} variant="section-title" {id} class={cn('mt-4', titleClass)}>
    <a href={`#${id}`} class="underline-offset-4 hover:underline focus-visible:underline">
      {title}
    </a>
  </Typography>

  {#if description}
    <Typography as="p" variant="body" class={cn('mt-4 max-w-2xl', descriptionClass)}>
      {description}
    </Typography>
  {/if}
</div>
