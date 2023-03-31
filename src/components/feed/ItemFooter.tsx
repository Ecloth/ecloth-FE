import styled from "styled-components";
import ItemUser from "./ItemUser";

function ItemFooter({ id, views }: { id: number; views: number }) {
  return (
    <FooterWrapper>
      <ItemUser id={id} />
      <Views>조회수 {views}</Views>
    </FooterWrapper>
  );
}

export default ItemFooter;

const FooterWrapper = styled.div`
  width: 90%;
  height: 40px;
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
