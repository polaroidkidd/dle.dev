<script lang="ts">
  import { onDestroy } from 'svelte';
  import { box } from 'svelte-toolbelt';

  import { typewriter } from '$lib/actions/typewriter.svelte';
  import { cn } from '$lib/utils.js';

  import { useAnimation } from './terminal.svelte.js';
  import type { TerminalAnimationProps } from './types';

  let { children, delay = 0, class: className }: TerminalAnimationProps = $props();

  let playAnimation = $state(false);
  let animationSpeed = $state(1);

  const play = (speed: number) => {
    playAnimation = true;
    animationSpeed = speed;
  };

  const animation = useAnimation({ delay: box.with(() => delay), play });

  onDestroy(() => animation.dispose());
</script>

{#if playAnimation}
  <span
    class={cn('block', className)}
    transition:typewriter={{
      speed: animationSpeed * 2,
      onComplete: () => animation.onComplete?.()
    }}
  >
    {@render children?.()}
  </span>
{/if}
