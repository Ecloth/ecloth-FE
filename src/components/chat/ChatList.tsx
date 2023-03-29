import styled from "styled-components";
import { IChatList } from "../../types/chatType";
import ListItem from "./ListItem";



export const chatData:IChatList = 
  {
  chat_list : [
    {
      chat_room_id: 0,
      nickName : "test1",
      profile_image_path: "https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg",
      recent_msg: "RECENT_MSG1",
      recent_msg_date : new Date("2023-03-25 11:10:11")
    },
    {
      chat_room_id: 1,
      nickName : "test2",
      profile_image_path:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnPj4jA8TYFk8aEbMCexpuvls4PYXcYyqNyQ&usqp=CAU" ,
      recent_msg: "RECENT_MSG2",
      recent_msg_date : new Date("2021-11-10 11:10:11")
    }
  ],
  page: {
    page: 1,
    size: 1,
    sortBy: "register_date",
    sortOrder: "DESC"
  },
  total: 2
}  

function ChatList() {
  return (
    <ListWrapper>
      <ul className="list">
        {
          chatData.chat_list.map((item, idx) => (
            <ListItem propItem = {item} key={item.chat_room_id}/>
          ))
        }

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
