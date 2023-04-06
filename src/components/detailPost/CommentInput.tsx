import styled from "styled-components";
import { AiOutlinePlusCircle } from "react-icons/ai";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { TEST_TOKEN } from "../../App";

function CommentInput() {
  const [comment, setComment] = useState("");
  const { id } = useParams();
  const tempPostId = parseInt(id as string, 10);
  const navigator = useNavigate();

  const handleCommemtonChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setComment(e.target.value);
    
  //로그인 한 memberId
  const memberId = 4;

  const handleCommentonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(comment);
    if (comment === "") {
      return;
    }
    const headers = {
      "Authorization": TEST_TOKEN,
    };
    const data = {
      memberId: memberId,
      postingId: tempPostId,
      content: comment,
    };
    axios
      .post(
        `http://13.125.74.102:8080/api/feed/post/${tempPostId}/comment`,
        data,
        { headers: headers },
      )
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
      });

    setComment("");
    navigator(0);
  };
  return (
    <Wrapper>
      <form className="commentWrap">
        <input
          type="text"
          placeholder="Type a Comment"
          className="commentInput"
          value={comment}
          onChange={handleCommemtonChange}
        ></input>
        <button className="commetBtn" onClick={handleCommentonSubmit}>
          <AiOutlinePlusCircle className="icon" />
        </button>
      </form>
    </Wrapper>
  );
}

export default CommentInput;

const Wrapper = styled.div`
  width: 100%;
  height: 13%;
  position: relative;
  & .commentWrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    & .commetBtn {
      position: absolute;
      top: 45%;
      right: 10%;
      transform: translateY(-50%);
      border: 0;
      background-color: inherit;
      cursor: pointer;
      & .icon {
        color: rgba(0, 0, 0, 0.4);
      }
    }

    & .commentInput {
      padding: 0 3%;
      margin: 3px auto;
      /* margin-bottom: 3px; */
      width: 85%;
      height: 80%;
      font-size: 0.9rem;
      box-sizing: border-box;
      background: rgba(203, 226, 236, 0.86);
      border-radius: 30px;
      border-color: #fff;
    }
  }
`;
