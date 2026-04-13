import { Context } from 'runed';
import type { ReadableBoxedValues } from 'svelte-toolbelt';

export type Timeout = ReturnType<typeof setTimeout> | undefined;

export type TerminalLoopProps = {
  onComplete: () => void;
};

export class TerminalLoop {
  constructor(readonly opts: TerminalLoopProps) {
    this.onComplete = this.onComplete.bind(this);
  }

  onComplete() {
    this.opts.onComplete();
  }
}

export type TerminalRootProps = ReadableBoxedValues<{
  delay: number;
  speed: number;
  onComplete: () => void;
}>;

export class TerminalSession {
  #animations: AnimationState[] = $state([]);
  #timeout: Timeout;

  constructor(
    readonly opts: TerminalRootProps,
    readonly loop?: TerminalLoop
  ) {
    this.onComplete = this.onComplete.bind(this);
  }

  play() {
    this.#timeout = setTimeout(() => {
      this.#animations.sort((a, b) => a.opts.delay.current - b.opts.delay.current);

      this.playAnimationAt(0);
    }, this.opts.delay.current);
  }

  playAnimationAt(index: number) {
    const animation = this.#animations[index];

    if (!animation) {
      this.onComplete();
      return;
    }

    animation.timeout = setTimeout(() => {
      animation.onComplete =
        index === this.#animations.length - 1
          ? this.onComplete
          : () => this.playAnimationAt(index + 1);

      animation.play(this.opts.speed.current);
    }, animation.opts.delay.current);
  }

  onComplete() {
    this.opts.onComplete.current?.();

    this.loop?.onComplete();
  }

  dispose() {
    clearTimeout(this.#timeout);
  }

  registerAnimation(animation: AnimationState) {
    this.#animations.push(animation);
  }
}

export type AnimationStateProps = ReadableBoxedValues<{
  delay: number;
}> & {
  play: (speed: number) => void;
};

export class AnimationState {
  timeout: Timeout;
  onComplete = $state<() => void>();

  constructor(
    readonly rootState: TerminalSession,
    readonly opts: AnimationStateProps
  ) {
    rootState.registerAnimation(this);
  }

  play(speed: number) {
    this.opts.play(speed);
  }

  dispose() {
    clearTimeout(this.timeout);
  }
}

const TerminalLoopContext = new Context<TerminalLoop>('Terminal.Loop');
const TerminalRootContext = new Context<TerminalSession>('Terminal.Root');

export const useTerminalLoop = (props: TerminalLoopProps) => {
  return TerminalLoopContext.set(new TerminalLoop(props));
};

export const useTerminalRoot = (props: TerminalRootProps) => {
  return TerminalRootContext.set(new TerminalSession(props, TerminalLoopContext.getOr(undefined)));
};

export const useAnimation = (props: AnimationStateProps) => {
  return new AnimationState(TerminalRootContext.get(), props);
};
