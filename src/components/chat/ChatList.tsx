import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { IChatList } from "../../types/chatType";
import ListItem from "./ListItem";


function ChatList() {
  const [chatsList, setChatsList] = useState<IChatList>();

  //로그인 한 user memberId
  const memberId = 14;
  const parthnerId = 15;
  const makeChatRoom = () => {
    const data = {
      memberIds: [memberId, parthnerId],
    };
    axios
      .post(`http://13.125.74.102:8080/api/chat`, {
        memberIds: [memberId, parthnerId],
      })
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
      });
  };

  //API 확인
  useEffect(() => {
    const params = {
      page: 1,
      size: 5,
      sortBy: "registerDate",
      sortOrder: "DESC",
    };
    axios
      .get(`http://13.125.74.102:8080/api/chat/${memberId}`, {
        params,
      })
      .then(function (response) {
        console.log(response.data);
        setChatsList(response.data);
      });
    // chatList에 방이 있으면 안 만들어도 됨
    // if (
    //   chatsList?.chat_room_list.filter((item) => item.partner_id === parthnerId)
    //     .length < 0
    // ) {
    //   console.log("emptyChatRoom");
    // }
    // makeChatRoom();
  }, []);

  return (
    <ListWrapper>
      <ul className="list">
        {chatsList &&
          chatsList.chat_room_list.map((item, idx) => (
            <ListItem propItem={item} key={item.chat_room_id} />
          ))}
      </ul>
    </ListWrapper>
  );
}

export default ChatList;

const ListWrapper = styled.span`
  display: flex;
  flex-direction: column;

  width: 30%;
  & .list {
    width: 100%;
    display: flex;
    border-radius: 20px;
    padding: 5px;
    flex-direction: column;
    background: var(--grayColor2);
    margin: 0;
  }

  & .itemwrapper:last-child {
    border: 0;
  }
`;
