import { ThemeProvider } from "@emotion/react";
import type { PropsWithChildren } from "react";

import { colors } from "../../themes/themes";

const AppProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <ThemeProvider theme={colors.dark}>{children}</ThemeProvider>;
};

export default AppProvider;
