<script lang="ts">
  import { Moon, Sun } from '@lucide/svelte';
  import type { HTMLButtonAttributes } from 'svelte/elements';

  import { getUiSettings } from '$lib/state/ui-settings.svelte';
  import { cn } from '../../../utils.js';

  type Props = HTMLButtonAttributes & {
    class?: string;
    duration?: number;
  };

  type ViewTransition = {
    ready: Promise<void>;
  };

  type ViewTransitionDocument = Document & {
    startViewTransition?: (update: () => void | Promise<void>) => ViewTransition;
  };

  let { class: className, duration = 450, ...props }: Props = $props();

  const ui = getUiSettings();

  let isDark = $derived(ui.resolvedTheme === 'dark');

  async function toggleTheme(event: MouseEvent) {
    const button = event.currentTarget;

    if (!(button instanceof HTMLButtonElement)) return;

    const doc = document as ViewTransitionDocument;
    const nextIsDark = !isDark;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const applyTheme = () => {
      ui.setTheme(nextIsDark ? 'dark' : 'light');
    };

    if (!doc.startViewTransition || prefersReducedMotion) {
      applyTheme();
      return;
    }

    await doc.startViewTransition(() => {
      applyTheme();
    }).ready;

    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    );

    document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
      },
      {
        duration,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  }
</script>

<button
  type="button"
  onclick={toggleTheme}
  aria-label="Toggle theme"
  aria-pressed={isDark}
  class={cn(className)}
  {...props}
>
  <span class="sr-only">Toggle theme</span>

  {#if isDark}
    <Sun class="size-4.5" />
  {:else}
    <Moon class="size-4.5" />
  {/if}
</button>
