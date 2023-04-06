import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { TEST_MEMBER_ID } from "../../App";
import { ICommentList } from "../../types/postType";
import CommentItem from "./CommentItem";
import ReplyInput from "./ReplyInput";
import ReplyItem from "./ReplyItem";

function CommentList({ memberId }: { memberId: number }) {
  const { id } = useParams();
  const postId = parseInt(id as string, 10);
  const [commentsList, setCommentList] = useState<ICommentList>();


  //로그인 한 유저와 게시글 작성자가 같으면 답글 달기 활성화
  const isLogin = TEST_MEMBER_ID === memberId;

  useEffect(() => {
    axios
      .get(`http://13.125.74.102:8080/api/feed/post/${postId}/comment`, {})
      .then(function (response) {
        console.log(response.data);
        setCommentList(response.data);
      });
  }, []);

  return (
    <ListWrapper>
      {commentsList &&
        commentsList.comment_list.map((comment) => (
          <>
            <CommentItem comment={comment} key={comment.commentId} />
            {comment.reply && !comment.reply.reply_id && <ReplyItem comment={comment.reply} />}
            {isLogin && <ReplyInput commentId={comment.commentId} />}
          </>
        ))}
    </ListWrapper>
  );
}
export default CommentList;
const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  height: 40%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  padding-top: 5px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &::-webkit-scrollbar {
    display: none;
  }
`;
