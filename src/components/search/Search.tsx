import { SearchFilled } from "@fluentui/react-icons";

import StyledSearch from "./Search.style";

const Search = (): JSX.Element => {
  return (
    <StyledSearch>
      <SearchFilled />
      <input placeholder="Search for a country..." type="search" />
    </StyledSearch>
  );
};
export default Search;
