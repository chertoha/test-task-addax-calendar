import { useDispatch, useSelector } from "react-redux";
import { IoMdSearch } from "react-icons/io";

import { SearchField, SearchWrapper } from "./Header.styled";
import { updateSearch } from "@/redux/tasks/slice";
import { selectSearch } from "@/redux/tasks/selectors";

const Search = () => {
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();

  return (
    <SearchWrapper>
      <IoMdSearch size={20} />
      <SearchField
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={e => dispatch(updateSearch(e.target.value))}
      />
    </SearchWrapper>
  );
};

export default Search;
