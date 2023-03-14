import styled from "styled-components";
import TopFiveFilterItem from "./TopFiveFilterItem";

function TopFiveFilter() {
  const filterItems = ["좋아요", "조회수"];

  return (
    <FilterWrapper>
      {filterItems.map((item, idx) => (
        <div key={idx}>
          <TopFiveFilterItem item={item} />
        </div>
      ))}
    </FilterWrapper>
  );
}

export default TopFiveFilter;

const FilterWrapper = styled.form`
  display: block;
  margin-top: 50px;
  margin-bottom: 10px;
  height: 50px;
`;
