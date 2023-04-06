import dayjs from "dayjs";
import styled from "styled-components";
import { IChatMessage } from "../../types/chatType";

function ChatReceiver({ receiveMessage }: { receiveMessage: IChatMessage }) {
  return (
    <div className="receiver">
      <ReceiveMessageWrapper>
        <div className="timeRecord">
          {dayjs(receiveMessage.register_date).format("HH:mm")}
        </div>
        <div className="message receive">{receiveMessage.message}</div>
      </ReceiveMessageWrapper>
    </div>
  );
}

export default ChatReceiver;

const ReceiveMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  align-items: flex-end;
`;
