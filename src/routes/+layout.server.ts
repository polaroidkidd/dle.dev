import type { LayoutServerLoad } from './$types';

const THEME_COOKIE = 'dle-theme';

export const load: LayoutServerLoad = ({ cookies }) => {
  const themeCookie = cookies.get(THEME_COOKIE);

  return {
    uiSettings: {
      theme: themeCookie === 'dark' || themeCookie === 'light' ? themeCookie : ('system' as const)
    }
  };
};
