import styled from "styled-components";
import {dummy} from "../feed/FeedBody";
import TopFiveItem from "./TopFiveItem";

function TopFiveBody() {
  return (
    <ItemWrppaer>
      {dummy.map(item => (
        <TopFiveItem key={item.post_id} itemProps={item} />
      ))}
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
