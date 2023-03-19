import styled from "styled-components";
import TopFiveFilter from "./TopFiveFilter";

function TopFiveHearder() {
  return (
    <HeaderWrapper>
      <HeaderTitle>Today Hot OOTD</HeaderTitle>
      <TopFiveFilter />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.span`
  display: flex;
  flex-direction: column;
  max-width: 8em;
`;

const HeaderTitle = styled.h3`
  color: #fff;
  width: 20%;
  height: 60%;
  font-weight: 800;
  font-size: 2.1rem;
  line-height: 48px;
  margin: 0;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export default TopFiveHearder;
