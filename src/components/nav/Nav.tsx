import { WeatherMoonFilled } from "@fluentui/react-icons";

import StyledNav from "./Nav.style";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <h1>Were in the world?</h1>
      <div>
        <WeatherMoonFilled />
        Dark mode
      </div>
    </StyledNav>
  );
};

export default Nav;
