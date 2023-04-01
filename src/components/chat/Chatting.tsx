import styled from "styled-components";
import ChattingHeader from "./ChattingHeader";
import { useLocation, useParams } from "react-router-dom";
import { IAllChatMessage } from "../../types/chatType";
import { useEffect, useState } from "react";
import axios from "axios";
import SockJs from "sockjs-client";
import ChattingFooter from "./ChattingFooter";
import stompJs from "stompjs";
import ChatRecord from "./ChatRecord";

const sock = new SockJs("/ws-connect");
const stomp = stompJs.over(sock);

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
  ],
  page: {
    page: 1,
    size: 1,
    sortBy: "register_date",
    sortOrder: "DESC",
  },
  total: 1,
};
// const stompOnMessage = (msg) => {
//   let data = msg.data;

//   let senderId = null;
//   let message = null;

//   const arr = data.split(":");

//   for (var i = 0; i < arr.length; i++) {
//     console.log("arr[" + i + "]: " + arr[i]);
//   }
// };

const stompConnect = (roomId: number, memberId: number) => {
  try {
    // stomp.debug = null;
    stomp.connect({}, () => {
      stomp.subscribe(
        `/queue/chat/${roomId}`,
        (data) => {
          //newMessage확인
          const newMessage = JSON.parse(data.body);
          stomp.send(
            `/queue/chat/${roomId}`,
            {},
            JSON.stringify({
              chat_room_id: roomId,
              writer_id: memberId,
            }),
          );
        },
        {},
      );
      // sock.onmessage = stompOnMessage;
    });
  } catch (err) {
    console.log(err);
  }
};

const stompDisConnect = (roomId: number) => {
  try {
    // stomp.debug = null;
    stomp.disconnect(() => {
      stomp.unsubscribe(`/queue/chat/${roomId}`);
    }, {});
  } catch (err) {}
};

function Chatting() {
  const [sendMessage, setSendMessage] = useState("");
  const { id } = useParams();
  const roomId = parseInt(id as string, 10);

  const location = useLocation();

  //로그인 한 user memberId
  const loginId = 1;

  //채팅 메시지 보낼 user
  const memberId = location.state?.memberId;
  const nickName = location.state?.nickName;
  console.log(nickName);

  useEffect(() => {
    axios({
      method: "post",
      url: `/api/chat`,
      baseURL: "http://localhost:8080",
      data: {
        membersIds: [memberId, loginId],
      },
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    stompConnect(roomId, memberId);
  });

  const handleSendMessageonClick = (e: any) => {
    console.log(sendMessage);
    e.preventDefault();
    if (stomp) {
      var chatMessage = {
        chat_room_id: roomId,
        writer_id: loginId,
        message: sendMessage,
      };
      stomp.send(`/queue/chat/${roomId}`, {}, JSON.stringify(chatMessage));
    } else {
      console.log("message send failß");
    }
  };

  return (
    <ListWrapper>
      <ChattingHeader nickName={nickName} />
      <ChatRecord chatData={chatData} nickName={nickName} memberId={memberId} />
      <ChattingFooter
        handleButtononClick={handleSendMessageonClick}
        setSendMessage={setSendMessage}
      />
    </ListWrapper>
  );
}

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
