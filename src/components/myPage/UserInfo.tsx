import styled from "styled-components";
import FollowButtonList from "./FollowButtonList";
import {useParams} from "react-router-dom";
import FollowModal from "./FollowModal";
import {useState} from "react";
import OptionButton from "./OptionButton";
import {LOGIN_ID} from "../detailPost/Detail";
import MessageSendButton from "./MessageSendButton";
import {followDummyData, followerDummyData} from "./FollowList";
import profile from "../../assets/images/profile.png"

function UserInfo() {
  const param = useParams().id;
  const id = parseInt(param as string, 10);
  const [isOwner, setIsOwner] = useState(LOGIN_ID === param);
  console.log(LOGIN_ID)
  const followList = [35, 40];

  // useEffect(() => {
  //   axios({
  //     method:'get',
  //     url:'api/member/{memberId}/follow',
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
  // Response
  //   {
  //     "follow_member_info": {
  //        "follow_cnt": 0,
  //        "follow_status": true,
  //        "follower_cnt": 0,
  //        "nickname": "string",
  //        "profile_image_path": "string",
  //        "target_id": 0
  //   }
  // }
  return (
    <UserWrapper>
      <ProfileImage>
        <img src={profile}></img>
      </ProfileImage>
      <UserDesc>
        <NickNameFollow>
          <p className="nickName">{param}</p>
          {isOwner ? (
            <OptionButton />
          ) : (
            <>
              <FollowButtonList following={true} memberId={id} />
              <MessageSendButton />
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
