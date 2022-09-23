import Icon from "../icon/Icon";
import StyledNav from "./Nav.style";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <h1>Were in the world?</h1>
      <div>
        <Icon glyph="&#xf0ce;" />
        Dark mode
      </div>
    </StyledNav>
  );
};

export default Nav;
