import type { ReactElement, ReactNode } from "react";
import { createContext, useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";

const initialState = false;

export const ThemeContext = createContext({
  isDarkTheme: initialState,
  toggleThemeHandler: () => {},
});

interface ThemePropsInterface {
  children: ReactNode;
}

export function ThemeContextProvider(props: ThemePropsInterface): ReactElement {
  const [isDarkTheme, setIsDarkTheme] = useState(initialState);

  const initialThemeHandler = useCallback((): void => {
    const themeCookie = Cookies.get("theme");
    setIsDarkTheme(themeCookie === "dark");
    if (themeCookie) {
      document
        .querySelector("html")
        ?.classList.remove(isDarkTheme ? "dark" : "light");
      document.querySelector("html")?.classList.add(themeCookie);
    } else {
      const date = new Date();
      const expires = new Date(date.setMonth(date.getMonth() + 1));
      Cookies.set("theme", "light", {
        secure: true,
        expires: expires,
      });
    }
  }, [isDarkTheme]);
  useEffect(() => initialThemeHandler(), [initialThemeHandler]);

  function toggleThemeHandler(): void {
    const themeCookie = Cookies.get("theme");
    setIsDarkTheme((ps) => !ps);
    const date = new Date();
    const expires = new Date(date.setMonth(date.getMonth() + 1));
    Cookies.set("theme", themeCookie !== "dark" ? "dark" : "light", {
      secure: true,
      expires: expires,
    });
    toggleDarkClassToBody();
  }

  function toggleDarkClassToBody(): void {
    document
      .querySelector("html")
      ?.classList.remove(isDarkTheme ? "dark" : "light");
    document
      .querySelector("html")
      ?.classList.add(!isDarkTheme ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleThemeHandler }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
