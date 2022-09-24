import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";

import useTheme from "@/hooks/useTheme";

const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  const theme = useTheme();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
