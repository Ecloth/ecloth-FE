import axios from 'axios';
import { useState } from 'react';
import { AiOutlineClose, AiOutlinePlusCircle } from 'react-icons/ai';
import styled from 'styled-components';

function ReplyInput({ commentId }: { commentId: number }) {
  const [isReply, setIsReply] = useState(true);
  const [comment, setComment] = useState('');

  //로그인 한 memberId
  const memberId = 1;

  const handleCommemtonChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleCommentonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (comment === '') {
      return;
    }
    axios({
      method: 'post',
      url: `/api/feed/post/comment/reply`,
      baseURL: 'http://localhost:8080',
      data: {
        memberId: memberId,
        commentId: commentId,
        content: comment,
      },
    })
      .then(function (res) {
        // 성공한 경우 실행
        console.log('comment reply submit' + res.data);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
    setComment('');
  };
  return (
    <ReplyWrapper>
      {isReply ? (
        <div className="reply" onClick={() => setIsReply(!isReply)}>
          {' '}
          답글달기
        </div>
      ) : (
        <div className="replyWrapper">
          <input
            className="replyInput"
            value={comment}
            onChange={handleCommemtonChange}
          ></input>
          <button className="commetBtn" onClick={handleCommentonSubmit}>
            <AiOutlinePlusCircle className="icon" />
          </button>
          <button className="replyButton" onClick={() => setIsReply(!isReply)}>
            <AiOutlineClose className="icon" />
          </button>
        </div>
      )}
    </ReplyWrapper>
  );
}

export default ReplyInput;

const ReplyWrapper = styled.div`
  width: 30%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
  .reply {
    cursor: pointer;
    padding: 2px 2px 2px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    flex-basis: 100%;
    color: rgba(0, 0, 0, 0.3);
    &::before {
      content: '';
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 2px;
      font-size: 0px;
      line-height: 0px;
      margin: 5px 15% 5px 30%;
      width: 10px;
    }
  }
  .replyWrapper {
    width: 300px;
    height: 35px;
    display: flex;
    flex-direction: row;
    text-align: center;
    .replyInput {
      padding: 0 3%;
      margin: 3px auto;
      /* margin-bottom: 3px; */
      width: 200px;
      height: 100%;
      font-size: 0.9rem;
      box-sizing: border-box;
      background: rgba(203, 226, 236, 0.86);
      border-radius: 30px;
      border-color: #fff;
    }
    button {
      border: 0;
      background-color: inherit;
      cursor: pointer;
      width: auto;
      text-align: center;
      height: 100%;
    }
    .replyButton {
      text-align: center;
    }
  }
`;

const ReplyWrapper = styled.div`
<<<<<<< Updated upstream
width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10%;
  & .reply{
=======
  width: 30%;
  display: flex;
  flex-direction: row;
  margin-left: 10%;
   .reply{
>>>>>>> Stashed changes
    cursor: pointer;
    padding: 2px 2px 2px 0;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;display: flex;
        flex-basis: 100%;
    color: rgba(0,0,0,0.3);
    &::before{
      content: "";
      flex-grow: 1;
      background: rgba(0, 0, 0, 0.35);
      height: 2px;
      font-size: 0px;
      line-height: 0px;
      margin: 5px 15% 5px 30% ;
      width: 10px;
    }
  }
<<<<<<< Updated upstream
=======
  .replyWrapper{
    width: 300px;
    height: 35px;
    display: flex;
    flex-direction: row;
    .replyInput{
      padding: 0 3%;
        margin: 3px auto;
        /* margin-bottom: 3px; */
        width: 200px;
        height: 100%;
        font-size: 0.9rem;
        box-sizing: border-box;
        background: rgba(203, 226, 236, 0.86);
        border-radius: 30px;
        border-color: #fff;
    }
    .replyButton{
      width: auto;
      height: 100%;
    }
  }
>>>>>>> Stashed changes
`;
