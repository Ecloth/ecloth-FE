import styled from "styled-components";
import ChattingHeader from "./ChattingHeader";
import { useLocation, useParams } from "react-router-dom";
import { IAllChatMessage, IChatMessage } from "../../types/chatType";
import { useEffect, useState } from "react";
import ChattingFooter from "./ChattingFooter";
import * as StompJs from "@stomp/stompjs";
import ChatRecord from "./ChatRecord";
import { Client } from "@stomp/stompjs";

// const sock = new SockJS("http://13.125.74.102:8080/ws-connection");
// const stompClient = Stomp.over(sock);

export const chatData: IAllChatMessage = {
  message_list: [
    {
      chat_room_id: 1,
      writer_id: 2,
      message: "blah blah blah …… ",
      register_date: new Date("2022-10-22 10:11:21"),
    },
    {
      chat_room_id: 1,
      writer_id: 1,
      message: "blah~~~",
      register_date: new Date("2022-10-22 11:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 1,
      message: "blah ~~~~~blah ",
      register_date: new Date("2022-10-22 12:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 2,
      message: "blahbllllla",
      register_date: new Date("2022-10-22 13:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 1,
      message: "blah ~~~~~blah ",
      register_date: new Date("2022-10-22 12:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 2,
      message: "blahbllllla",
      register_date: new Date("2022-10-22 13:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 1,
      message: "blah ~~~~~blah ",
      register_date: new Date("2022-10-22 12:11:21"),
    },
    {
      chat_room_id: 2,
      writer_id: 2,
      message: "blahbllllla",
      register_date: new Date("2022-10-22 13:11:21"),
    },
  ],
  page: {
    page: 1,
    size: 1,
    sortBy: "register_date",
    sortOrder: "DESC",
  },
  total: 1,
};

let client = {} as Client;

const Chatting = () => {
  const [content, setContent] = useState("");
  const [messageList, setMessageList] = useState<IChatMessage[]>([]);
  const nickName = useLocation().state.nickName;
  const profileImage = useLocation().state.profileImage;

  const subscribe = () => {
    if (client) {
      alert("subscribeß");
      client.subscribe(`/queue/chat/${1}`, (data) => {
        if (data.body) {
          console.log("got message" + data.body);
          setMessageList([...messageList, JSON.parse(data.body).chat_messages]);
        } else {
          alert("got empty message");
        }
      });
      client.publish({
        destination: "/app/chat/enter",
        body: JSON.stringify({
          chatRoomId: 1,
          writerId: 2,
        }),
      });
    }
  };

  const addContent = (message: string) => {
    setContent(content.concat(message));
  };
  //enter response
  // got message{"chat_room_id":1,"writer_id":2,"message":"테스트님이 들어왔습니다.","register_date":"2023-04-04T14:15:25.945031"}

  //send response
  // got message{"chat_room_id":1,"writer_id":2,"message":"~~~","register_date":"2023-04-04T14:16:00.29178"}
  const connect = () => {
    client = new Client({
      brokerURL: "ws://13.125.74.102:8080/ws-connection",
      debug: function (str) {
        console.log(str);
      },
      onConnect: () => {
        subscribe();
      },
      reconnectDelay: 100000, //자동 재 연결
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
    });

    client.activate();
  };
  const handleSendMessageonClick = () => {
    console.log(client.connected);
    if (client) {
      const chatMessage = {
        chatRoomId: 1,
        writerId: 2,
        message: content,
      };
      client.publish({
        destination: "/app/chat/message",
        body: JSON.stringify(chatMessage),
      });
      console.log("message send", chatMessage);
    } else {
      console.log("message send fail");
    }
  };

  const disConnect = () => {
    if (client != null) {
      if (client.connected) client.deactivate();
    }
  };

  useEffect(() => {
    setMessageList([]);
    // connect();
    return () => disConnect();
  }, []);
  return (
    <ListWrapper>
      <ChattingHeader nickName={nickName} profileImg={profileImage} />
      {messageList.length === 0 ? (
        <div>NULL</div>
      ) : (
        <ChatRecord chatData={messageList} nickName={nickName} />
      )}
      <ChattingFooter
        handleButtononClick={handleSendMessageonClick}
        setSendMessage={setContent}
      />
    </ListWrapper>
  );
};

export default Chatting;

const ListWrapper = styled.span`
  height: 100%;
  margin: 0;
  padding: 0;

  .dateRecord {
    text-align: center;
    font-weight: 400;
    font-size: 20px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
