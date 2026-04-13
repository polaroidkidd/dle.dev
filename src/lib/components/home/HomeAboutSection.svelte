<section
  aria-labelledby="about-me-title"
  class="mx-auto max-w-6xl px-4 py-20 sm:mt-8 sm:px-6 lg:px-8"
>
  <div class="relative">
    <div
      class="section-glow pointer-events-none absolute -inset-x-4 -inset-y-3 rounded-[2.5rem] sm:-inset-x-6 sm:-inset-y-4 lg:-inset-x-8 lg:-inset-y-5"
    ></div>

    <div class="relative z-10 pt-3 pb-7 sm:pt-4 sm:pb-8 lg:pt-5 lg:pb-12">
      <div
        class="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-stretch lg:gap-12"
      >
        <div class="relative lg:h-full">
          <div
            class="overflow-hidden rounded-[1.8rem] border border-black/8 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] lg:h-full dark:border-white/10"
          >
            <enhanced:img
              src="/static/forrest.webp"
              alt="Sunlight streaming through a forest"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div class="max-w-3xl">
          <h2
            id="about-me-title"
            class="font-heading text-[clamp(1.9rem,3.3vw,3rem)] font-semibold tracking-[-0.04em] text-foreground"
          >
            Life outside the editor.
          </h2>
          <p
            class="mt-4 text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
          >
            I live in Switzerland with my family, and I tend to divide my time between the outdoors
            and building things that make life a bit simpler. I’m drawn to work that’s hands-on and
            incremental—whether that’s volunteering as a firefighter, hiking through the mountains
            with my dog, or slowly shaping a side project into something useful.
          </p>

          <p
            class="mt-4 text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
          >
            A lot of what I build starts small: a script to remove a bit of friction, a service I
            want to run myself, a new stack I’m curious about. Underneath all of it is the same
            motivation—time is always scarce, and there’s never a shortage of things competing for
            attention. If I can build something that reduces that load, cuts out repetition, or just
            makes a task easier, that’s a win.
          </p>

          <p
            class="mt-4 text-[0.98rem] leading-7 text-muted-foreground sm:text-[1.02rem] lg:text-[1.08rem] lg:leading-8"
          >
            And every now and then, I step away from all of it and head to a motorcycle track for
            the opposite experience: speed, focus, and no room for overthinking.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .section-glow {
    border: 1px solid color-mix(in oklab, var(--color-primary) 10%, transparent);
    box-shadow:
      inset 0 0 0 1px color-mix(in oklab, var(--color-foreground) 4%, transparent),
      0 0 44px -28px color-mix(in oklab, var(--color-primary) 24%, transparent),
      0 24px 90px -60px color-mix(in oklab, var(--color-primary) 18%, transparent);
  }
</style>
