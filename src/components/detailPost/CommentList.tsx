import styled from "styled-components";
import CommentItem from "./CommentItem";

function CommentList() {
  return (
    <ListWrapper>
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </ListWrapper>
  );
}
export default CommentList;
const ListWrapper = styled.div`
  height: 35%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 5px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
