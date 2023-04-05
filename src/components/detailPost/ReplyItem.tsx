import styled from "styled-components";
import { IComment, IReply } from "../../types/postType";
import RecordTime from "../commons/RecordTime";
import ItemUser from "../feed/ItemUser";

function ReplyItem({ comment }: { comment: IReply }) {
  return (
    <CommentWrapper>
      <div className="reply">
        <ItemUser
          id={comment.writer_id}
          img={comment.profile_image_path}
          nickName={comment.nickname}
        />
      </div>
      <Comment>{comment.content}</Comment>
      <RecordTime date={comment.register_date} />
    </CommentWrapper>
  );
}

export default ReplyItem;

const CommentWrapper = styled.li`
  display: flex;
  padding: 0;
  flex-direction: row;
  align-items: center;
  width: 90%;
  justify-content: flex-end;
  margin: 3px 36px;

  /* &::before {
    content: "";
    background: rgba(0, 0, 0, 0.35);
    height: 2px;
    font-size: 0px;
    line-height: 0px;
    margin: 5px 0px 5px 30px;
    width: 15px;
  } */
`;
const Comment = styled.span`
  width: 55%;
  font-weight: 400;
  font-size: 16px;
  height: fit-content;
  text-align: start;
  margin-right: 10px;
`;
