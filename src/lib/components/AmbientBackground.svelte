<script lang="ts">
  import { onMount } from 'svelte';

  const rows = Array.from({ length: 11 }, (_, index) => index);
  const cols = Array.from({ length: 16 }, (_, index) => index);
  const colCount = cols.length;

  const accents = [
    'color-mix(in oklab, var(--color-primary) 18%, transparent)',
    'color-mix(in oklab, var(--color-foreground) 12%, transparent)',
    'color-mix(in oklab, white 16%, transparent)',
    'color-mix(in oklab, var(--color-primary) 10%, white 6%)'
  ] as const;

  function getCellAccent(row: number, col: number) {
    return accents[(row * 5 + col * 3) % accents.length];
  }

  function getCellOpacity(row: number, col: number) {
    return 0.16 + ((row * 13 + col * 7) % 6) * 0.035;
  }

  function getCellDelay(row: number, col: number) {
    return `${((row + col) % 9) * -0.7}s`;
  }

  function showMarker(row: number, col: number) {
    return row % 3 === 0 && col % 4 === 0;
  }

  let cellElements: Array<HTMLDivElement | undefined> = [];
  let activeCellIndex = $state<number | null>(null);

  let pointerX = 0;
  let pointerY = 0;
  let hitTestFrame = 0;

  function getCellIndex(row: number, col: number) {
    return row * colCount + col;
  }

  function trackCell(index: number) {
    return (node: HTMLDivElement) => {
      cellElements[index] = node;

      return () => {
        cellElements[index] = undefined;
      };
    };
  }

  function updateActiveCell(event: PointerEvent) {
    pointerX = event.clientX;
    pointerY = event.clientY;

    if (hitTestFrame) return;

    hitTestFrame = window.requestAnimationFrame(() => {
      hitTestFrame = 0;
      activeCellIndex = getActiveCellIndex(pointerX, pointerY);
    });
  }

  function getActiveCellIndex(x: number, y: number) {
    let closestIndex: number | null = null;
    let closestDistance = Number.POSITIVE_INFINITY;

    for (let index = 0; index < cellElements.length; index += 1) {
      const cell = cellElements[index];

      if (!cell) continue;

      const rect = cell.getBoundingClientRect();
      const withinX = x >= rect.left && x <= rect.right;
      const withinY = y >= rect.top && y <= rect.bottom;

      if (!withinX || !withinY) continue;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distance = Math.hypot(x - centerX, y - centerY);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    }

    return closestIndex;
  }

  function clearActiveCell() {
    if (hitTestFrame) {
      cancelAnimationFrame(hitTestFrame);
      hitTestFrame = 0;
    }

    activeCellIndex = null;
  }

  onMount(() => clearActiveCell);
</script>

<svelte:window
  onpointermove={updateActiveCell}
  onpointerleave={clearActiveCell}
  onblur={clearActiveCell}
/>

<div class="background-boxes" aria-hidden="true">
  <div class="background-boxes__mask"></div>

  <div class="background-boxes__grid-shell">
    <div class="background-boxes__grid">
      {#each rows as row (row)}
        <div class="background-boxes__row">
          {#each cols as col (`${row}-${col}`)}
            {@const marker = showMarker(row, col)}
            {@const cellIndex = getCellIndex(row, col)}
            <div
              {@attach trackCell(cellIndex)}
              class={[
                'background-boxes__cell',
                marker && 'background-boxes__cell--marker',
                activeCellIndex === cellIndex && 'background-boxes__cell--active'
              ]}
              style={`--cell-accent: ${getCellAccent(row, col)}; --cell-opacity: ${getCellOpacity(row, col)}; animation-delay: ${getCellDelay(row, col)};`}
            >
              {#if marker}
                <span class="background-boxes__marker background-boxes__marker--x"></span>
                <span class="background-boxes__marker background-boxes__marker--y"></span>
              {/if}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  </div>

  <div class="background-boxes__glow background-boxes__glow--primary"></div>
  <div class="background-boxes__glow background-boxes__glow--secondary"></div>
</div>

<style>
  .background-boxes {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    isolation: isolate;
  }

  .background-boxes__mask {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(
        circle at 50% 32%,
        transparent 0,
        transparent 22%,
        color-mix(in oklab, var(--color-primary) 8%, white 10%) 78%
      ),
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.18),
        transparent 18%,
        transparent 82%,
        rgb(255 255 255 / 0.16)
      );
    opacity: 0.65;
  }

  :global(.dark) .background-boxes__mask {
    background:
      radial-gradient(circle at 50% 30%, transparent 0, transparent 24%, rgb(0 0 0 / 0.48) 80%),
      linear-gradient(
        180deg,
        rgb(255 255 255 / 0.06),
        transparent 14%,
        transparent 84%,
        rgb(0 0 0 / 0.28)
      );
    opacity: 0.9;
  }

  .background-boxes__grid-shell {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(132rem, 180vw);
    height: min(76rem, 125vh);
    transform: translate3d(-40%, -54%, 0) skewX(-34deg) skewY(10deg) scale(0.92);
    transform-origin: center;
    opacity: 0.55;
  }

  :global(.dark) .background-boxes__grid-shell {
    opacity: 0.42;
  }

  .background-boxes__grid {
    display: grid;
    gap: 0;
  }

  .background-boxes__row {
    display: flex;
  }

  .background-boxes__cell {
    position: relative;
    height: clamp(2.75rem, 3vw, 4rem);
    width: clamp(4rem, 4.8vw, 6rem);
    border-right: 1px solid color-mix(in oklab, var(--color-foreground) 10%, transparent);
    border-top: 1px solid color-mix(in oklab, var(--color-foreground) 10%, transparent);
    background: color-mix(
      in oklab,
      var(--cell-accent) calc(var(--cell-opacity) * 100%),
      transparent
    );
    animation: breathe 18s ease-in-out infinite;
    transition:
      background-color 180ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;
  }

  .background-boxes__cell::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    background: linear-gradient(
      140deg,
      color-mix(in oklab, var(--cell-accent) 56%, white 18%),
      color-mix(in oklab, var(--color-primary) 22%, transparent)
    );
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, var(--color-primary) 34%, white 14%),
      0 0 2rem color-mix(in oklab, var(--cell-accent) 34%, transparent);
    transition:
      opacity 180ms cubic-bezier(0.22, 1, 0.36, 1),
      box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1);
  }

  :global(.dark) .background-boxes__cell {
    border-right-color: color-mix(in oklab, white 10%, transparent);
    border-top-color: color-mix(in oklab, white 10%, transparent);
  }

  :global(.dark) .background-boxes__cell::after {
    background: linear-gradient(
      140deg,
      color-mix(in oklab, var(--cell-accent) 62%, white 20%),
      color-mix(in oklab, var(--color-primary) 28%, transparent)
    );
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, white 28%, var(--color-primary) 24%),
      0 0 2.25rem color-mix(in oklab, var(--color-primary) 24%, transparent);
  }

  .background-boxes__cell--active {
    z-index: 1;
    background: color-mix(
      in oklab,
      var(--cell-accent) calc((var(--cell-opacity) + 0.28) * 100%),
      transparent
    );
  }

  .background-boxes__cell--active::after {
    opacity: 1;
  }

  .background-boxes__cell--marker {
    overflow: visible;
  }

  .background-boxes__marker {
    position: absolute;
    background: color-mix(in oklab, var(--color-foreground) 15%, transparent);
    opacity: 0.7;
  }

  :global(.dark) .background-boxes__marker {
    background: color-mix(in oklab, white 18%, transparent);
    opacity: 0.55;
  }

  .background-boxes__marker--x {
    left: -1.375rem;
    top: -0.875rem;
    height: 1px;
    width: 2.75rem;
  }

  .background-boxes__marker--y {
    left: -0.0625rem;
    top: -1.5rem;
    height: 2.75rem;
    width: 1px;
  }

  .background-boxes__glow {
    position: absolute;
    border-radius: 9999px;
    filter: blur(90px);
    opacity: 0.32;
    mix-blend-mode: plus-lighter;
  }

  .background-boxes__glow--primary {
    left: 8%;
    top: 10%;
    height: 20rem;
    width: 20rem;
    background: color-mix(in oklab, var(--color-primary) 20%, transparent);
  }

  .background-boxes__glow--secondary {
    right: 6%;
    bottom: 8%;
    height: 18rem;
    width: 18rem;
    background: color-mix(in oklab, var(--color-primary) 12%, white 10%);
  }

  :global(.dark) .background-boxes__glow {
    opacity: 0.2;
  }

  @media (width <= 48rem) {
    .background-boxes__grid-shell {
      width: 180vw;
      height: 110vh;
      transform: translate3d(-44%, -52%, 0) skewX(-28deg) skewY(8deg) scale(1.05);
    }

    .background-boxes__glow--primary {
      left: -8%;
      top: 8%;
    }

    .background-boxes__glow--secondary {
      right: -8%;
      bottom: 2%;
    }
  }

  @keyframes breathe {
    0%,
    100% {
      opacity: 0.72;
      transform: translate3d(0, 0, 0);
    }

    50% {
      opacity: 1;
      transform: translate3d(0, -0.125rem, 0);
    }
  }
</style>
