import styled from "styled-components";
import ChatSender from "./ChatSender";
import ChatReceiver from "./ChatReceiver";
import dayjs from "dayjs";
import { IChatMessage } from "../../types/chatType";
import { useParams } from "react-router-dom";

// const chatArrayFn = function (arr: IChatMessage[]) {
//   let j = 0;
//   let chatArr: IChatMessage[] = [];
//   const tempChatArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0) {
//       if (arr[i].writer_id !== arr[i - 1].writer_id) {
//         tempChatArr[j] = [];
//         tempChatArr[j] = chatArr;
//         chatArr = [];
//         j += 1;
//         chatArr = [...chatArr, arr[i]];
//       } else {
//         chatArr = [...chatArr, arr[i]];
//       }
//     } else {
//       chatArr = [...chatArr, arr[i]];
//     }

//     if (i === arr.length - 1) {
//       tempChatArr[j] = [];
//       tempChatArr[j] = chatArr;
//     }
//   }

//   return tempChatArr;
// };

function ChatRecord({
  chatData,
  nickName,
}: {
  chatData: IChatMessage[];
  nickName: string;
}) {
  const { id } = useParams();
  const roomId = parseInt(id as string, 10);

  const tempChat: IChatMessage[] = chatData[0] as unknown as IChatMessage[];
  // const tempChat: IChatMessage[] = chatData[0];
  // console.log(tempChat);

  // "chat_room_id":1,"writer_id":2,"message":"테스트님이 들어왔습니다.","register_date":"2023-04-04T14:38:24.302077"
  return (
    <ChatWrapper>
      <>
        <div className="dateRecord">
          {dayjs(chatData[0].register_date).format("YYYY-MM-DD")}
        </div>
        {tempChat.map(
          (list, idx) => {
            console.log(list, idx);
            if (2 === list.writer_id) {
              return <ChatReceiver receiveMessage={list} />;
            } else {
              return <ChatSender sendMessage={list} />;
            }
          },
          // if (2 === list[idx].writer_id) {
          //   if (idx % 2 === 0) {
          //     return <ChatReceiver receiveMessage={list} />;
          //   } else {
          //     return <ChatSender sendMessage={list} profileImage={nickName} />;
          //   }
          // } else {
          //   if (idx % 2 !== 0) {
          //     return <ChatReceiver receiveMessage={list} />;
          //   } else {
          //     return <ChatSender sendMessage={list} profileImage={nickName} />;
          //   }
          // }
        )}
      </>
    </ChatWrapper>
  );
}

export default ChatRecord;

const ChatWrapper = styled.div`
  height: 70%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

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
