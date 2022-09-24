import { useEffect, useState } from "react";

import { colors } from "@/themes/themes";

/**
 * Hook which will check for localStorage sett
 * If there isn't it'll set and monitor prefers-color-scheme
 */
const useTheme = () => {
  const [isDark, setIsDark] = useState(colors.dark);
  useEffect(() => {
    const darkMode = window.localStorage.getItem("darkMode");
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    const checkScheme = (e: MediaQueryListEvent | MediaQueryList) => {
      e.matches ? setIsDark(colors.dark) : setIsDark(colors.light);
    };

    if (darkMode) {
      darkMode === "true" ? setIsDark(colors.dark) : setIsDark(colors.light);
    } else checkScheme(matchDark);

    matchDark.addEventListener("change", checkScheme);

    return () => matchDark.removeEventListener("change", checkScheme);
  }, []);
  return isDark;
};

export default useTheme;
