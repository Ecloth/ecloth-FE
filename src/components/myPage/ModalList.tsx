import styled from "styled-components";
import test from "../../assets/images/test.jpg";
import FollowButtonList from "./FollowButtonList";

function ModalList({isFollow}: {isFollow: boolean}) {
  return (
    <SectionWrapper>
      <div className="header">{isFollow ? "팔로잉 " : " 팔로워"}</div>
      <div className="followerList">
        <div className="followerItem">
          <div className="profile">
            <img src={test} alt="profile"></img>
            <div className="nickName">nickName</div>
          </div>
          <FollowButtonList following={true} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ModalList;

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
      margin-left: 135px;
    }
  }
`;
