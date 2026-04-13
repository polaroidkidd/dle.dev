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
    <p
      class={cn(
        'text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase',
        eyebrowClass
      )}
    >
      {eyebrow}
    </p>
  {/if}

  <svelte:element
    this={headingTag}
    {id}
    class={cn(
      'mt-4 font-heading text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-foreground',
      titleClass
    )}
  >
    <a href={`#${id}`} class="underline-offset-4 hover:underline focus-visible:underline">
      {title}
    </a>
  </svelte:element>

  {#if description}
    <p
      class={cn(
        'mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8',
        descriptionClass
      )}
    >
      {description}
    </p>
  {/if}
</div>
