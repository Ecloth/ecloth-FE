import axios from "axios";
import { useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { chatList } from "../../atoms/chatAtom";
import { IChatList } from "../../types/chatType";
import ListItem from "./ListItem";

export const chatData: IChatList = {
  chat_room_list: [
    {
      chat_room_id: 0,
      partner_id: 1,
      partner_nickname: "test1",
      partner_profile_image_path:
        "https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
      last_message: "RECENT_MSG1",
      last_message_date: new Date("2023-03-25 11:10:11"),
    },
    {
      chat_room_id: 1,
      partner_id: 2,
      partner_nickname: "test2",
      partner_profile_image_path:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU",
      last_message: "RECENT_MSG2",
      last_message_date: new Date("2021-11-10 11:10:11"),
    },
  ],
  page: {
    page: 1,
    size: 1,
    sortBy: "register_date",
    sortOrder: "DESC",
  },
  total: 2,
};

function ChatList() {
  const ChatLoadable = useRecoilValueLoadable<IChatList>(chatList);

  //로그인 한 user memberId
  const memberId = 1;

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/chat/${memberId}`,
      params: {
        page: 1,
        size: 5,
        sortBy: "registerDate",
        sortOrder: "DESC",
      },
      baseURL: "http://localhost:8080",
    })
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  }, []);

  return (
    <ListWrapper>
      <ul className="list">
        {chatData &&
          chatData.chat_room_list.map((item, idx) => (
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
