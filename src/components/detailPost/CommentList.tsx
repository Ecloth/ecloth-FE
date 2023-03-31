import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { IComment } from '../../types/postType';
import CommentItem from './CommentItem';

export const dummyCommentList: IComment[] = [
  {
    commentId: 1,
    memberId: 2,
    postingId: 1,
    parentId: 2,
    nickname: 'USER2',
    profileImagePath: '',
    content: '옷이 예뻐요.',
    createDate: new Date('2023-03-26 13:10:11'),
    updateDate: '2023.03.18',
  },
  {
    commentId: 2,
    memberId: 3,
    postingId: 1,
    parentId: 2,
    nickname: 'USER3',
    profileImagePath: '',
    content: '옷이 너무너무 예뻐요.',
    createDate: new Date('2023-03-13 16:56:11'),
    updateDate: '2023.03.18',
  },
  {
    commentId: 3,
    memberId: 1,
    postingId: 3,
    parentId: 2,
    nickname: 'test123',
    profileImagePath: '',
    content: '옷 어디 브랜드인가요?',
    createDate: new Date('2023-03-19 12:36:11'),
    updateDate: '2023.03.18',
  },
];

function CommentList({
  commentList,
  memberId,
}: {
  commentList?: IComment[];
  memberId: number;
}) {
  const { id } = useParams();

  //로그인 한 유저와 게시글 작성자가 같으면 답글 달기 활성화
  const loginId = 1;
  const isLogin = loginId === memberId;

  let commentsList: IComment[] = dummyCommentList;

  const getComment = async () => {
    try {
      const res = await fetch('/commentData.json');
      //     commentList = [response.data];
      console.log(await res.json());
      // return (await res.json()) || [];
    } catch (error) {
      console.log(`Error: \n${error}`);
    }
    return [];
  };
  useEffect(() => {
    // getComment();
    // axios({
    //   method: "get",
    // url: `/api/feed/post/comment/${id}`,
    // baseURL: "http://localhost:8080",
    // })
    //   .then(function (response) {
    //     // 성공한 경우 실행
    //     console.log(response);
    //     commentList = [response.data];
    // .then((r) => r.Data as IComment)
    //   })
    //   .catch(function (error) {
    //     // 에러인 경우 실행
    //     console.log(error);
    //   })
    //   .then(function () {
    //     // 항상 실행
    //   });
  }, []);

  return (
    <ListWrapper>
      {commentsList &&
        commentsList.map((comment) => (
          <>
            <CommentItem comment={comment} key={comment.commentId} />
            {/* {isHasReply ? <></> : } */}
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
`;
