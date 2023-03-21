import styled from "styled-components";
import test from "../../assets/images/test.jpg";
import FollowButtonList from "./FollowButtonList";

export const dummyData = [
    {
      "target_id": 2,
      "nickname": "test2",
      "profile_image_path": "https://www.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-260nw-499196506.jpg"
    },
    {
      "target_id": 3,
      "nickname": "test3",
      "profile_image_path": "data:image/jpeg;base64,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"
    }
];



function FollowList({isFollow}: {isFollow: boolean}) {
  const followList = dummyData
  return (
    <SectionWrapper>
      <div className="header">{isFollow ? "팔로잉 " : " 팔로워"}</div>
      <div className="followerList">
        {followList.map((item) => (
        <div className="followerItem">
          <div className="profile">
            <img src={item.profile_image_path} alt="profile"></img>
            <div className="nickName">{item.nickname}</div>
          </div>
          <FollowButtonList following={true} />
        </div>
          ))
        }
      </div>
    </SectionWrapper>
  );
}

export default FollowList;

const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;

  & .header {
    padding: 8px 0;
    width: 100%;
    text-align: center;
    font-size: 0.8rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  }
  & .followerItem {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: center; */
    padding: 8px 16px;
    .profile {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 70%;

      & img {
        width: 45px;
        height: 45px;
        border-radius: 50px;
        margin-right: 12px;
      }
    }
    & .nickName {
      font-weight: 600;
    }

    & .buttonWrapper {
      width: 20%;
    }
  }
`;
