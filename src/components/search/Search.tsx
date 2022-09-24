import { Search24Filled } from "@fluentui/react-icons";

import StyledSearch from "./Search.style";

const Search = (): JSX.Element => {
  return (
    <StyledSearch>
      <Search24Filled />
      <input placeholder="Search for a country..." type="search" />
    </StyledSearch>
  );
};
export default Search;
