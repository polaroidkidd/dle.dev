import { createContext } from 'svelte';

export class HomeIntroController {
  prefersReducedMotion = $state(false);
  hasRevealed = $state(false);
  hasPlayed = $state(false);
  replay: () => void = () => {};

  get statusMessage() {
    return this.prefersReducedMotion
      ? 'Reduced motion is on — the page settles instantly.'
      : this.hasPlayed
        ? 'Dock complete.'
        : 'Docking sequence in progress.';
  }

  setReplay = (replay: () => void) => {
    this.replay = replay;
  };

  requestReplay = () => {
    this.replay();
  };
}

export const [getHomeIntro, setHomeIntro] = createContext<HomeIntroController>();
