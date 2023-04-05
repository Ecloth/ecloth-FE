import styled from "styled-components";
import FollowButtonList from "./FollowButtonList";
import { useParams } from "react-router-dom";
import FollowModal from "./FollowModal";
import { useEffect, useState } from "react";
import OptionButton from "./OptionButton";
import MessageSendButton from "./MessageSendButton";
import axios from "axios";
import { FOLLOW_DIRECTION, IFollowMemberInfo } from "../../types/followType";

function UserInfo() {
  const param = useParams().id;
  const memberId = parseInt(param as string, 10);

  // const [nick, setNick] = useRecoilState<string | any>(NicknameState)
  // const LOGIN_ID = nick

  const [userInfo, setUserInfo] = useState<IFollowMemberInfo>();
  const [nickName, setNickName] = useState(userInfo?.nickname || "");

  console.log(nickName);
  if (nickName) {
  }

  //로그인 한 유저와 param의 유저가 닉네임이 같아야 함 nickName === param의 닉네임값
  const [isOwner, setIsOwner] = useState(true);
  //API 확인
  useEffect(() => {
    //response : {member_id: 3, nickname: 'test3', profile_image_path: null, follow_cnt: 1, follower_cnt: 1}
    axios
      .get(`http://13.125.74.102:80/api/member/${memberId}/follow`)
      // .get(`http://13.125.74.102:8080/api/member/${memberId}/follow`)
      .then(function (response) {
        console.log(response.data);
        setUserInfo(response.data.nickname);
        alert(response.data);
      });
  }, []);
  return (
    <UserWrapper>
      {userInfo && (
        <>
          <ProfileImage>
            <img src={userInfo!.profile_image_path}></img>
          </ProfileImage>
          <UserDesc>
            <NickNameFollow>
              <p className="nickName">{userInfo!.nickname}</p>
              {isOwner ? (
                <OptionButton />
              ) : (
                <>
                  <FollowButtonList memberId={memberId} />
                  <MessageSendButton memberId={memberId} />
                </>
              )}
            </NickNameFollow>
            <FollowList>
              <div className="FollwWrapper">
                <FollowModal isFollow={FOLLOW_DIRECTION.follower} />
                <span>팔로워 {userInfo.follower_cnt}명</span>
              </div>
              <div className="FollwWrapper">
                <FollowModal isFollow={FOLLOW_DIRECTION.follow} />
                <span>팔로우 {userInfo.follow_cnt}명</span>
              </div>
            </FollowList>
          </UserDesc>
        </>
      )}
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
