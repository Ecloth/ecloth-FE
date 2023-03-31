import styled from "styled-components";
import FollowButtonList from "./FollowButtonList";
import { useParams } from "react-router-dom";
import FollowModal from "./FollowModal";
import { useEffect, useState } from "react";
import OptionButton from "./OptionButton";
import { LOGIN_ID } from "../detailPost/Detail";
import MessageSendButton from "./MessageSendButton";
import { followDummyData, followerDummyData } from "./FollowList";
import profile from "../../assets/images/profile.png";
import axios from "axios";
import { useRecoilValueLoadable } from "recoil";
import { IPost } from "../../types/postType";
import { postList } from "../../atoms/postAtom";

function UserInfo() {
  const param = useParams().id;
  const id = parseInt(param as string, 10);
  const [isOwner, setIsOwner] = useState(LOGIN_ID === id);

  //서버 연동 전 테스트 코드
  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);
  let products: IPost[] =
    "hasValue" === PostsLoadable.state ? PostsLoadable.contents : [];
  const nickName = products.filter((item) => item.memberId === id)[0];

  const followList = [35, 40];

  // useEffect(() => {
  //   axios({
  //     method:'get',
  //     url:'api/member/{memberId}',
  //     baseURL: 'http://localhost:8080'
  //   })
  //   .then(function (response) {
  //     // 성공한 경우 실행
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     // 에러인 경우 실행
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // 항상 실행
  //   });
  // },[])
  return (
    <UserWrapper>
      <ProfileImage>
        <img src={nickName.profileImagePath}></img>
      </ProfileImage>
      <UserDesc>
        <NickNameFollow>
          <p className="nickName">{nickName.nickName}</p>
          {isOwner ? (
            <OptionButton />
          ) : (
            <>
              <FollowButtonList following={true} memberId={id} />
              <MessageSendButton memberId={id} />
            </>
          )}
        </NickNameFollow>
        <FollowList>
          <div className="FollwWrapper">
            <FollowModal isFollow={false} />
            <span>팔로워 {followerDummyData.length}명</span>
          </div>
          <div className="FollwWrapper">
            <FollowModal isFollow={true} />
            <span>팔로우 {followDummyData.length}명</span>
          </div>
        </FollowList>
      </UserDesc>
    </UserWrapper>
  );
}

export default UserInfo;

const UserWrapper = styled.article`
  margin: 45px auto 0;
  width: 90%;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const ProfileImage = styled.div`
  margin-left: 30px;
  & img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;

const UserDesc = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const NickNameFollow = styled.span`
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 1.8rem;
  & .nickName {
    margin: 5px 5px 10px 0;
    color: #000;
  }
`;
const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  & .FollwWrapper {
    width: 100px;
    height: 25px;
    margin: 0 10px 0 0;
  }

  & .FollwWrapper span {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 24px;
  }
`;
