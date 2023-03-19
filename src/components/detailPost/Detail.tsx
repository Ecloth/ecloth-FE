import styled from "styled-components";
import ItemUser from "../feed/ItemUser";
import FollowButtonList from "../myPage/FollowButtonList";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import LikeViews from "./LikeViews";
import PostContent from "./PostContent";
import PostImage from "./PostImage";

function Detail() {
  return (
    <DetailWrapper>
      <PostImage />
      <ContentWrapper>
        <UserWrapper>
          <ItemUser />
          <FollowButtonList following={true} />
        </UserWrapper>
        <PostContent />
        <CommentList />

        <LikeViews />
        <CommentInput />
      </ContentWrapper>
    </DetailWrapper>
  );
}

export default Detail;

const DetailWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  border-radius: 10px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  & span:first-child {
    display: block;
    width: fit-content;
    display: flex;
    flex-direction: row;
    margin-left: 13px;
    font-weight: 800;
  }
`;
const UserWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 12%;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  & div {
    width: 80px;
    height: 30px;
  }
`;
