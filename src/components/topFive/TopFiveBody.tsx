import styled from "styled-components";
import TopFiveItem from "./TopFiveItem";

function TopFiveBody() {
  return (
    <ItemWrppaer>
      <TopFiveItem />
      <TopFiveItem />
      <TopFiveItem />
    </ItemWrppaer>
  );
}

export default TopFiveBody;

const ItemWrppaer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
