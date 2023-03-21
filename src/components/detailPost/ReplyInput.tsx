import { useState } from "react";
import styled from "styled-components";

function ReplyInput () {
  const [isReply, setIsReply] = useState(true);
  return (
    <ReplyWrapper>
    {isReply ?
     <div className="reply" onClick={() =>setIsReply(!isReply)}> 답글달기</div> 
     :
     <div>
      <input></input>
     </div> }
    </ReplyWrapper>
  )
}

export default ReplyInput;

const ReplyWrapper = styled.div`
width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 10%;
  & .reply{
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
`