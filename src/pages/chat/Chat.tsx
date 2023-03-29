import styled from "styled-components";
import ChatList from "../../components/chat/ChatList";
import EmptyChat from "../../components/chat/EmptyChat";

function Chat() {
  return (
    <SectionWrapper>
      <ChatList />
      <EmptyChat />
    </SectionWrapper>
  );
}

export default Chat;

const SectionWrapper = styled.section`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
`;
