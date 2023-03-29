import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ChatMessageState } from "../../atoms/postAtom";
import ChatList from "../../components/chat/ChatList";
import Chatting from "../../components/chat/Chatting";
import ChattingFooter from "../../components/chat/ChattingFooter";

function ChatId() {
  // const webSocket = new WebSocket("ws://localhost:3001");

  // const chatMessage = useRecoilState<string>(ChatMessageState);

  // // 웹 소켓 연결 이벤트
  // webSocket.onopen = function () {
  //  console.log( webSocket);
  //   alert("웹소켓 서버와 연결에 성공했습니다.");
  // };

  // // 웹 소켓 메세지 수신
  // webSocket.onmessage = function (event) {
  //   alert(event.data);
  // };

  // // 웹 소켓 연결 종료
  // webSocket.onclose = function () {
  //   alert("웹소켓 서버와 연결이 종료되었습니다.");
  // };

  // // 오류 발생
  // webSocket.onerror = function (error) {
  //   console.log(error);
  // };

  function sendMessage() {
    // const message = document.getElementById("message")!.value;
    // webSocket.send(chatMessage[0]);
    console.log("send")
  }



  return (
    <SectionWrapper>
      <ChatList />
      <div className="chatWrapper">
        <Chatting></Chatting>
        <ChattingFooter handleButtononClick={sendMessage}/>
      </div>
    </SectionWrapper>
  );
}

export default ChatId;

const SectionWrapper = styled.section`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  .chatWrapper{
  margin-left: 5%;
  width: 80%;
  height: 430px;
  background-color: var(--grayColor2);
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  }
`;
