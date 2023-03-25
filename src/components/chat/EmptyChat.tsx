import styled from "styled-components";
import {RiSendPlaneFill} from "react-icons/ri";

function EmptyChat() {
  return (
    <ListWrapper>
      <div className="chat">
        <RiSendPlaneFill className="icon" color="#fff"></RiSendPlaneFill>
        <span className="title">내 메시지</span>
        <span className="text">친구에게 메시지를 보내보세요.</span>
      </div>
    </ListWrapper>
  );
}

export default EmptyChat;

const ListWrapper = styled.span`
  margin-left: 5%;
  width: 70%;
  height: 430px;
  background-color: var(--grayColor2);
  border-radius: 20px;
  padding: 10px;
  & .chat {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 70%;
    color: #fff;

    & .icon {
      font-size: 3rem;
      margin-bottom: 18px;
      border: 3px solid #fff;
      border-radius: 50px;
      padding: 13px;
    }
    & .title {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 3px;
    }

    & .text {
      color: rgba(255, 255, 255, 0.6);
      font-size: 1rem;
      font-weight: 500;
    }
  }
`;
