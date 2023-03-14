import styled from "styled-components";
import RecordTime from "../commons/RecordTime";
import ItemUser from "../feed/ItemUser";

function CommentItem() {
  return (
    <CommentWrapper>
      <ItemUser />
      <Comment>옷이 예쁘네요.</Comment>
      <RecordTime date={"2022.05.13"} />
    </CommentWrapper>
  );
}

export default CommentItem;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 5px auto;
`;
const Comment = styled.span`
  width: 50%;
  font-weight: 400;
  font-size: 16px;
  height: fit-content;
  text-align: start;
  margin-left: 10px;
`;
