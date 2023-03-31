import { useState } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import { LOGIN_ID } from "../detailPost/Detail";

function ItemUser({id, img}: {id: number; img: string}) {
  const [nickName, setNickName] = useState("");

  return (
    <UserInfo>
      <Link to={`/myPage/${id}`} className="linkItem">
        <img className="profile" alt="profile" src={img}></img>
        <UserNickName>{id}</UserNickName>
      </Link>
    </UserInfo>
  );
}

export default ItemUser;

const UserInfo = styled.div`
  width: calc(100% - 5px);
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
  & .linkItem {
    display: block;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #000;
    height: 36px;
    .profile {
      width: 35px;
      height: 35px;
      overflow: hidden;
      border-radius: 50%;
    }
  }
`;
const UserNickName = styled.p`
  font-weight: 700;
  font-size: 16px;
  /* line-height: 19px; */
  margin: 0;
  margin-left: 5px;
`;
