<script lang="ts">
  import AuroraText from '$lib/components/AuroraText.svelte';
  import Typography from '$lib/components/Typography.svelte';
  import type { HomeOutcome, HomeSynthesis } from '$lib/content/home';

  type Props = {
    outcomes: HomeOutcome[];
    synthesis: HomeSynthesis;
    modeClass: string;
  };

  let { outcomes, synthesis, modeClass }: Props = $props();
</script>

<div class={`${modeClass} active-stack mt-5 min-h-[14rem] sm:min-h-[13rem] lg:min-h-[14.5rem]`}>
  {#each outcomes as entry, index (entry.id)}
    <article
      class="active-card flex h-full flex-col justify-between"
      data-primary={index === 0}
      style:--step-index={index}
    >
      <div>
        <Typography as="h1" variant="hero-title" class="mt-4 max-w-3xl">
          {entry.headlinePrefix}<AuroraText>{entry.headlineHighlight}</AuroraText
          >{entry.headlineSuffix}
        </Typography>

        <Typography as="p" variant="body" class="mt-4 max-w-xl sm:leading-7">
          {entry.body}
        </Typography>
      </div>
    </article>
  {/each}

  <article class="settled-card h-full">
    <div>
      <Typography as="h1" variant="hero-title" class="max-w-3xl">
        {synthesis.headlinePrefix}<AuroraText>{synthesis.headlineHighlight}</AuroraText
        >{synthesis.headlineSuffix}
      </Typography>

      <Typography as="p" variant="body" class="mt-4 max-w-xl sm:leading-7">
        {synthesis.body}
      </Typography>
    </div>
  </article>
</div>

<style>
  .active-stack {
    position: relative;
  }

  .active-card,
  .settled-card {
    position: absolute;
    inset: 0;
    opacity: 0;
    transform: translate3d(0, 1.25rem, 0) scale(0.985);
    filter: blur(10px);
    pointer-events: none;
  }

  .mode-reduced .settled-card {
    position: relative;
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
    pointer-events: auto;
  }

  .mode-reduced .active-card {
    display: none;
  }

  .mode-staged .settled-card {
    display: none;
  }

  .mode-staged .active-card[data-primary='true'] {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }

  @media (prefers-reduced-motion: no-preference) {
    .mode-sequenced .active-card {
      animation: active-card-pass var(--active-duration) cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: calc(var(--step-index, 0) * var(--step-duration));
    }

    .mode-sequenced .active-card[data-primary='true'] {
      animation-name: primary-card-pass;
    }

    .mode-sequenced .settled-card {
      animation: settled-card-in 760ms cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: var(--settle-delay);
    }
  }

  @keyframes active-card-pass {
    0% {
      opacity: 0;
      transform: translate3d(0, 1.4rem, 0) scale(0.985);
      filter: blur(10px);
    }

    14%,
    82% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }

    100% {
      opacity: 0;
      transform: translate3d(0, -0.7rem, 0) scale(0.992);
      filter: blur(10px);
    }
  }

  @keyframes primary-card-pass {
    0%,
    82% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }

    100% {
      opacity: 0;
      transform: translate3d(0, -0.7rem, 0) scale(0.992);
      filter: blur(10px);
    }
  }

  @keyframes settled-card-in {
    0% {
      opacity: 0;
      transform: translate3d(0, 1.4rem, 0) scale(0.985);
      filter: blur(10px);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }
  }
</style>
