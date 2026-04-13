<script lang="ts">
  import { BriefcaseBusiness, ChevronDown } from '@lucide/svelte';
  import { SvelteSet } from 'svelte/reactivity';

  import { cn } from '$lib/utils';
  import resume from '../../../static/resume.json';

  type ResumeWorkEntry = (typeof resume.work)[number];

  type WorkDisplayEntry = {
    id: string;
    position: string;
    company: string;
    dateRange: string;
    summary: string;
    highlights: string[];
    isReversed: boolean;
    imageSrc: string;
    placeholderClass: string;
  };

  type EditorialWorkEntry = {
    summary: string;
    highlights: string[];
    imageSrc: string;
  };

  const editorialCopy: Record<string, EditorialWorkEntry> = {
    'Lead Software Engineer|2025-10-01': {
      summary:
        'Leading the frontend recovery of a digital onboarding platform, bringing dormant flows back to production readiness under current compliance and security expectations.',
      imageSrc: 'assets/work/mechnic.jpg',
      highlights: [
        'Revived a legacy React onboarding stack to support identity verification, liveness checks, and KYC-critical user journeys.',
        'Connected a productized onboarding layer to inconsistent in-house APIs and undocumented third-party dependencies without losing delivery momentum.',
        'Created realistic delivery paths when customer requests conflicted with platform limits, compliance rules, or near-term stability needs.'
      ]
    },
    'Lead Software Engineer|2024-04-01': {
      imageSrc: 'assets/work/lead.jpg',
      summary:
        'Drove frontend direction for a large B2B e-banking platform, balancing hands-on delivery with architecture, standards, and team-wide execution in a regulated domain.',
      highlights: [
        'Set frontend direction around maintainability, delivery speed, and platform constraints for a business-critical banking product.',
        'Introduced contract-driven type generation and dependency automation to reduce integration friction and lower upgrade risk.',
        'Helped the team operationalize AI coding tools through shared guardrails, tooling, and practical usage patterns.'
      ]
    },
    'Senior Software Engineer|2022-06-01': {
      imageSrc: 'assets/work/migration.jpg',

      summary:
        'Owned the B2C frontend experience for a major credit institution, combining modernization work with feature delivery and day-to-day engineering leadership.',
      highlights: [
        'Led the migration from create-react-app to Next.js, using incremental static regeneration to improve load performance and release efficiency.',
        'Delivered high-visibility frontend initiatives across teams of varying size while providing technical direction and implementation support.',
        'Raised team capability through accessibility-focused linting and structured pairing that helped junior engineers take on larger ownership.'
      ]
    },
    'Professional Software Engineer|2019-09-01': {
      imageSrc: 'assets/work/design.jpg',
      summary:
        'Built and maintained customer-facing React applications while improving tooling, consistency, and design-system execution across multiple frontend surfaces.',
      highlights: [
        'Standardized frontend quality with ESLint, lint-staged, and Prettier across repositories to reduce manual review overhead.',
        'Modernized local tooling and dependency baselines to make day-to-day development more reliable and onboarding less fragile.',
        'Translated site-wide design changes into production frontend updates across React applications and Magnolia CMS.'
      ]
    },
    'Software Engineer|2018-08-15': {
      imageSrc: 'assets/work/time.jpg',

      summary:
        'Delivered client software projects spanning Android and build engineering, with a focus on performance, maintainability, and practical modernization.',
      highlights: [
        'Built an Android remote-support application with WebRTC and Dagger 2, balancing real-time communication demands with device constraints.',
        'Led the migration of 148 Ant projects to Gradle, cutting compile time from roughly ten minutes to under two.'
      ]
    },
    'Werkstudent|2016-02-01': {
      imageSrc: 'assets/work/library.jpg',

      summary:
        'Supported consulting work through automation tooling that reduced manual effort in data preparation and testing workflows.',
      highlights: [
        'Built web scrapers, transformation utilities, and automated test-case generation tools for the EasyTax product.'
      ]
    },
    'Marketing Manager Germany and Head of Marketing|2013-04-01': {
      imageSrc: 'assets/work/marketing.jpg',

      summary:
        'Led performance marketing across EU markets, combining channel strategy, team leadership, and commercial optimization.',
      highlights: [
        'Owned multi-market digital marketing initiatives with a strong focus on efficiency, scale, and return on ad spend.'
      ]
    },
    'Online Marketing Manager|2012-08-01': {
      imageSrc: 'assets/work/seo.jpg',

      summary:
        'Managed channel relationships, acquisition activity, and commercial negotiations for online marketing programs.',
      highlights: [
        'Oversaw partner channels, publisher relationships, and new-client acquisition while handling the commercial side of delivery.'
      ]
    }
  };

  const placeholderClasses = [
    'from-primary/10 via-primary/4 to-transparent',
    'from-sky-500/10 via-violet-500/4 to-transparent',
    'from-amber-500/10 via-orange-500/4 to-transparent',
    'from-emerald-500/10 via-cyan-500/4 to-transparent'
  ] as const;

  const sortedWork = [...resume.work].sort(
    (left, right) => Date.parse(right.startDate) - Date.parse(left.startDate)
  );

  const workEntries: WorkDisplayEntry[] = sortedWork.map((entry, index) => {
    const copyKey = `${entry.position}|${entry.startDate}`;
    const copy = editorialCopy[copyKey];

    return {
      id: getWorkId(entry),
      position: entry.position,
      company: entry.name,
      dateRange: formatDateRange(entry),
      summary: copy?.summary ?? entry.summary ?? '',
      highlights: copy?.highlights ?? entry.highlights.slice(0, 3),
      isReversed: index % 2 === 1,
      imageSrc: copy?.imageSrc,
      placeholderClass: placeholderClasses[index % placeholderClasses.length]
    };
  });

  let expandedIds = new SvelteSet(workEntries.map((entry) => entry.id));

  function getWorkId(entry: ResumeWorkEntry) {
    return `${entry.position}-${entry.name}-${entry.startDate}`
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

  function formatDateRange(entry: ResumeWorkEntry) {
    if (entry.endDate) {
      return `${formatMonthYear(entry.startDate)} - ${formatMonthYear(entry.endDate)}`;
    }

    return `${formatMonthYear(entry.startDate)} - PRESENT`;
  }

  function toggleEntry(id: string) {
    if (expandedIds.has(id)) {
      expandedIds.delete(id);
    } else {
      expandedIds.add(id);
    }
  }

  function isExpanded(id: string) {
    return expandedIds.has(id);
  }
</script>

<section
  aria-labelledby="work-experience-title"
  class="mx-auto mt-24 max-w-6xl px-4 sm:mt-28 sm:px-6 lg:px-8"
>
  <div class="relative">
    <div
      class="pointer-events-none absolute top-10 right-0 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
    ></div>

    <div class="max-w-3xl">
      <p class="text-xs font-medium tracking-[0.28em] text-muted-foreground uppercase">
        Career timeline
      </p>
      <h2
        id="work-experience-title"
        class="mt-4 font-heading text-[clamp(2rem,4vw,3.6rem)] font-semibold tracking-[-0.04em] text-foreground"
      >
        Work Experience
      </h2>
      <p
        class="mt-4 max-w-2xl text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
      >
        A role-by-role view of the systems, products, and teams I have shaped, ordered from the
        current frontier back through the work that built it.
      </p>
    </div>

    <div class="relative mt-12 lg:mt-16">
      <div class="resume-timeline">
        {#each workEntries as entry (entry.id)}
          <article
            class={cn(
              'resume-timeline-item',
              entry.isReversed ? 'resume-timeline-item--right' : 'resume-timeline-item--left'
            )}
          >
            <div aria-hidden="true" class="resume-timeline-marker text-primary">
              <BriefcaseBusiness class="size-4" />
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
                  'relative aspect-[4/3] w-full max-w-[26rem] overflow-hidden rounded-[2rem] border border-black/8 bg-gradient-to-br to-transparent shadow-[0_22px_60px_-40px_rgba(15,23,42,0.48)] dark:border-white/10',
                  entry.placeholderClass
                )}
              >
                <enhanced:img
                  src={entry.imageSrc}
                  alt=""
                  class="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div class="resume-timeline-card lg:row-start-1">
              <div class="p-6 sm:p-7">
                <div class="flex items-start justify-between gap-4">
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
                        {entry.company}
                      </span>
                    </div>

                    <h3
                      class="min-w-0 font-heading text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.35rem]"
                    >
                      {entry.position}
                    </h3>
                  </div>

                  <button
                    type="button"
                    class="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-black/8 bg-black/[0.025] text-muted-foreground transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:text-foreground dark:border-white/10 dark:bg-white/[0.03] dark:hover:text-white"
                    aria-expanded={isExpanded(entry.id)}
                    aria-controls={`${entry.id}-details`}
                    aria-label={isExpanded(entry.id)
                      ? `Collapse ${entry.position}`
                      : `Expand ${entry.position}`}
                    onclick={() => toggleEntry(entry.id)}
                  >
                    <ChevronDown
                      class={cn(
                        'size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                        isExpanded(entry.id) && 'rotate-180'
                      )}
                    />
                  </button>
                </div>

                <div
                  id={`${entry.id}-details`}
                  class={cn(
                    'grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
                    isExpanded(entry.id)
                      ? 'mt-6 grid-rows-[1fr] opacity-100'
                      : 'mt-0 grid-rows-[0fr] opacity-0'
                  )}
                >
                  <div class="overflow-hidden">
                    <div
                      class={cn(
                        'space-y-5 border-t border-black/8 pt-6 transition-[transform,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] dark:border-white/10',
                        isExpanded(entry.id)
                          ? 'translate-y-0 opacity-100'
                          : '-translate-y-2 opacity-0'
                      )}
                    >
                      <p
                        class="text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
                      >
                        {entry.summary}
                      </p>

                      <ul class="space-y-3">
                        {#each entry.highlights as highlight (highlight)}
                          <li
                            class="flex gap-3 text-sm leading-6 text-foreground/84 sm:text-[0.97rem]"
                          >
                            <span class="mt-2.5 block size-1.5 shrink-0 rounded-full bg-primary/70"
                            ></span>
                            <span>{highlight}</span>
                          </li>
                        {/each}
                      </ul>

                      <div
                        class={cn(
                          'relative overflow-hidden rounded-[1.35rem] border border-black/8 bg-gradient-to-br to-transparent p-4 lg:hidden dark:border-white/10',
                          entry.placeholderClass
                        )}
                      >
                        {#if entry.imageSrc}
                          <enhanced:img
                            src={entry.imageSrc}
                            alt=""
                            class="relative h-24 w-full rounded-[1rem] object-cover"
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
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</section>
