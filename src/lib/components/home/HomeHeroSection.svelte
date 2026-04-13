<script lang="ts">
  import AvatarImg from '$lib/assets/avatar/avatar.jpg?enhanced&w=220;352;704';
  import githubIcon from '$lib/assets/icons/github.svg';
  import linkedinIcon from '$lib/assets/icons/linkedin.svg';
  import Typography from '$lib/components/Typography.svelte';
  import { Avatar } from '$lib/components/ui/avatar';
  import { homeOutcomes, homeSynthesis } from '$lib/content/home';
  import { getHomeIntro } from '$lib/state/home-intro.svelte';
  import { cn } from '$lib/utils';
  import resume from '../../assets/resume/resume.json';

  import HeroOutcomeStack from './HeroOutcomeStack.svelte';

  const profileLinks = resume.basics.profiles
    .filter((p) => p.network === 'Github' || p.network === 'LinkedIn')
    .map((p) => ({
      ...p,
      iconUrl: p.network === 'Github' ? githubIcon : linkedinIcon
    }));

  const intro = getHomeIntro();

  let modeClass = $derived(
    intro.prefersReducedMotion ? 'mode-reduced' : intro.hasPlayed ? 'mode-sequenced' : 'mode-staged'
  );
</script>

<div
  data-hero-backdrop
  class="pointer-events-none absolute inset-x-0 top-16 -z-10 mx-auto h-[36rem] w-full max-w-6xl rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--color-primary)_24%,transparent)_0%,transparent_72%)] blur-3xl"
></div>

<section class="mx-auto flex max-w-6xl items-start px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
  <div data-intro-content class="hero-ledger relative w-full">
    <div
      class="section-glow pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-[2.5rem] sm:-inset-x-6 sm:-inset-y-4 lg:-inset-x-8 lg:-inset-y-5"
    ></div>

    <div class="relative z-10 py-6 sm:py-8 lg:py-12">
      <div class="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div class="min-w-0 lg:justify-self-center lg:pt-2">
          <div
            class="flex flex-col items-center gap-4 text-center sm:gap-5 lg:flex-col lg:items-center"
          >
            <div class="relative shrink-0">
              <div
                class="absolute inset-[-0.4rem] rounded-full border border-black/8 lg:-inset-4 dark:border-white/10"
              ></div>
              <div class="absolute inset-[-2.4rem] rounded-full bg-primary/18 blur-2xl"></div>

              <Avatar
                class="relative size-24 border border-white/75 bg-white shadow-[0_22px_55px_-22px_rgba(15,23,42,0.48)] sm:size-32 dark:border-white/18 dark:bg-black/25"
              >
                <enhanced:img
                  src={AvatarImg}
                  alt="Portrait of Daniel L. Einars"
                  loading="lazy"
                  decoding="async"
                  data-slot="avatar-image"
                  class={cn('aspect-square size-full rounded-full object-cover')}
                >
                </enhanced:img>
              </Avatar>
            </div>

            <div class="min-w-0 text-center lg:text-center">
              <Typography as="p" variant="eyebrow-wide">Daniel L. Einars</Typography>
              <Typography as="p" variant="body-strong" class="mt-2 max-w-sm">
                Engineering quality, design, architecture, and implementation moving in the same
                direction.
              </Typography>
            </div>
          </div>
        </div>

        <div class="min-w-0">
          <div class="relative max-w-4xl">
            <div class="absolute top-0 right-0 flex items-center gap-2">
              {#each profileLinks as profile (profile.url)}
                <a
                  href={profile.url}
                  target="_blank"
                  rel="external noreferrer"
                  aria-label={profile.network}
                  title={profile.network}
                  class={cn(
                    'inline-flex size-9 items-center justify-center rounded-full',
                    'border border-black/8 bg-black/[0.03] text-foreground',
                    'transition-colors duration-200 hover:bg-black/[0.06]',
                    'dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]'
                  )}
                >
                  <img src={profile.iconUrl} alt="" class="size-4 object-contain dark:invert" />
                </a>
              {/each}
            </div>

            <Typography as="p" variant="intro-lead">I help companies</Typography>

            <HeroOutcomeStack outcomes={homeOutcomes} synthesis={homeSynthesis} {modeClass} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-ledger {
    --step-duration: 5.4s;
    --active-duration: 6.3s;
    --settle-delay: calc(var(--step-duration) * 4);
  }

  .section-glow {
    border-color: transparent;
    box-shadow: none;
  }

  @media (min-width: 1024px) {
    .section-glow {
      border: 1px solid color-mix(in oklab, var(--color-primary) 10%, transparent);
      box-shadow:
        inset 0 0 0 1px color-mix(in oklab, var(--color-foreground) 4%, transparent),
        0 0 44px -28px color-mix(in oklab, var(--color-primary) 24%, transparent),
        0 24px 90px -60px color-mix(in oklab, var(--color-primary) 18%, transparent);
    }
  }
</style>
