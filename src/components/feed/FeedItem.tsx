import styled from "styled-components";
import ItemDesc from "./ItemDesc";
import ItemFooter from "./ItemFooter";
import ItemHeader from "./ItemHeader";
import ItemImage from "./ItemImage";

function CommunityItem() {
  return (
    <ItemWrapper>
      <ItemImage />
      <ItemHeader />
      <ItemDesc />
      <ItemFooter />
    </ItemWrapper>
  );
}

export default CommunityItem;

const ItemWrapper = styled.span`
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 3px;
  min-width: 250px;
  width: 22%;
  padding: 15px 5px;
  height: 470px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`;
