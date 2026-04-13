<script lang="ts" module>
  import type { ClassValue } from 'svelte/elements';

  export type ResumeTimelineMediaFallback = 'default' | 'certificate';

  export interface ResumeTimelineMediaProps {
    src?: string;
    sizes: string;
    placeholderClass?: ClassValue;
    class?: ClassValue;
    imageClass?: ClassValue;
    fallbackVariant?: ResumeTimelineMediaFallback;
  }
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';

  let {
    src,
    sizes,
    placeholderClass,
    class: className,
    imageClass,
    fallbackVariant = 'default'
  }: ResumeTimelineMediaProps = $props();
</script>

<div
  class={cn(
    'relative overflow-hidden rounded-[1.35rem] border border-black/8 bg-gradient-to-br to-transparent dark:border-white/10',
    placeholderClass,
    className
  )}
>
  {#if src}
    <enhanced:img
      {src}
      alt=""
      {sizes}
      class={cn('object-cover', imageClass)}
      loading="lazy"
      decoding="async"
    />
  {:else if fallbackVariant === 'certificate'}
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.7)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.44),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_60%)]"
    ></div>
    <div
      class="absolute top-[20%] left-[18%] h-14 w-14 rounded-full border border-black/6 bg-white/28 blur-[1px] dark:border-white/10 dark:bg-white/[0.04]"
    ></div>
    <div
      class="absolute right-[18%] bottom-[18%] h-20 w-20 rounded-full bg-white/28 blur-2xl dark:bg-white/[0.05]"
    ></div>
    <div class="absolute inset-x-[18%] top-[26%] h-px bg-black/8 dark:bg-white/10"></div>
    <div class="absolute inset-x-[24%] top-[48%] h-px bg-black/6 dark:bg-white/8"></div>
    <div class="absolute inset-x-[20%] bottom-[24%] h-px bg-black/6 dark:bg-white/8"></div>
  {:else}
    <div
      class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.66)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.4),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_60%)]"
    ></div>
    <div
      class="relative h-24 rounded-[1rem] border border-black/6 bg-white/20 dark:border-white/8 dark:bg-white/[0.03]"
    ></div>
  {/if}
</div>
