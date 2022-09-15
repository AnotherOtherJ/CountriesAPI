import type { PropsWithChildren } from "react";

import StyledPage from "./PageWrapper.style";

const PageWrapper = ({ children }: PropsWithChildren): JSX.Element => {
  return <StyledPage>{children}</StyledPage>;
};
export default PageWrapper;
