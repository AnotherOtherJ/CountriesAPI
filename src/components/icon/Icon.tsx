import StyledIcon from "./Icon.style";
import type { IconProps } from "./Icon.types";

const Icon = ({ glyph }: IconProps): JSX.Element => {
  return <StyledIcon>{glyph}</StyledIcon>;
};
export default Icon;
