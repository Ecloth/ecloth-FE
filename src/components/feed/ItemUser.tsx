import { Link } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { postList } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";

function ItemUser({ id }: { id: number }) {
  // const [nickName, setNickName] = useState("");

  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);
  let products: IPost[] =
    "hasValue" === PostsLoadable.state ? PostsLoadable.contents : [];
  const nickName = products.filter((item) => item.memberId === id)[0];

  return (
    <UserInfo>
      <Link to={`/myPage/${id}`} className="linkItem">
        <img
          className="profile"
          alt="profile"
          src={nickName.profileImagePath}
        ></img>
        <UserNickName>{nickName.nickName}</UserNickName>
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
