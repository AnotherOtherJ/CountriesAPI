import Icon from "../icon/Icon";
import StyledSearch from "./Search.style";

const Search = (): JSX.Element => {
  return (
    <StyledSearch>
      <Icon glyph="&#xF78B;" />
      <input placeholder="Search for a country..." type="search" />
    </StyledSearch>
  );
};
export default Search;
