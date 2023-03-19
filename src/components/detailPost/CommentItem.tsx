import styled from "styled-components";
import {IComment} from "../../types/postType";
import RecordTime from "../commons/RecordTime";
import ItemUser from "../feed/ItemUser";

function CommentItem({comment}: {comment: IComment}) {
  return (
    <CommentWrapper>
      <ItemUser id={comment.member_id} img="" />
      <Comment>{comment.content}</Comment>
      <RecordTime date={comment.create_date} />
    </CommentWrapper>
  );
}

export default CommentItem;

const CommentWrapper = styled.li`
  display: flex;
  padding: 0;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-evenly;
  margin: 3px 0;
`;
const Comment = styled.span`
  width: 50%;
  font-weight: 400;
  font-size: 16px;
  height: fit-content;
  text-align: start;
  margin-left: 10px;
`;
