import styled from "styled-components";
import ChatSender from "./ChatSender";
import ChatReceiver from "./ChatReceiver";
import dayjs from "dayjs";
import { IAllChatMessage, IChatMessage } from "../../types/chatType";
import { useParams } from "react-router-dom";

const chatArrayFn = function (arr: IChatMessage[], roomId: number) {
  let j = 0;
  let chatArr: IChatMessage[] = [];
  const tempChatArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
      if (arr[i].writer_id !== arr[i - 1].writer_id) {
        tempChatArr[j] = [];
        tempChatArr[j] = chatArr;
        chatArr = [];
        j += 1;
        chatArr = [...chatArr, arr[i]];
      } else {
        chatArr = [...chatArr, arr[i]];
      }
    } else {
      chatArr = [...chatArr, arr[i]];
    }

    if (i === arr.length - 1) {
      tempChatArr[j] = [];
      tempChatArr[j] = chatArr;
    }
  }

  return tempChatArr;
};

function ChatRecord({
  chatData,
  memberId,
  nickName,
}: {
  chatData: IAllChatMessage;
  memberId: number;
  nickName: string;
}) {
  const { id } = useParams();
  const roomId = parseInt(id as string, 10);

  const tempChat = chatArrayFn(chatData.message_list, roomId);

  return (
    <ChatWrapper>
      <>
        <div className="dateRecord">
          {dayjs(tempChat[0][0].register_date).format("YYYY-MM-DD")}
        </div>
        {tempChat.map((list, idx) => {
          if (
            parseInt(id as string, 10) === chatData.message_list[0].writer_id
          ) {
            if (idx % 2 === 0) {
              return <ChatReceiver receiveMessage={list} />;
            } else {
              return <ChatSender sendMessage={list} profileImage={nickName} />;
            }
          } else {
            if (idx % 2 !== 0) {
              return <ChatReceiver receiveMessage={list} />;
            } else {
              return <ChatSender sendMessage={list} profileImage={nickName} />;
            }
          }
        })}
      </>
    </ChatWrapper>
  );
}

export default ChatRecord;

const ChatWrapper = styled.div`
  height: 70%;

  .sender {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50px;
    }
    .send {
      background: var(--mainColor);
    }
    .timeRecord {
      font-size: 0.7rem;
      line-height: 24px;
      color: rgba(0, 0, 0, 0.7);
      margin-left: 5px;
    }
  }

  .receiver {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-end;

    .receive {
      background: #ebdb4bb8;
    }
  }
  .timeRecord {
    font-size: 0.7rem;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.7);
    margin-left: 5px;
  }
  .message {
    margin-left: 10px;
    padding: 13px;
    border-radius: 20px;
    font-size: 1rem;
    text-align: start;
  }
`;
