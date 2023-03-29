import styled from "styled-components";

function SearchBar() {
  return (
    <SearchWrapper>
      <input placeholder="SEARCH" />
    </SearchWrapper>
  );
}

export default SearchBar;

const SearchWrapper = styled.div`
  margin-bottom: 10px;
  & input {
    width: 90%;
    padding: 3% 5%;
    border: inherit;
    background: var(--grayColor2);
    border-radius: 30px;
  }
`;
