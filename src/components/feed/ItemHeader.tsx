import styled from "styled-components";
import {AiTwotoneHeart} from "react-icons/ai";
import {AiOutlineComment} from "react-icons/ai";

function ItemHeader() {
  return (
    <HeaderWrapper>
      <ItemDate>2023.03.07</ItemDate>
      <>
        <ItemIcon>
          <AiTwotoneHeart size="15" />2
          <AiOutlineComment size="15" />5
        </ItemIcon>
      </>
    </HeaderWrapper>
  );
}

export default ItemHeader;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ItemIcon = styled.span`
  display: flex;
  justify-content: space-around;
  min-width: 60px;
  flex-direction: row;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
`;

const ItemDate = styled.span`
  font-size: 0.6rem;
  font-weight: 400;
  line-height: 17px;

  color: rgba(0, 0, 0, 0.7);
`;
