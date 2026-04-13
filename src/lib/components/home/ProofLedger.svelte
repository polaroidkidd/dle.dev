<script lang="ts">
  import type { HomeOutcome } from '$lib/content/home';

  type Props = {
    entries: HomeOutcome[];
    ledgerCount: number;
    modeClass: string;
  };

  let { entries, ledgerCount, modeClass }: Props = $props();
</script>

<aside
  class={`${modeClass} relative hidden border-t border-black/8 pt-6 xl:block xl:border-t-0 xl:border-l xl:pt-3 xl:pl-8 dark:border-white/10`}
>
  <div class="flex items-center justify-between gap-3">
    <p class="text-sm font-semibold text-foreground">Proof ledger</p>
    <div
      class="rounded-full border border-black/8 px-2.5 py-1 text-[0.65rem] font-medium tracking-[0.24em] text-muted-foreground uppercase dark:border-white/10"
    >
      {ledgerCount}/{entries.length}
    </div>
  </div>

  <div class="relative mt-6 space-y-3 xl:mt-7">
    {#each entries as entry, index (entry.id)}
      <article
        class={[
          'ledger-card relative overflow-hidden rounded-[1.6rem] border border-black/8 bg-black/[0.025] p-4 dark:border-white/10 dark:bg-white/[0.03]',
          index > 1 && 'hidden sm:block'
        ]}
        style:--ledger-order={index}
      >
        <div
          class="pointer-events-none absolute inset-y-4 left-0 w-[3px] rounded-full bg-primary/55"
        ></div>

        <p class="mt-2 text-sm leading-6 text-foreground/88">
          {entry.railLabel}
        </p>
        <p class="mt-3 text-sm leading-6 text-muted-foreground">
          {entry.proof}
        </p>
      </article>
    {/each}
  </div>
</aside>

<style>
  .mode-reduced .ledger-card {
    opacity: 1;
    transform: none;
    filter: none;
  }

  .mode-staged .ledger-card {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .mode-sequenced .ledger-card {
      opacity: 0;
      transform: translate3d(1.2rem, 0, 0) scale(0.985);
      filter: blur(8px);
      animation: ledger-dock 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
      animation-delay: calc((var(--ledger-order, 0) + 1) * var(--step-duration));
    }
  }

  @keyframes ledger-dock {
    0% {
      opacity: 0;
      transform: translate3d(1.3rem, 0, 0) scale(0.98);
      filter: blur(8px);
    }

    100% {
      opacity: 1;
      transform: translate3d(0, 0, 0) scale(1);
      filter: blur(0);
    }
  }
</style>
