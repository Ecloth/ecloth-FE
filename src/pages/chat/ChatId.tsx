import styled from "styled-components";
import ChatList from "../../components/chat/ChatList";
import Chatting from "../../components/chat/Chatting";

function ChatId() {
  return (
    <SectionWrapper>
      <ChatList />
      <Chatting></Chatting>
    </SectionWrapper>
  );
}

export default ChatId;

const SectionWrapper = styled.section`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
`;
