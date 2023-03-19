import styled from "styled-components";
import ItemUser from "./ItemUser";

function ItemFooter() {
  return (
    <FooterWrapper>
      <ItemUser />
      <Views>조회수 35</Views>
    </FooterWrapper>
  );
}

export default ItemFooter;

const FooterWrapper = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
`;

export const Views = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
`;
