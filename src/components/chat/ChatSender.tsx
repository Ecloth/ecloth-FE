import dayjs from "dayjs";
import styled from "styled-components";
import { IChatMessage } from "../../types/chatType";
import ChatUserItem from "./ChatUserItem";

function ChatSender({ sendMessage }: { sendMessage: IChatMessage }) {
  return (
    <div className="sender">
      <SendMessageWrapper>
        <div className="message send">{sendMessage.message}</div>
        <div className="timeRecord">
          {dayjs(sendMessage.register_date).format("HH:mm")}
        </div>
      </SendMessageWrapper>
    </div>
  );
}

export default ChatSender;

const SendMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: flex-end;
`;
