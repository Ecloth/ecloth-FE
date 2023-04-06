import axios from "axios";
import { useState } from "react";
import { AiOutlineClose, AiOutlinePlusCircle } from "react-icons/ai";
import styled from "styled-components";
import { TEST_MEMBER_ID, TEST_TOKEN } from "../../App";

function ReplyInput({ commentId }: { commentId: number }) {
  const [isReply, setIsReply] = useState(true);
  const [comment, setComment] = useState("");

  //로그인 한 memberId
  const memberId = TEST_MEMBER_ID;

  const handleCommemtonChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);

  const handleCommentonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    const headers = {
      "Authorization": TEST_TOKEN,
    };
    const data = {
      memberId: memberId,
      content: comment,
    };
   
    // !!수정 답글 있으면 답글 달기 없어야 됨 
    // content: "테스트"
    // nickname: "test1"
    // profile_image_path: "https://camping101.s3.ap-northeast-2.amazonaws.com/profile-sample.jpg.jpg"
    // register_date: "2023-04-06T01:47:21.887676"
    // reply_id: 6
    // updated_date: "2023-04-06T01:47:21.887676"
    // writer_id: 8
    axios
      .post(
        `http://13.125.74.102:8080/api/feed/post/comment/${commentId}`,
        data,
        { headers: headers },
      )
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
      });

    setComment("");
  };
  return (
    <ReplyWrapper>
      {isReply ? (
        <div className="reply" onClick={() => setIsReply(!isReply)}>
          {" "}
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
      content: "";
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
