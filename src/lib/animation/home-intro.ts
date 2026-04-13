import { getGsap } from '$lib/animation/gsap';

export type HomeIntroTimeline = ReturnType<ReturnType<typeof getGsap>['gsap']['timeline']>;

export type HomeIntroRuntime = {
  timeline: HomeIntroTimeline | null;
};

export type HomeIntroRefs = {
  appShell?: HTMLElement;
  introLayer?: HTMLDivElement;
  introCover?: HTMLDivElement;
  seal?: HTMLDivElement;
  axis?: HTMLDivElement;
  markD?: HTMLSpanElement;
  markL?: HTMLSpanElement;
  markE?: HTMLSpanElement;
  ring?: SVGCircleElement;
  pulse?: HTMLDivElement;
};

type HomeIntroScene = {
  motionProfile: 'full' | 'lite';
  introLayer: HTMLDivElement;
  introCover: HTMLDivElement;
  seal: HTMLDivElement;
  axis: HTMLDivElement;
  markD: HTMLSpanElement;
  markL: HTMLSpanElement;
  markE: HTMLSpanElement;
  ring: SVGCircleElement;
  pulse: HTMLDivElement;
  hero: ReturnType<typeof getHeroElements>;
  navbar: ReturnType<typeof getNavbarElements>;
};

type HomeIntroTimelineOptions = {
  onHandoff?: () => void;
  onRevealStart?: () => void;
  onComplete?: () => void;
};

type HomeIntroScope = ParentNode;

const INTRO_ACTIVE_ATTR = 'data-intro-active';
const INTRO_COVER_DEFAULTS = {
  '--intro-reveal-x': '50%',
  '--intro-reveal-y': '50%',
  '--intro-reveal-radius': '0px',
  '--intro-reveal-softness': '64px'
} satisfies Record<string, string>;
const INTRO_LABELS = {
  build: 0,
  dock: 1.02,
  handoff: 2.06,
  reveal: 2.18,
  nav: 2.34,
  finish: 2.88
} as const;

let sealDockEaseCreated = false;

export function resolveHomeIntroScene(refs: HomeIntroRefs): HomeIntroScene | null {
  if (typeof document === 'undefined') return null;

  const { appShell, introLayer, introCover, seal, axis, markD, markL, markE, ring, pulse } = refs;

  if (
    !introLayer ||
    !introCover ||
    !seal ||
    !axis ||
    !markD ||
    !markL ||
    !markE ||
    !ring ||
    !pulse
  ) {
    return null;
  }

  return {
    motionProfile: getHomeIntroMotionProfile(),
    introLayer,
    introCover,
    seal,
    axis,
    markD,
    markL,
    markE,
    ring,
    pulse,
    hero: getHeroElements(appShell ?? document),
    navbar: getNavbarElements(appShell ?? document)
  };
}

export function setHomeIntroActive(active: boolean) {
  if (typeof document === 'undefined') return;

  if (active) {
    document.documentElement.setAttribute(INTRO_ACTIVE_ATTR, 'true');
    return;
  }

  document.documentElement.removeAttribute(INTRO_ACTIVE_ATTR);
}

export function stopHomeIntro(runtime: HomeIntroRuntime) {
  runtime.timeline?.kill();
  runtime.timeline = null;
}

export function clearHomeIntroRuntimeStyles(scene: HomeIntroScene) {
  const { gsap } = getGsap();

  gsap.set(scene.seal, {
    clearProps:
      'x,y,scale,scaleX,scaleY,width,height,borderRadius,opacity,visibility,pointerEvents,transformOrigin'
  });

  gsap.set(scene.introCover, {
    clearProps:
      'opacity,visibility,pointerEvents,--intro-reveal-x,--intro-reveal-y,--intro-reveal-radius,--intro-reveal-softness'
  });

  if (scene.navbar.shell) {
    gsap.set(scene.navbar.shell, {
      clearProps:
        'opacity,visibility,pointerEvents,filter,scale,scaleX,scaleY,transformOrigin,clipPath'
    });
  }

  if (scene.navbar.glow) {
    gsap.set(scene.navbar.glow, { clearProps: 'opacity,filter' });
  }

  if (scene.navbar.content.length) {
    gsap.set(scene.navbar.content, { clearProps: 'opacity,y,filter,pointerEvents' });
  }

  if (scene.hero.backdrop) {
    gsap.set(scene.hero.backdrop, { clearProps: 'opacity,scale' });
  }

  if (scene.hero.content.length) {
    gsap.set(scene.hero.content, { clearProps: 'opacity,y,filter' });
  }
}

export function applyHomeIntroInitialState(scene: HomeIntroScene) {
  const { gsap } = getGsap();
  const ringLength = scene.ring.getTotalLength();
  const navbarFilter = scene.motionProfile === 'lite' ? 'blur(0px)' : 'blur(12px)';
  const heroFilter = scene.motionProfile === 'lite' ? 'blur(0px)' : 'blur(18px)';

  setHomeIntroActive(true);

  gsap.set(scene.introLayer, { autoAlpha: 1 });
  gsap.set(scene.introCover, { autoAlpha: 1, ...INTRO_COVER_DEFAULTS });
  gsap.set(scene.seal, {
    autoAlpha: 1,
    x: 0,
    y: 0,
    scale: 0,
    width: scene.seal.offsetWidth || 288,
    height: scene.seal.offsetHeight || 288,
    borderRadius: 999,
    transformOrigin: '50% 50%'
  });
  gsap.set(scene.axis, { autoAlpha: 0.2, scaleY: 0, transformOrigin: '50% 50%' });
  gsap.set(scene.markL, { autoAlpha: 0, y: 20, scale: 0.8, filter: 'blur(10px)' });
  gsap.set(scene.markD, { autoAlpha: 0, x: 18, scale: 0.82, filter: 'blur(10px)' });
  gsap.set(scene.markE, { autoAlpha: 0, x: -18, scale: 0.82, filter: 'blur(10px)' });
  gsap.set(scene.ring, { strokeDasharray: ringLength, strokeDashoffset: ringLength });
  gsap.set(scene.pulse, { autoAlpha: 0, scale: 0.84 });

  if (scene.navbar.shell) {
    gsap.set(scene.navbar.shell, {
      autoAlpha: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
      transformOrigin: '50% 50%'
    });
  }

  if (scene.navbar.glow) {
    gsap.set(scene.navbar.glow, { autoAlpha: 0, filter: 'blur(36px)' });
  }

  if (scene.navbar.content.length) {
    gsap.set(scene.navbar.content, {
      autoAlpha: 0,
      y: 14,
      filter: navbarFilter,
      pointerEvents: 'none'
    });
  }

  if (scene.hero.backdrop) {
    gsap.set(scene.hero.backdrop, { autoAlpha: 0, scale: 0.85 });
  }

  if (scene.hero.content.length) {
    gsap.set(scene.hero.content, { autoAlpha: 0, y: 28, filter: heroFilter });
  }
}

export function applyHomeIntroReducedMotionState(runtime: HomeIntroRuntime, scene: HomeIntroScene) {
  stopHomeIntro(runtime);

  const { gsap } = getGsap();

  setHomeIntroActive(false);

  gsap.set(scene.introLayer, { autoAlpha: 0 });
  gsap.set(scene.introCover, { autoAlpha: 0, ...INTRO_COVER_DEFAULTS });
  gsap.set(scene.seal, {
    autoAlpha: 0,
    x: 0,
    y: 0,
    scale: 1,
    width: 288,
    height: 288,
    borderRadius: 999
  });

  if (scene.navbar.shell) {
    gsap.set(scene.navbar.shell, {
      autoAlpha: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
      filter: 'none'
    });
  }

  if (scene.navbar.glow) {
    gsap.set(scene.navbar.glow, { autoAlpha: 0.7, filter: 'blur(32px)' });
  }

  if (scene.navbar.content.length) {
    gsap.set(scene.navbar.content, {
      autoAlpha: 1,
      y: 0,
      filter: 'blur(0px)',
      pointerEvents: 'auto'
    });
  }

  if (scene.hero.backdrop) {
    gsap.set(scene.hero.backdrop, { autoAlpha: 1, scale: 1 });
  }

  if (scene.hero.content.length) {
    gsap.set(scene.hero.content, { autoAlpha: 1, y: 0, filter: 'blur(0px)' });
  }

  clearHomeIntroRuntimeStyles(scene);
}

export function createHomeIntroTimeline(
  scene: HomeIntroScene,
  options: HomeIntroTimelineOptions = {}
) {
  const { gsap } = getGsap();

  ensureHomeIntroEases();

  const timeline = gsap.timeline({
    defaults: { ease: 'power3.out' },
    onComplete: () => {
      gsap.set(scene.introLayer, { autoAlpha: 0 });

      requestAnimationFrame(() => {
        clearHomeIntroRuntimeStyles(scene);
        options.onComplete?.();
      });
    }
  });

  timeline
    .addLabel('build', INTRO_LABELS.build)
    .addLabel('dock', INTRO_LABELS.dock)
    .addLabel('handoff', INTRO_LABELS.handoff)
    .addLabel('reveal', INTRO_LABELS.reveal)
    .addLabel('nav', INTRO_LABELS.nav)
    .addLabel('finish', INTRO_LABELS.finish);

  addBuildPhase(timeline, scene);
  addDockPhase(timeline, scene);
  addRevealPhase(timeline, scene, options);

  return timeline;
}

export function cleanupHomeIntro(runtime: HomeIntroRuntime, scene: HomeIntroScene | null) {
  stopHomeIntro(runtime);
  setHomeIntroActive(false);

  if (scene) {
    clearHomeIntroRuntimeStyles(scene);
  }
}

function getHeroElements(scope: HomeIntroScope) {
  const backdrop = scope.querySelector('[data-hero-backdrop]') as HTMLElement | null;
  const content = Array.from(scope.querySelectorAll('[data-intro-content]')).filter(
    (node): node is HTMLElement => node instanceof HTMLElement
  );

  return { backdrop, content };
}

function getNavbarElements(scope: HomeIntroScope) {
  const shell = scope.querySelector('[data-navbar-shell]') as HTMLElement | null;
  const glow = scope.querySelector('[data-navbar-glow]') as HTMLElement | null;
  const icon = scope.querySelector('[data-brand-icon]') as HTMLElement | null;
  const content = Array.from(scope.querySelectorAll('[data-navbar-content]')).filter(
    (node): node is HTMLElement => node instanceof HTMLElement
  );

  return { shell, glow, icon, content };
}

function getLogoDockState(scene: HomeIntroScene) {
  const fallback = {
    x: -window.innerWidth / 2 + 88,
    y: -window.innerHeight / 2 + 66,
    scale: 0.16
  };

  if (!scene.navbar.icon) return fallback;

  const rect = scene.navbar.icon.getBoundingClientRect();
  const size = scene.seal.offsetWidth || 288;

  return {
    x: rect.left + rect.width / 2 - window.innerWidth / 2,
    y: rect.top + rect.height / 2 - window.innerHeight / 2,
    scale: rect.width / size
  };
}

function getHandoffOrigin(scene: HomeIntroScene) {
  if (!scene.navbar.icon) {
    return {
      x: window.innerWidth / 2,
      y: Math.min(window.innerHeight * 0.2, 88)
    };
  }

  const rect = scene.navbar.icon.getBoundingClientRect();

  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
}

function getRevealMaskState(scene: HomeIntroScene) {
  const origin = getHandoffOrigin(scene);
  const endRadius = Math.max(
    Math.hypot(origin.x, origin.y),
    Math.hypot(window.innerWidth - origin.x, origin.y),
    Math.hypot(origin.x, window.innerHeight - origin.y),
    Math.hypot(window.innerWidth - origin.x, window.innerHeight - origin.y)
  );

  return {
    x: `${origin.x}px`,
    y: `${origin.y}px`,
    startRadius: 24,
    endRadius,
    softness: 64
  };
}

function getShellRevealState(scene: HomeIntroScene) {
  if (!scene.navbar.shell || !scene.navbar.icon) {
    return {
      transformOrigin: '50% 50%',
      scaleX: 0.14,
      scaleY: 0.48
    };
  }

  const shellRect = scene.navbar.shell.getBoundingClientRect();
  const iconRect = scene.navbar.icon.getBoundingClientRect();

  return {
    transformOrigin: `${iconRect.left + iconRect.width / 2 - shellRect.left}px ${iconRect.top + iconRect.height / 2 - shellRect.top}px`,
    scaleX: Math.max(iconRect.width / shellRect.width, 0.08),
    scaleY: Math.max(iconRect.height / shellRect.height, 0.2)
  };
}

function getHomeIntroMotionProfile(): HomeIntroScene['motionProfile'] {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'full';
  }

  return window.matchMedia('(max-width: 767px), (hover: none) and (pointer: coarse)').matches
    ? 'lite'
    : 'full';
}

function ensureHomeIntroEases() {
  if (sealDockEaseCreated) return;

  const { CustomEase } = getGsap();
  CustomEase.create('seal-dock-ease', '0.22, 1, 0.36, 1');
  sealDockEaseCreated = true;
}

function addBuildPhase(timeline: HomeIntroTimeline, scene: HomeIntroScene) {
  timeline
    .to(scene.seal, { scale: 1, duration: 0.44, ease: 'power3.out' }, 'build')
    .to(scene.axis, { autoAlpha: 1, scaleY: 1, duration: 0.42 }, 'build')
    .to(
      scene.markL,
      { autoAlpha: 1, y: 0, scale: 1, filter: 'blur(0px)', duration: 0.42 },
      'build+=0.14'
    )
    .to(
      [scene.markD, scene.markE],
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.5,
        stagger: 0.06
      },
      'build+=0.24'
    )
    .to(scene.ring, { strokeDashoffset: 0, duration: 0.9, ease: 'power2.inOut' }, 'build+=0.34')
    .fromTo(
      scene.pulse,
      { autoAlpha: 0, scale: 0.84 },
      { autoAlpha: 0.9, scale: 1.08, duration: 0.52, ease: 'power2.out' },
      'build+=0.62'
    );
}

function addDockPhase(timeline: HomeIntroTimeline, scene: HomeIntroScene) {
  timeline.to(scene.pulse, { autoAlpha: 0.16, duration: 0.42 }, 'dock').to(
    scene.seal,
    {
      x: () => getLogoDockState(scene).x,
      y: () => getLogoDockState(scene).y,
      scale: () => getLogoDockState(scene).scale,
      duration: 1.1,
      ease: 'seal-dock-ease'
    },
    'dock'
  );
}

function addRevealPhase(
  timeline: HomeIntroTimeline,
  scene: HomeIntroScene,
  options: HomeIntroTimelineOptions
) {
  const { gsap } = getGsap();
  const useLiteReveal = scene.motionProfile === 'lite';

  timeline
    .add(() => {
      // Release the document-level gate once GSAP owns the visible surfaces.
      setHomeIntroActive(false);
      options.onHandoff?.();

      if (!scene.navbar.shell) return;

      const maskState = getRevealMaskState(scene);
      const shellState = getShellRevealState(scene);

      gsap.set(scene.introCover, {
        '--intro-reveal-x': maskState.x,
        '--intro-reveal-y': maskState.y,
        '--intro-reveal-radius': `${useLiteReveal ? maskState.endRadius : maskState.startRadius}px`,
        '--intro-reveal-softness': `${maskState.softness}px`
      });

      gsap.set(scene.navbar.shell, {
        autoAlpha: 1,
        visibility: 'visible',
        pointerEvents: 'auto',
        transformOrigin: shellState.transformOrigin,
        scaleX: useLiteReveal ? 1 : shellState.scaleX,
        scaleY: useLiteReveal ? 1 : shellState.scaleY,
        filter: useLiteReveal ? 'none' : 'brightness(1.08)'
      });

      if (useLiteReveal && scene.navbar.glow) {
        gsap.set(scene.navbar.glow, { autoAlpha: 0.7, filter: 'blur(32px)' });
      }
    }, 'handoff')
    .add(() => {
      options.onRevealStart?.();
    }, 'reveal+=0.08')
    .to(
      scene.introCover,
      {
        '--intro-reveal-radius': () => `${getRevealMaskState(scene).endRadius}px`,
        duration: useLiteReveal ? 0.01 : 0.92,
        ease: 'power2.out'
      },
      'handoff'
    )
    .to(
      scene.hero.content,
      {
        autoAlpha: 1,
        y: 0,
        ...(useLiteReveal ? {} : { filter: 'blur(0px)' }),
        duration: 0.85,
        stagger: 0.12,
        ease: 'power2.out'
      },
      'reveal+=0.08'
    )
    .to(
      scene.navbar.content,
      {
        autoAlpha: 1,
        y: 0,
        ...(useLiteReveal ? {} : { filter: 'blur(0px)' }),
        duration: 0.56,
        stagger: 0.06,
        ease: 'power2.out',
        pointerEvents: 'auto'
      },
      'nav'
    )
    .to(
      scene.seal,
      {
        autoAlpha: 0,
        duration: 0.26,
        ease: 'power1.out'
      },
      'nav+=0.10'
    )
    .to(scene.introCover, { autoAlpha: 0, duration: 0.22, ease: 'power1.out' }, 'finish')
    .add(() => {
      if (useLiteReveal) return;
      if (!scene.navbar.icon) return;

      gsap.fromTo(
        scene.navbar.icon,
        { filter: 'brightness(1)' },
        {
          filter: 'brightness(1.08)',
          duration: 0.18,
          ease: 'power2.out',
          yoyo: true,
          repeat: 1,
          clearProps: 'filter'
        }
      );
    }, 'nav+=0.10');

  if (scene.navbar.shell && !useLiteReveal) {
    timeline.to(
      scene.navbar.shell,
      {
        scaleX: 1,
        scaleY: 1,
        filter: 'brightness(1)',
        duration: 0.58,
        ease: 'power2.out',
        pointerEvents: 'auto'
      },
      'handoff'
    );
  }

  if (scene.navbar.glow && !useLiteReveal) {
    timeline.to(
      scene.navbar.glow,
      {
        autoAlpha: 0.7,
        filter: 'blur(32px)',
        duration: 0.6,
        ease: 'power2.out'
      },
      'reveal'
    );
  }

  if (scene.hero.backdrop) {
    timeline.to(
      scene.hero.backdrop,
      { autoAlpha: 1, scale: 1, duration: 0.95, ease: 'power2.out' },
      'reveal'
    );
  }
}
