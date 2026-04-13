<script lang="ts">
  import type { ClassValue } from 'svelte/elements';

  type Props = {
    children?: import('svelte').Snippet;
    class?: ClassValue;
  };

  let { children, class: className }: Props = $props();
</script>

<span class={['aurora-text inline-block', className]}>
  {@render children?.()}
</span>

<style>
  .aurora-text {
    background-image: linear-gradient(
      112deg,
      #cc0f7a 0%,
      #d9471c 22%,
      #b8860b 42%,
      #0f86d8 70%,
      #4f46e5 100%
    );
    background-size: 220% 220%;
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    filter: saturate(1.18) brightness(0.96) contrast(1.06);
    text-shadow:
      0 1px 0 rgb(255 255 255 / 0.38),
      0 0 14px rgb(79 70 229 / 0.08);
    animation: aurora-shift 6.4s ease-in-out infinite alternate;
  }

  :global(.dark) .aurora-text {
    background-image: linear-gradient(
      112deg,
      #ff7af6 0%,
      #8c7bff 26%,
      #42d7ff 52%,
      #2effb8 76%,
      #fff06a 100%
    );
    filter: saturate(1.48) brightness(1.15);
    text-shadow:
      0 0 20px rgb(140 123 255 / 0.2),
      0 0 30px rgb(46 255 184 / 0.14);
  }

  @keyframes aurora-shift {
    0% {
      background-position: 0% 50%;
    }

    100% {
      background-position: 100% 50%;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .aurora-text {
      animation: none;
      background-position: 40% 50%;
    }
  }
</style>
