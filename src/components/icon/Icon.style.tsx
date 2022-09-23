import styled from "@emotion/styled";

import type { StyledProps } from "./Icon.types";

const StyledIcon = styled.span<StyledProps>`
  font-family: "Segoe Fluent Icons", "Segoe Fluent Icons";
  font-size: ${({ iconSize }) => (iconSize ? `${iconSize}rem` : `1.1rem`)};
`;

export default StyledIcon;
