import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import styled from "styled-components";
import {IComment} from "../../types/postType";
import CommentItem from "./CommentItem";
import { LOGIN_ID } from "./Detail";
import ReplyInput from "./ReplyInput";

export const dummyCommentList: IComment[] = [
  {
    comment_id: 1,
    member_id: "USER2",
    post_id: 1,
    content: "옷이 예뻐요.",
    create_date: "2023.03.18",
    update_date: "2023.03.18",
  },
  {
    comment_id: 2,
    member_id: "USER3",
    post_id: 1,
    content: "옷이 너무너무 예뻐요.",
    create_date: "2023.03.18",
    update_date: "2023.03.18",
  },
  {
    comment_id: 3,
    member_id: "USER1",
    post_id: 3,
    content: "옷 어디 브랜드인가요?",
    create_date: "2023.03.18",
    update_date: "2023.03.18",
  },
];

function CommentList({commentList}: {commentList: IComment[]}) {
  const {id} = useParams();
  const isLogin = id==="1"
  return (
    <ListWrapper>
      {commentList.map(comment => (
        <>
        <CommentItem comment={comment} key={comment.comment_id} />
        {/* {isHasReply ? <></> : } */}
        {isLogin && <ReplyInput />}
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
`;
