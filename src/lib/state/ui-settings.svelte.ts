import { createContext } from 'svelte';

export type Theme = 'light' | 'dark';
export type ThemePreference = Theme | 'system';

export type UiSettingsSnapshot = {
  theme: ThemePreference;
};

const THEME_COOKIE = 'dle-theme';
const ONE_YEAR = 60 * 60 * 24 * 365;

function persistCookie(name: string, value: string) {
  if (typeof document === 'undefined') return;

  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${ONE_YEAR}; SameSite=Lax`;
}

export class UiSettings {
  theme = $state<ThemePreference>('system');
  systemTheme = $state<Theme>('light');

  constructor(initial: UiSettingsSnapshot) {
    this.theme = initial.theme;

    if (typeof window !== 'undefined') {
      this.systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
  }

  get resolvedTheme(): Theme {
    return this.theme === 'system' ? this.systemTheme : this.theme;
  }

  applyThemeToDocument = () => {
    if (typeof document === 'undefined') return;

    document.documentElement.classList.toggle('dark', this.resolvedTheme === 'dark');
    document.documentElement.style.colorScheme = this.resolvedTheme;
  };

  observeSystemTheme = () => {
    if (typeof window === 'undefined') return () => {};

    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const sync = (event?: MediaQueryListEvent) => {
      this.systemTheme = (event?.matches ?? media.matches) ? 'dark' : 'light';
    };

    sync();

    if (typeof media.addEventListener === 'function') {
      media.addEventListener('change', sync);

      return () => media.removeEventListener('change', sync);
    }

    media.addListener(sync);

    return () => media.removeListener(sync);
  };

  setTheme = (theme: ThemePreference) => {
    this.theme = theme;
    this.applyThemeToDocument();

    if (theme === 'system') {
      persistCookie(THEME_COOKIE, 'system');
      return;
    }

    persistCookie(THEME_COOKIE, theme);
  };

  toggleTheme = () => {
    this.setTheme(this.resolvedTheme === 'dark' ? 'light' : 'dark');
  };
}

export const [getUiSettings, setUiSettings] = createContext<UiSettings>();
