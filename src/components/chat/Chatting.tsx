import styled from "styled-components";
import ChattingHeader from "./ChattingHeader";
import { useParams } from "react-router-dom";
import ChatSender from "./ChatSender";
import ChatReceiver from "./ChatReceiver";
import { IAllChatMessage, IChatMessage, IChatRoom } from "../../types/chatType";
import dayjs from "dayjs";

const chatData:IAllChatMessage = {
  message_list : [
       {
           sender_id : 1,
           receiver_id : 2,
           content : "blah blah blah …… ",
           sent_date : "2022-10-22 10:11:21"
      },
      {
        sender_id : 2,
        receiver_id : 1,
        content : "blah~~~",
        sent_date : "2022-10-22 11:11:21"
   },
   {
    sender_id : 2,
    receiver_id : 1,
    content : "blah ~~~~~blah ",
    sent_date : "2022-10-22 12:11:21"
},
{
  sender_id : 1,
  receiver_id : 2,
  content : "blahbllllla",
  sent_date : "2022-10-22 13:11:21"
}
  ],
  page: {
               page: 1,
               size: 1,
               sortBy: "register_date",
               sortOrder: "DESC"
  },
  total: 1
}

const chatArrayFn = function (arr:IChatMessage[]) {
  let j =0;
  let chatArr:IChatMessage[] = [];
  const tempChatArr = [];

  for (let i=0; i< arr.length; i++ ){
    if (i>0){
      if (arr[i].receiver_id !== arr[i-1].receiver_id){
        tempChatArr[j] = [];
        tempChatArr[j] = chatArr;
        chatArr = [];
        j+=1;
        chatArr = [...chatArr, arr[i]];
      }else{
        chatArr = [...chatArr, arr[i]];
      }
    }else{
      chatArr = [...chatArr, arr[i]];
    }

    if (i === arr.length - 1) {
      tempChatArr[j] = [];
      tempChatArr[j] = chatArr;
    }
  }

  return tempChatArr;
}

function Chatting() {
  const {id} = useParams();
  const tempChat = chatArrayFn(chatData.message_list);
  console.log(tempChat);
  // const newChatItem = chatData.filter((item) => item.target_id === parseInt(id as string, 10))

  
  return (
    <ListWrapper>
      <ChattingHeader nickName= {"1"}/>
      <div className="chat">
        <>
        <div className="dateRecord">{dayjs(tempChat[0][0].sent_date).format("YYYY-MM-DD")}</div>
        {
           tempChat.map((list, idx) => {
            if (parseInt(id as string, 10) === chatData.message_list[0].sender_id){
              if (idx%2 === 0){
                return <ChatReceiver receiveMessage={list} />
              }else{
                return  <ChatSender sendMessage={list} />
              }
              
            }else{
              if (idx%2 !== 0){
                return <ChatReceiver receiveMessage={list} />
              }else{
                return  <ChatSender sendMessage={list} />
              }
            }
          })
        }
        </>
      </div>

    </ListWrapper>
  );
}

export default Chatting;

const ListWrapper = styled.span`
height: 100%;
margin: 0;
padding: 0;
  & .chat {
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
      .timeRecord{
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
    .timeRecord{
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
  }

   .dateRecord {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
