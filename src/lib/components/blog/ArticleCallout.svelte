<script lang="ts" module>
  import type { Snippet } from 'svelte';
  import type { ClassValue } from 'svelte/elements';

  export type ArticleCalloutVariant = 'note' | 'tip' | 'warn' | 'quote';

  export interface ArticleCalloutProps {
    variant?: ArticleCalloutVariant;
    title?: string;
    class?: ClassValue;
    children?: Snippet;
  }

  const variantClasses: Record<ArticleCalloutVariant, string> = {
    note: 'border-sky-500/20 bg-sky-500/6 text-foreground dark:border-sky-400/20 dark:bg-sky-400/10',
    tip: 'border-emerald-500/20 bg-emerald-500/6 text-foreground dark:border-emerald-400/20 dark:bg-emerald-400/10',
    warn: 'border-amber-500/25 bg-amber-500/10 text-foreground dark:border-amber-300/20 dark:bg-amber-300/10',
    quote: 'border-border bg-muted/40 text-foreground dark:bg-muted/20'
  };
  const titleClasses: Record<ArticleCalloutVariant, string> = {
    note: 'text-sky-700 dark:text-sky-300',
    tip: 'text-emerald-700 dark:text-emerald-300',
    warn: 'text-amber-700 dark:text-amber-300',
    quote: 'text-muted-foreground'
  };
  const contentClasses: Record<ArticleCalloutVariant, string> = {
    note: '',
    tip: '',
    warn: '',
    quote: 'italic'
  };
</script>

<script lang="ts">
  import { cn } from '$lib/utils.js';

  let { variant = 'note', title, class: className, children }: ArticleCalloutProps = $props();
</script>

<div class="not-prose my-6">
  <div
    data-variant={variant}
    class={cn('rounded-2xl border px-4 py-4 sm:px-5', variantClasses[variant], className)}
  >
    {#if title}
      <p
        class={cn('mb-3 text-xs font-semibold tracking-[0.22em] uppercase', titleClasses[variant])}
      >
        {title}
      </p>
    {/if}

    <div
      class={cn(
        'prose max-w-none prose-neutral dark:prose-invert [&>*:first-child]:mt-0 [&>*:last-child]:mb-0',
        contentClasses[variant]
      )}
    >
      {@render children?.()}
    </div>
  </div>
</div>
