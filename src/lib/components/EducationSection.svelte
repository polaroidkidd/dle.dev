<script lang="ts">
  import { GraduationCap } from '@lucide/svelte';

  import { cn } from '$lib/utils';
  import resume from '../assets/resume/resume.json';

  import hamburg from '$lib/assets/education/hamburg.jpg?enhanced&w=240;384;768';
  import london from '$lib/assets/education/london.jpg?enhanced&w=240;384;768';
  import zurich from '$lib/assets/education/zurich.jpg?enhanced&w=240;384;768';

  type ResumeEducationEntry = (typeof resume.education)[number];

  type EducationDisplayEntry = {
    id: string;
    degree: string;
    institution: string;
    dateRange: string;
    summary: string;
    details: string[];
    isReversed: boolean;
    image: string;
    placeholderClass: string;
  };

  type EditorialEducationEntry = {
    summary: string;
    details: string[];
    image: string;
  };

  const editorialCopy: Record<string, EditorialEducationEntry> = {
    'Bachelor of Science in Computer Science ZHAW Zurich (BSc)|2015-09-01': {
      image: zurich,
      summary:
        'A focused computer science track centered on software systems, implementation, and applied machine learning work.',
      details: [
        'Built a stronger engineering foundation around software design, implementation, and technical problem solving.',
        'Thesis: Training image classifiers with smartphones.'
      ]
    },
    'Master of Business Administration (MBA)|2009-09-01': {
      image: hamburg,
      summary:
        'An MBA grounding in business strategy, media, and digital product thinking that still informs how I connect execution with commercial outcomes.',
      details: [
        'Developed a stronger lens on market positioning, business priorities, and decision-making beyond pure implementation.',
        'Thesis: Analysing critical success factors of browser games.'
      ]
    },
    'Bachelor of Arts in Economics (BA)|2006-09-01': {
      image: london,
      summary:
        'An economics degree that established the analytical and structural thinking behind later product, marketing, and engineering work.',
      details: [
        'Built the early quantitative and commercial foundation that later supported both marketing leadership and software delivery.'
      ]
    }
  };

  const placeholderClasses = [
    'from-primary/10 via-primary/4 to-transparent',
    'from-sky-500/10 via-violet-500/4 to-transparent',
    'from-amber-500/10 via-orange-500/4 to-transparent',
    'from-emerald-500/10 via-cyan-500/4 to-transparent'
  ] as const;

  const sortedEducation = [...resume.education].sort(
    (left, right) => Date.parse(right.startDate) - Date.parse(left.startDate)
  );

  const educationEntries: EducationDisplayEntry[] = sortedEducation.map((entry, index) => {
    const copyKey = `${entry.area}|${entry.startDate}`;
    const copy = editorialCopy[copyKey];

    return {
      id: getEducationId(entry),
      degree: entry.area,
      institution: entry.institution,
      dateRange: `${formatMonthYear(entry.startDate)} - ${formatMonthYear(entry.endDate)}`,
      summary: copy?.summary ?? entry.area,
      details: copy?.details ?? (entry.thesis ? [`Thesis: ${entry.thesis}.`] : []),
      isReversed: index % 2 === 1,
      image: copy?.image,
      placeholderClass: placeholderClasses[index % placeholderClasses.length]
    };
  });

  function getEducationId(entry: ResumeEducationEntry) {
    return `${entry.area}-${entry.institution}-${entry.startDate}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }

  function formatMonthYear(dateString: string) {
    return new Intl.DateTimeFormat('en', {
      month: 'short',
      year: 'numeric',
      timeZone: 'UTC'
    }).format(new Date(`${dateString}T00:00:00Z`));
  }
</script>

<section aria-labelledby="education" class="mx-auto mt-24 max-w-6xl px-4 sm:mt-28 sm:px-6 lg:px-8">
  <div class="relative">
    <div
      class="pointer-events-none absolute top-10 left-0 -z-10 h-64 w-64 rounded-full bg-primary/8 blur-3xl"
    ></div>

    <div class="max-w-3xl">
      <p class="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
        Academic path
      </p>
      <h2
        id="education"
        class="mt-4 font-heading text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-foreground"
      >
        <a href="#education" class="underline-offset-4 hover:underline focus-visible:underline">
          Education
        </a>
      </h2>
      <p
        class="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
      >
        The academic track behind the way I work today, spanning economics, business, and software
        engineering.
      </p>
    </div>

    <div class="relative mt-12 lg:mt-16">
      <div class="resume-timeline">
        {#each educationEntries as entry (entry.id)}
          <article
            class={cn(
              'resume-timeline-item',
              entry.isReversed ? 'resume-timeline-item--right' : 'resume-timeline-item--left'
            )}
          >
            <div aria-hidden="true" class="resume-timeline-marker text-primary">
              <GraduationCap class="size-4" />
            </div>

            <div
              class={cn(
                'hidden lg:row-start-1 lg:flex lg:items-center',
                entry.isReversed
                  ? 'lg:col-start-1 lg:justify-end'
                  : 'lg:col-start-2 lg:justify-start'
              )}
            >
              <div
                class={cn(
                  'relative aspect-[4/3] w-full max-w-[24rem] overflow-hidden rounded-[2rem] border border-black/8 bg-gradient-to-br to-transparent shadow-[0_22px_60px_-40px_rgba(15,23,42,0.48)] dark:border-white/10',
                  entry.placeholderClass
                )}
              >
                <enhanced:img
                  src={entry.image}
                  alt=""
                  sizes="(min-width: 1024px) 384px, 0px"
                  class="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div class="resume-timeline-card lg:row-start-1">
              <div class="p-6 sm:p-7">
                <div class="min-w-0 space-y-4">
                  <div
                    class="flex flex-wrap items-center gap-2.5 text-xs font-medium tracking-[0.22em] text-muted-foreground uppercase"
                  >
                    <span
                      class="inline-flex items-center rounded-full border border-primary/16 bg-primary/7 px-3 py-1 text-primary/90 dark:border-primary/35 dark:bg-primary/18 dark:text-primary-foreground"
                    >
                      {entry.dateRange}
                    </span>
                    <span class="h-1 w-1 rounded-full bg-primary/35"></span>
                    <span class="max-w-[24rem] text-[0.72rem] text-foreground/76">
                      {entry.institution}
                    </span>
                  </div>

                  <h3
                    id={entry.id}
                    class="min-w-0 font-heading text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.35rem]"
                  >
                    <a
                      href={`#${entry.id}`}
                      class="underline-offset-4 hover:underline focus-visible:underline"
                    >
                      {entry.degree}
                    </a>
                  </h3>
                </div>

                <div class="mt-6">
                  <div class="space-y-5 border-t border-black/8 pt-6 dark:border-white/10">
                    <p
                      class="text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
                    >
                      {entry.summary}
                    </p>

                    <ul class="space-y-3">
                      {#each entry.details as detail (detail)}
                        <li
                          class="flex gap-3 text-sm leading-6 text-foreground/84 sm:text-[0.97rem]"
                        >
                          <span class="mt-2.5 block size-1.5 shrink-0 rounded-full bg-primary/70"
                          ></span>
                          <span>{detail}</span>
                        </li>
                      {/each}
                    </ul>

                    <div
                      class={cn(
                        'relative overflow-hidden rounded-[1.35rem] border border-black/8 bg-gradient-to-br to-transparent p-4 lg:hidden dark:border-white/10',
                        entry.placeholderClass
                      )}
                    >
                      {#if entry.image}
                        <enhanced:img
                          src={entry.image}
                          alt=""
                          sizes="(min-width: 1024px) 0px, calc(100vw - 5rem)"
                          class="relative h-24 w-full rounded-[1rem] object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      {:else}
                        <div
                          class="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.66)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.4),transparent_60%)] dark:bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.08)_0%,transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_60%)]"
                        ></div>
                        <div
                          class="relative h-24 rounded-[1rem] border border-black/6 bg-white/20 dark:border-white/8 dark:bg-white/[0.03]"
                        ></div>
                      {/if}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
