<script lang="ts">
  import { resolve } from '$app/paths';
  import type { PageProps } from './$types';

  import Typography from '$lib/components/Typography.svelte';
  import { Button } from '$lib/components/ui/button';

  let { data }: PageProps = $props();

  const panelClass =
    'rounded-[2rem] border border-black/8 bg-white/76 shadow-[0_38px_120px_-56px_rgba(15,23,42,0.58)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]';

  const dateFormatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });

  function formatPublishedAt(value: string | null) {
    if (!value) {
      return 'Archive note';
    }

    return dateFormatter.format(new Date(value));
  }

  function formatUpdatedAt(value: string | null) {
    if (!value) {
      return null;
    }

    return dateFormatter.format(new Date(value));
  }
</script>

<svelte:head>
  <title>Blog - Daniel L. Einars</title>
  <meta
    name="description"
    content="Technical writing on frontend engineering, architecture, and product implementation."
  />
</svelte:head>

<main class="relative isolate min-h-svh px-4 pt-32 pb-10 sm:px-6 sm:pt-36 lg:px-8">
  <div
    class="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-[30rem] w-full max-w-6xl rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-primary)_18%,transparent)_0%,transparent_72%)] blur-3xl"
  ></div>

  <section class="mx-auto max-w-6xl">
    <div
      class={`relative overflow-hidden px-6 py-7 sm:px-8 sm:py-8 lg:px-12 lg:py-10 ${panelClass}`}
    >
      <div class="pointer-events-none absolute inset-0">
        <div
          class="absolute inset-y-0 right-0 w-full bg-[radial-gradient(circle_at_80%_18%,color-mix(in_oklab,var(--color-primary)_14%,transparent)_0%,transparent_34%),linear-gradient(180deg,transparent_0%,color-mix(in_oklab,var(--color-primary)_6%,transparent)_100%)]"
        ></div>
      </div>

      <div class="relative z-10 max-w-3xl">
        <Typography as="p" variant="eyebrow-wide">Blog</Typography>
        <Typography as="h1" variant="page-title" class="mt-4">
          Notes on frontend systems, architecture, and the edge cases worth remembering.
        </Typography>
        <Typography as="p" variant="body-lead" class="mt-5 max-w-2xl">
          A running archive of implementation notes, framework comparisons, and small technical
          write-ups.
        </Typography>
      </div>
    </div>
  </section>

  <section class="mx-auto mt-8 max-w-6xl">
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each data.entries as entry (entry.slug)}
        <article
          class="group relative overflow-hidden rounded-[1.75rem] border border-black/8 bg-white/72 p-6 shadow-[0_32px_100px_-58px_rgba(15,23,42,0.62)] backdrop-blur-2xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:bg-white/[0.05]"
        >
          <div
            class="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/12"
          ></div>

          <div class="flex items-center justify-between gap-3">
            <Typography as="span" variant="meta">{formatPublishedAt(entry.publishedAt)}</Typography>
            {#if formatUpdatedAt(entry.updatedAt)}
              <Typography as="span" variant="meta">
                Updated {formatUpdatedAt(entry.updatedAt)}
              </Typography>
            {/if}
          </div>

          <div class="mt-5">
            <Typography as="h2" variant="article-card-title">{entry.title}</Typography>
            <Typography as="p" variant="body-sm" class="mt-4 sm:text-[0.95rem] sm:leading-7">
              {entry.summary}
            </Typography>
          </div>

          <div class="mt-6 border-t border-black/8 pt-4 dark:border-white/10">
            <div class="flex items-center justify-between gap-4">
              <Typography as="p" variant="meta" class="tracking-[0.22em]">
                {entry.slug}
              </Typography>

              <Button
                href={resolve('/blog/[slug]', { slug: entry.slug })}
                variant="outline"
                size="sm"
              >
                Read article
              </Button>
            </div>
          </div>
        </article>
      {/each}
    </div>
  </section>
</main>
