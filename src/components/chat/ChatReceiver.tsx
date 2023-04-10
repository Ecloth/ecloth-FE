import dayjs from "dayjs"
import styled from "styled-components";
import { IChatMessage } from "../../types/chatType"

function ChatReceiver({receiveMessage} : {receiveMessage:IChatMessage[]}) {

  return (
  <div className="receiver">
    {receiveMessage.map((item) => (
      <ReceiveMessageWrapper>
      <div className="timeRecord">{dayjs(item.sent_date).format("HH:mm")}</div>
       <div className="message receive">{item.content}</div>
      </ReceiveMessageWrapper>
    ))}
  </div>
  )

}

export default ChatReceiver;

const ReceiveMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  align-items: flex-end;
`