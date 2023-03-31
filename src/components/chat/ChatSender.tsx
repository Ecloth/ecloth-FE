import dayjs from "dayjs";
import styled from "styled-components";
import { IChatMessage } from "../../types/chatType";
import ChatUserItem from "./ChatUserItem";

function ChatSender({
  sendMessage,
  profileImage,
}: {
  sendMessage: IChatMessage[];
  profileImage: string;
}) {
  return (
    <div className="sender">
      <ChatUserItem
        profileImg={profileImage}
        memberId={sendMessage[0].writer_id}
      />
      {sendMessage.map((item) => (
        <SendMessageWrapper>
          <div className="message send">{item.message}</div>
          <div className="timeRecord">
            {dayjs(item.register_date).format("HH:mm")}
          </div>
        </SendMessageWrapper>
      ))}
    </div>
  );
}

export default ChatSender;

const SendMessageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3px;
  align-items: flex-end;
`;
