import styled from "styled-components";
import TopFiveBody from "./TopFiveBody";
import TopFiveHearder from "./TopFiveHeader";

function TopFive() {
  return (
    <TopWrapper>
      <TopFiveHearder />
      <TopFiveBody />
    </TopWrapper>
  );
}

const TopWrapper = styled.div`
  display: flex;
  margin-top: 30px;
  height: 305px;
  padding: 15px;
  background-color: var(--grayColor2);
  border-radius: 30px;
`;

export default TopFive;
