<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import gsap from 'gsap';
  import { BookOpen, Globe, Home, Mail, Menu, X } from '@lucide/svelte';
  import { onMount } from 'svelte';

  import githubIcon from '$lib/assets/icons/github.svg';
  import linkedinIcon from '$lib/assets/icons/linkedin.svg';
  import { Button } from '$lib/components/ui/button';
  import { cn } from '$lib/utils';
  import resume from '../../../static/resume.json';
  import { AnimatedThemeToggler } from './magic/animated-theme-toggler';

  type NavItem = {
    href: string;
    label: string;
    icon: typeof Globe;
  };

  type ResumeProfile = (typeof resume.basics.profiles)[number];

  type ProfileItem = ResumeProfile & {
    iconUrl?: string;
    icon?: typeof Globe;
  };

  const navItems: NavItem[] = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/blog', label: 'Blog', icon: BookOpen }
  ];

  const profileItems: ProfileItem[] = resume.basics.profiles.map((profile) => ({
    ...profile,
    iconUrl:
      profile.network === 'Github'
        ? githubIcon
        : profile.network === 'LinkedIn'
          ? linkedinIcon
          : undefined,
    icon: profile.network === 'Website' ? Globe : undefined
  }));

  const pathname = $derived(page.url.pathname);

  const navShellClass = cn(
    'relative mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3',
    'rounded-[2rem] border border-black/8 bg-white/88 px-3 py-3',
    'shadow-[0_20px_70px_-35px_rgba(15,23,42,0.45)] backdrop-blur-2xl',
    'transition-[background-color,border-color,box-shadow] duration-500 min-[930px]:flex-nowrap min-[930px]:px-4',
    'dark:border-white/8 dark:bg-zinc-950/78'
  );

  const mutedPillClass = cn(
    'rounded-full border border-black/6 bg-black/[0.03]',
    'dark:border-white/8 dark:bg-white/[0.03]'
  );

  const iconButtonClass = cn(
    'inline-flex size-11 items-center justify-center rounded-full',
    'border border-black/8 bg-white/70 text-foreground',
    'transition-all duration-300 hover:bg-white',
    'dark:border-white/10 dark:bg-white/[0.05]',
    'dark:text-white dark:hover:bg-white/[0.08]'
  );

  const navbarIconClass = cn('size-5');

  const navbarImageIconClass = cn(navbarIconClass, 'object-contain dark:invert');

  const navItemBaseClass = cn(
    'h-auto rounded-full px-4 py-2 text-sm font-medium',
    'transition-colors duration-200'
  );

  const activeNavItemClass = cn(
    'bg-primary text-primary-foreground shadow-sm',
    'hover:bg-primary/95'
  );

  const inactiveNavItemClass = cn(
    'bg-nav-inactive text-nav-inactive-foreground',
    'hover:bg-nav-inactive/85 dark:hover:bg-nav-inactive/85'
  );

  const contactLinkClass = cn(
    'inline-flex items-center gap-2 rounded-full border border-black/8',
    'bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground',
    'transition-all duration-300 hover:opacity-92 dark:border-white/10'
  );

  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }

  function isActive(href: string) {
    if (href === '/') {
      return pathname === '/';
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  // Floating navbar scroll logic
  let headerEl: HTMLElement | undefined;
  let lastScrollY = 0;
  let visible = true;

  function setVisible(show: boolean) {
    if (!headerEl) return;
    if (show === visible) return;
    visible = show;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      gsap.set(headerEl, { y: show ? 0 : -120, opacity: show ? 1 : 0 });
      return;
    }

    if (show) {
      gsap.to(headerEl, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out'
      });
    } else {
      gsap.to(headerEl, {
        y: -120,
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in'
      });
    }
  }

  function handleScroll() {
    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY;

    if (currentScrollY < 80) {
      // Near the top — always show
      setVisible(true);
    } else if (scrollDelta < 0) {
      // Scrolling up — reveal
      setVisible(true);
    } else if (scrollDelta > 4) {
      // Scrolling down with intent — hide
      setVisible(false);
    }

    lastScrollY = currentScrollY;
  }

  onMount(() => {
    // Start fully visible
    gsap.set(headerEl!, { y: 0, opacity: 1 });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<header bind:this={headerEl} class={cn('fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-5')}>
  <div class={cn('mx-auto max-w-6xl')}>
    <div class={cn('relative')}>
      <div
        data-navbar-glow
        class={cn(
          'absolute inset-x-10 -top-2 -z-10 h-14 rounded-full bg-foreground/8',
          'opacity-70 blur-2xl'
        )}
      ></div>

      <nav
        data-navbar-shell
        data-mobile-open={isMenuOpen ? 'true' : 'false'}
        aria-label="Primary"
        class={cn(navShellClass)}
      >
        <div
          class={cn(
            'pointer-events-none absolute inset-0 rounded-[inherit]',
            'bg-linear-to-b from-white/35 via-transparent to-transparent',
            'dark:from-white/7'
          )}
        ></div>

        <a
          href={resolve('/', {})}
          class={cn(
            'relative z-10 flex min-w-0 flex-1 items-center gap-3 rounded-full',
            'px-2 py-1.5 text-left sm:flex-none'
          )}
        >
          <span
            data-brand-icon
            class={cn(
              'flex size-11 shrink-0 items-center justify-center rounded-full',
              'border border-black/10 bg-black/3 text-foreground shadow-sm',
              'transition-colors duration-500',
              'dark:border-white/10 dark:bg-white/6 dark:text-white'
            )}
          >
            <img src="/favicon-light.svg" alt="" class={cn('size-6 object-contain dark:hidden')} />
            <img
              src="/favicon-dark.svg"
              alt=""
              class={cn('hidden size-6 object-contain dark:block')}
            />
          </span>

          <span data-navbar-content class={cn('min-w-0')}>
            <span class={cn('block truncate font-heading text-sm font-semibold sm:text-base')}>
              Daniel L. Einars
            </span>
            <span class={cn('block truncate text-xs text-muted-foreground')}>
              Designer-engineer • premium frontend systems
            </span>
          </span>
        </a>

        <div
          data-navbar-content
          class={cn(
            'relative z-10 hidden flex-wrap items-center justify-center gap-1 p-1 min-[930px]:flex',
            mutedPillClass
          )}
        >
          {#each navItems as item (item.href)}
            {@const active = isActive(item.href)}
            <Button
              href={resolve(item.href, {})}
              aria-current={active ? 'page' : undefined}
              class={cn(
                navItemBaseClass,
                'flex items-center gap-1.5',
                active ? activeNavItemClass : inactiveNavItemClass
              )}
            >
              <item.icon class="size-4" />
              {item.label}
            </Button>
          {/each}
        </div>

        <div data-navbar-content class={cn('relative z-10 flex items-center gap-2 sm:justify-end')}>
          {#each profileItems as profile (profile.url)}
            <a
              href={profile.url}
              target="_blank"
              rel="external noreferrer"
              class={cn(iconButtonClass, 'hidden min-[930px]:inline-flex')}
              aria-label={profile.username}
              title={profile.network}
            >
              {#if profile.iconUrl}
                <img src={profile.iconUrl} alt="" class={navbarImageIconClass} />
              {:else if profile.icon}
                <profile.icon class={navbarIconClass} />
              {/if}
              <span class={cn('sr-only')}>{profile.network}</span>
            </a>
          {/each}

          <AnimatedThemeToggler class={iconButtonClass} />

          <button
            type="button"
            class={cn(iconButtonClass, 'min-[930px]:hidden')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-panel"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onclick={toggleMenu}
          >
            {#if isMenuOpen}
              <X class={navbarIconClass} />
            {:else}
              <Menu class={navbarIconClass} />
            {/if}
          </button>

          <a
            href="mailto:hi@dle.dev"
            class={cn(contactLinkClass, 'hidden min-[930px]:inline-flex')}
          >
            <Mail class={navbarIconClass} />
            <span>Contact</span>
          </a>
        </div>

        <div
          id="mobile-nav-panel"
          aria-hidden={!isMenuOpen}
          class={cn(
            'relative z-10 grid w-full min-[930px]:hidden',
            'transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
            isMenuOpen
              ? 'grid-rows-[1fr] opacity-100'
              : 'pointer-events-none grid-rows-[0fr] opacity-0'
          )}
        >
          <div class={cn('overflow-hidden')}>
            <div class={cn('flex flex-col gap-2 px-2 pt-1 pb-2')}>
              {#each navItems as item, index (item.href)}
                {@const active = isActive(item.href)}
                <div
                  style={`--mobile-nav-delay:${isMenuOpen ? index * 40 : 0}ms`}
                  class={cn('mobile-nav-item', isMenuOpen && 'mobile-nav-item-open')}
                >
                  <Button
                    href={resolve(item.href, {})}
                    aria-current={active ? 'page' : undefined}
                    class={cn(
                      navItemBaseClass,
                      'flex w-full items-center justify-center gap-1.5 py-2.5',
                      active ? activeNavItemClass : inactiveNavItemClass
                    )}
                    onclick={closeMenu}
                  >
                    <item.icon class="size-4" />
                    {item.label}
                  </Button>
                </div>
              {/each}

              <div
                style={`--mobile-nav-delay:${isMenuOpen ? navItems.length * 40 : 0}ms`}
                class={cn('mobile-nav-item', isMenuOpen && 'mobile-nav-item-open')}
              >
                <div class={cn('flex items-center justify-center gap-2 py-1')}>
                  {#each profileItems as profile (profile.url)}
                    <a
                      href={profile.url}
                      target="_blank"
                      rel="external noreferrer"
                      class={cn(iconButtonClass, 'w-1/2 gap-2 rounded-2xl')}
                      aria-label={profile.username}
                      title={profile.network}
                      onclick={closeMenu}
                    >
                      {#if profile.iconUrl}
                        <img src={profile.iconUrl} alt="" class={navbarImageIconClass} />
                      {:else if profile.icon}
                        <profile.icon class={navbarIconClass} />
                      {/if}
                      <span class="text-sm font-medium">{profile.network}</span>
                    </a>
                  {/each}
                </div>
              </div>

              <div
                style={`--mobile-nav-delay:${isMenuOpen ? (navItems.length + 1) * 40 : 0}ms`}
                class={cn('mobile-nav-item', isMenuOpen && 'mobile-nav-item-open')}
              >
                <a
                  href="mailto:hi@dle.dev"
                  class={cn(contactLinkClass, 'w-full justify-center')}
                  onclick={closeMenu}
                >
                  <Mail class={navbarIconClass} />
                  <span>Contact</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</header>

<style>
  :global(nav[data-navbar-shell]) {
    transform-origin: top center;
  }

  .mobile-nav-item {
    opacity: 0;
    transform: translateY(-0.5rem);
    transition:
      transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 180ms ease;
    transition-delay: 0ms;
  }

  .mobile-nav-item-open {
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--mobile-nav-delay, 0ms);
  }

  @media (max-width: 929px) {
    :global(nav[data-navbar-shell]) {
      transition:
        transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1),
        background-color 320ms cubic-bezier(0.22, 1, 0.36, 1),
        border-color 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    :global(nav[data-navbar-shell] > div:first-child) {
      transition:
        opacity 320ms cubic-bezier(0.22, 1, 0.36, 1),
        background 320ms cubic-bezier(0.22, 1, 0.36, 1),
        box-shadow 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }

    :global(div[data-navbar-glow]) {
      transition:
        opacity 320ms cubic-bezier(0.22, 1, 0.36, 1),
        transform 320ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 320ms cubic-bezier(0.22, 1, 0.36, 1);
      transform-origin: top center;
    }

    :global(nav[data-navbar-shell][data-mobile-open='true']) {
      transform: scale(1.015);
      box-shadow: 0 28px 90px -38px rgba(15, 23, 42, 0.58);
    }

    :global(nav[data-navbar-shell][data-mobile-open='true'] > div:first-child) {
      opacity: 1;
      background: linear-gradient(to bottom, rgb(255 255 255 / 0.5), transparent 58%);
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.22),
        inset 0 18px 40px rgb(255 255 255 / 0.08);
    }

    :global(.dark nav[data-navbar-shell][data-mobile-open='true'] > div:first-child) {
      background: linear-gradient(to bottom, rgb(255 255 255 / 0.1), transparent 58%);
      box-shadow:
        inset 0 1px 0 rgb(255 255 255 / 0.12),
        inset 0 18px 44px rgb(255 255 255 / 0.05);
    }

    :global(div[data-navbar-glow]:has(+ nav[data-navbar-shell][data-mobile-open='true'])) {
      opacity: 0.95;
      transform: scale(1.08);
      filter: blur(42px);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :global(nav[data-navbar-shell]),
    :global(nav[data-navbar-shell] > div:first-child),
    :global(div[data-navbar-glow]),
    .mobile-nav-item {
      transition: opacity 120ms ease;
      transform: none;
    }

    :global(nav[data-navbar-shell][data-mobile-open='true']) {
      transform: none;
    }
  }
</style>
