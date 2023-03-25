import {Link} from "react-router-dom";
import styled from "styled-components";
import { IChatList, IChatRoom } from "../../types/chatType";
import RecordTime from "../commons/RecordTime";
import ChatUserItem from "./ChatUserItem";

function ListItem({propItem}:{propItem: IChatRoom}) {
  let id = 0;
  if (propItem.nickName === "test1"){
    id = 1;
  }
  return (
    <ItemWrapper className="itemwrapper">
      <Link to={`/chat/${id}`} className="linkItem">
        <div className="profile">
        <ChatUserItem profileImg={propItem.profile_image_path}/>
        </div>
        <div className="chatContent">
          <div className="userNTime">
            <p className="nickName">{propItem.nickName}</p>
            <RecordTime date={propItem.recent_msg_date}/>
          </div>
          <div className="text">{propItem.recent_msg}</div>
        </div>
      </Link>
    </ItemWrapper>
  );
}

export default ListItem;

const ItemWrapper = styled.li`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  .linkItem {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    color: #000;
    & p {
      margin: 0;
      padding: 0;
    }
    & .profile {
      & img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
      }
    }
    & .chatContent {
      width: 90%;
      display: flex;
      flex-direction: column;
      margin-left: 5px;

      .text {
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.7);
        height: 23px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-word;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        cursor: pointer;
      }
    }

    & .userNTime {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .nickName {
        font-weight: 700;
        font-size: 1rem;
        line-height: 29px;
      }
      .time {
        font-weight: 400;
        font-size: 0.8rem;
        color: rgba(0, 0, 0, 0.7);
        margin-right: 10px;
      }
    }
  }
`;
