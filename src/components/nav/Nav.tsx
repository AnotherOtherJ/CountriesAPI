import { ThemeButton } from "@components/themeButton/ThemeButton";
import { WeatherMoonFilled } from "@fluentui/react-icons";

import StyledNav from "./Nav.style";

const Nav = (): JSX.Element => {
  return (
    <StyledNav>
      <h1>Were in the world?</h1>
      <ThemeButton>
        <WeatherMoonFilled />
        Dark mode
      </ThemeButton>
    </StyledNav>
  );
};

export default Nav;
