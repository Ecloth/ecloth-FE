import { useState } from "react";
<<<<<<< Updated upstream
=======
import { AiOutlinePlusCircle } from "react-icons/ai";
>>>>>>> Stashed changes
import styled from "styled-components";

function ReplyInput () {
  const [isReply, setIsReply] = useState(true);
  return (
    <ReplyWrapper>
    {isReply ?
     <div className="reply" onClick={() =>setIsReply(!isReply)}> 답글달기</div> 
     :
<<<<<<< Updated upstream
     <div>
      <input></input>
=======
     <div className="replyWrapper">
      <input className="replyInput"></input>
      <button className="commetBtn">
          <AiOutlinePlusCircle className="icon" />
        </button>      
        <button className="replyButton" onClick={() =>setIsReply(!isReply)}>x</button>
>>>>>>> Stashed changes
     </div> }
    </ReplyWrapper>
  )
}

export default ReplyInput;

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
`