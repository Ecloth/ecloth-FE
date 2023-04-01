import styled from "styled-components";
import ChatList from "../../components/chat/ChatList";
import Chatting from "../../components/chat/Chatting";
import ChattingFooter from "../../components/chat/ChattingFooter";

function ChatId() {
  return (
    <SectionWrapper>
      <ChatList />
      <div className="chatWrapper">
        <Chatting></Chatting>
      </div>
    </SectionWrapper>
  );
}

export default ChatId;

const SectionWrapper = styled.section`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  .chatWrapper {
    margin-left: 5%;
    width: 80%;
    height: 430px;
    background-color: var(--grayColor2);
    border-radius: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
  }
`;
