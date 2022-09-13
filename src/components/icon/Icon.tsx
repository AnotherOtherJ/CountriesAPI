import StyledIcon from "./Icon.style";

type IconProps = {
  glyph: string;
};

const Icon = ({ glyph }: IconProps): JSX.Element => {
  return <StyledIcon>{glyph}</StyledIcon>;
};
export default Icon;
