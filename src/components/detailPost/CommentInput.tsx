import styled from "styled-components";
import {AiOutlinePlusCircle} from "react-icons/ai";

function CommentInput() {
  return (
    <Wrapper>
      <input type="text" placeholder="Type a Comment" className="commentInput"></input>
      <button className="comment">
        <AiOutlinePlusCircle className="icon" />
      </button>
    </Wrapper>
  );
}

export default CommentInput;

const Wrapper = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  justify-content: center;
  position: relative;

  & .comment {
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
    margin-bottom: 3px;
    width: 85%;
    height: 80%;
    font-size: 0.9rem;
    box-sizing: border-box;
    background: rgba(203, 226, 236, 0.86);
    border-radius: 30px;
    border-color: #fff;
  }
`;
