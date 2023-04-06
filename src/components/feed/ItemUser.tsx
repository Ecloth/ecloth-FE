import { Link } from "react-router-dom";
import styled from "styled-components";

function ItemUser({
  id,
  img,
  nickName,
}: {
  id: number;
  img: string;
  nickName: string;
}) {
  return (
    <UserInfo>
      <Link to={`/myPage/${id}`} className="linkItem">
        <img className="profile" alt="profile" src={img}></img>
        <UserNickName>{nickName}</UserNickName>
      </Link>
    </UserInfo>
  );
}

export default ItemUser;

const UserInfo = styled.div`
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
