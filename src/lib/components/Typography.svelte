<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue, HTMLAttributes } from 'svelte/elements';

  export type TypographyTag = 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

  export type TypographyVariant =
    | 'inline'
    | 'sr-only'
    | 'eyebrow'
    | 'eyebrow-wide'
    | 'eyebrow-tight'
    | 'eyebrow-compact'
    | 'meta'
    | 'caption'
    | 'counter'
    | 'label'
    | 'ui-title'
    | 'brand-title'
    | 'brand-subtitle'
    | 'section-title'
    | 'section-title-compact'
    | 'page-title'
    | 'hero-title'
    | 'card-title'
    | 'card-title-sm'
    | 'card-title-lg'
    | 'article-card-title'
    | 'intro-lead'
    | 'body'
    | 'body-lead'
    | 'body-strong'
    | 'body-sm'
    | 'body-sm-strong'
    | 'chip'
    | 'seal'
    | 'terminal-label';

  export interface TypographyProps extends HTMLAttributes<HTMLElement> {
    as?: TypographyTag;
    variant?: TypographyVariant;
    class?: ClassValue;
    balance?: boolean;
    truncate?: boolean;
    children?: Snippet;
    ref?: HTMLElement | undefined;
  }

  export const typographyVariants: Record<TypographyVariant, string> = {
    inline: '',
    'sr-only': 'sr-only',
    eyebrow: 'text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase',
    'eyebrow-wide': 'text-xs font-medium tracking-[0.32em] text-muted-foreground uppercase',
    'eyebrow-tight': 'text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase',
    'eyebrow-compact':
      'text-[0.72rem] font-medium tracking-[0.18em] text-muted-foreground uppercase',
    meta: 'text-[0.72rem] font-medium tracking-[0.2em] text-muted-foreground uppercase',
    caption: 'text-[0.72rem] text-foreground/76',
    counter: 'text-[0.65rem] font-medium tracking-[0.24em] text-muted-foreground uppercase',
    label: 'text-sm font-medium text-foreground',
    'ui-title': 'text-sm font-semibold text-foreground',
    'brand-title': 'font-heading text-sm font-semibold text-foreground sm:text-base',
    'brand-subtitle': 'text-xs text-muted-foreground',
    'section-title':
      'font-heading text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-foreground',
    'section-title-compact':
      'font-heading text-[clamp(1.9rem,3.3vw,3rem)] font-semibold tracking-[-0.04em] text-foreground',
    'page-title':
      'font-heading text-[clamp(2.1rem,4vw,4.25rem)] font-semibold tracking-[-0.05em] text-balance text-foreground',
    'hero-title':
      'font-heading text-[clamp(1.75rem,3.15vw,2.95rem)] font-semibold tracking-[-0.035em] text-balance text-foreground',
    'card-title':
      'font-heading text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.35rem]',
    'card-title-sm':
      'font-heading text-[1.15rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.3rem]',
    'card-title-lg': 'font-heading text-lg font-semibold tracking-[-0.03em] text-foreground',
    'article-card-title': 'font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground',
    'intro-lead': 'text-lg font-medium tracking-[-0.02em] text-foreground/88 sm:text-[1.35rem]',
    body: 'text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8',
    'body-lead': 'text-[1rem] leading-7 text-muted-foreground sm:text-[1.05rem]',
    'body-strong': 'text-[0.98rem] leading-7 text-foreground/86 sm:text-[0.95rem]',
    'body-sm': 'text-sm leading-6 text-muted-foreground',
    'body-sm-strong': 'text-sm leading-6 text-foreground/88',
    chip: 'text-sm leading-5 text-foreground/84 dark:text-white/86',
    seal: 'font-heading text-[4.8rem] leading-none font-semibold tracking-[-0.16em] text-foreground sm:text-[5.25rem]',
    'terminal-label': 'text-[11px] font-medium tracking-[0.2em] text-zinc-400 uppercase'
  };
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';

  let {
    as = 'p',
    variant = 'body',
    class: className,
    balance = false,
    truncate = false,
    children,
    ref = $bindable<HTMLElement | undefined>(),
    ...restProps
  }: TypographyProps = $props();
</script>

<svelte:element
  this={as}
  bind:this={ref}
  {...restProps}
  class={cn(
    typographyVariants[variant],
    balance && 'text-balance',
    truncate && 'truncate',
    className
  )}
>
  {@render children?.()}
</svelte:element>
