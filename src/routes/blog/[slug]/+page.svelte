<script lang="ts">
  import { resolve } from '$app/paths';
  import type { PageProps } from './$types';

  import Typography from '$lib/components/Typography.svelte';
  import { proseClass } from '$lib/components/typography';

  let { data }: PageProps = $props();

  const panelClass =
    'rounded-[2rem] border border-black/8 bg-white/76 shadow-[0_38px_120px_-56px_rgba(15,23,42,0.58)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]';

  const dateFormatter = new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC'
  });

  const relatedEntries = $derived(
    data.entries.filter((entry) => entry.slug !== data.entry.slug).slice(0, 3)
  );

  function formatDate(value: string | null) {
    if (!value) {
      return null;
    }

    return dateFormatter.format(new Date(value));
  }
</script>

<svelte:head>
  <title>{data.entry.title} - Daniel L. Einars</title>
  <meta name="description" content={data.entry.summary} />
</svelte:head>

<main class="relative isolate min-h-svh px-4 pt-32 pb-10 sm:px-6 sm:pt-36 lg:px-8">
  <div
    class="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-[30rem] w-full max-w-6xl rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-primary)_18%,transparent)_0%,transparent_72%)] blur-3xl"
  ></div>

  <section class="mx-auto max-w-4xl">
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
          {data.entry.title}
        </Typography>

        <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          <Typography as="span" variant="meta">{data.entry.author}</Typography>
          {#if formatDate(data.entry.publishedAt)}
            <Typography as="span" variant="meta">{formatDate(data.entry.publishedAt)}</Typography>
          {/if}
          {#if formatDate(data.entry.updatedAt)}
            <Typography as="span" variant="meta"
              >Updated {formatDate(data.entry.updatedAt)}</Typography
            >
          {/if}
        </div>

        <Typography as="p" variant="body-lead" class="mt-5 max-w-2xl">
          {data.entry.summary}
        </Typography>
      </div>
    </div>
  </section>

  <section
    class="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start"
  >
    <article class="min-w-0 px-1 sm:px-2 lg:px-0">
      <div class={proseClass}>
        <data.entry.Content />
      </div>
    </article>

    {#if relatedEntries.length > 0}
      <aside class={`px-6 py-7 sm:px-8 sm:py-8 lg:sticky lg:top-28 ${panelClass}`}>
        <Typography as="p" variant="eyebrow" class="tracking-[0.26em]">More posts</Typography>

        <div class="mt-5 space-y-4">
          {#each relatedEntries as entry (entry.slug)}
            <a
              class="block rounded-[1.25rem] border border-black/8 px-4 py-4 transition-colors hover:bg-black/[0.025] dark:border-white/10 dark:hover:bg-white/[0.03]"
              href={resolve('/blog/[slug]', { slug: entry.slug })}
            >
              <Typography as="p" variant="card-title-lg">{entry.title}</Typography>
              <Typography as="p" variant="body-sm" class="mt-2">{entry.summary}</Typography>
            </a>
          {/each}
        </div>
      </aside>
    {/if}
  </section>
</main>
