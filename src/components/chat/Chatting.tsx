import styled from "styled-components";
import ChattingFooter from "./ChattingFooter";
import ChattingHeader from "./ChattingHeader";
import test from "../../assets/images/test.jpg";

function Chatting() {
  return (
    <ListWrapper>
      <ChattingHeader />
      <div className="chat">
        <div className="tiemRecord">4:17 오후</div>
        <div className="sender">
          <img src={test} alt="profile"></img>
          <div className="message send">TEXT</div>
        </div>
        <div className="receiver">
          <div className="message receive">TEXT</div>
        </div>
      </div>
      <ChattingFooter />
    </ListWrapper>
  );
}

export default Chatting;

const ListWrapper = styled.span`
  margin-left: 5%;
  width: 70%;
  height: 430px;
  background-color: var(--grayColor2);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  & .chat {
    height: 70%;

    .sender {
      display: flex;
      flex-direction: row;
      justify-content: start;
      img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
      }
      .send {
        background: var(--mainColor);
      }
    }

    .receiver {
      display: flex;
      flex-direction: row;
      justify-content: end;
      .receive {
        background: #ebdb4bb8;
      }
    }
    .message {
      margin-left: 10px;
      padding: 13px;
      border-radius: 20px;
      font-size: 1rem;
      text-align: start;
    }
  }

  & .tiemRecord {
    text-align: center;
    font-weight: 400;
    font-size: 20px;

    color: rgba(0, 0, 0, 0.7);
  }
`;
