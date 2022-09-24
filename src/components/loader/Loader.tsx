import { ArrowSyncCircleRegular } from "@fluentui/react-icons";
import { memo } from "react";

import StyledLoader, { StyledLoaderWrapper } from "./Loader.style";

const Loader = (): JSX.Element => {
  return (
    <StyledLoader>
      <StyledLoaderWrapper
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ type: "spring", stiffness: 80, mass: 0.5, repeat: Infinity }}
      >
        <ArrowSyncCircleRegular className="icon" />
      </StyledLoaderWrapper>
    </StyledLoader>
  );
};

export default memo(Loader);
