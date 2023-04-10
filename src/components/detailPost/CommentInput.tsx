import styled from "styled-components";
import {AiOutlinePlusCircle} from "react-icons/ai";
import React, {useState} from "react";

function CommentInput() {
  const [comment, setComment] = useState("");
  const handleCommemtonChange = (e: React.ChangeEvent<HTMLInputElement>) => setComment(e.target.value);
  // const handleCommentonClick = () => {};

  const handleCommentonSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === "") {
      return;
    }
    // setCommentArray(commentValueList => [comment, ...commentValueList]);
    console.log(comment);
    setComment("");
  };
  return (
    <Wrapper>
      <form className="commentWrap" onSubmit={handleCommentonSubmit}>
        <input
          type="text"
          placeholder="Type a Comment"
          className="commentInput"
          value={comment}
          onChange={handleCommemtonChange}
        ></input>
        <button className="commetBtn">
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
      top: 40%;
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
