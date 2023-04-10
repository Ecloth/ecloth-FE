import dayjs from "dayjs";
import styled from "styled-components";
import { IChatMessage } from "../../types/chatType";
import ChatUserItem from "./ChatUserItem";

function ChatSender({sendMessage} : {sendMessage:IChatMessage[]}) {

  return (
    <div className="sender">
    <ChatUserItem nickName={sendMessage[0].sender_id as unknown as string}/>
    {
      sendMessage.map((item) => (
        <SendMessageWrapper>
        <div className="message send">{item.content}</div>
        <div className="timeRecord">{dayjs(item.sent_date).format("HH:mm")}</div>
        </SendMessageWrapper>
      ))
    }
  </div>
  )
}

export default ChatSender;

const SendMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  align-items: flex-end;
`