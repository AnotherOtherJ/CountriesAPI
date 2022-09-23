import StyledIcon from "./Icon.style";
import type { IconProps } from "./Icon.types";

const Icon = ({ glyph, iconSize }: IconProps): JSX.Element => {
  return <StyledIcon iconSize={iconSize}>{glyph}</StyledIcon>;
};
export default Icon;
