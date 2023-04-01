import styled from "styled-components";
import ItemUser from "../feed/ItemUser";
import FollowButtonList from "../myPage/FollowButtonList";
import CommentList from "./CommentList";
import CommentInput from "./CommentInput";
import LikeViews from "./LikeViews";
import PostContent from "./PostContent";
import PostImage from "./PostImage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import DetailOption from "./DetailOption";
import { useRecoilValueLoadable } from "recoil";
import { IPost } from "../../types/postType";
import { postList } from "../../atoms/postAtom";

export const LOGIN_ID = localStorage.getItem("email");

function Detail() {
  const { id } = useParams();
  const ProductsLoadable = useRecoilValueLoadable<IPost[]>(postList);

  let products: IPost[] =
    "hasValue" === ProductsLoadable.state ? ProductsLoadable.contents : [];
  const item = products.filter(
    (item) => item.postId === parseInt(id as string, 10),
  )[0];
  const [isLogin, setIsLogin] = useState(item.nickName === LOGIN_ID);

  // comment -------------------
  // const [commentList, setCommentList] = useState(
  //   dummyCommentList.filter(
  //     (comment) => parseInt(id as string, 10) === comment.post_id,
  //   ),
  // );
  // useEffect(() => {}, [commentList]);
  return (
    <DetailWrapper>
      <ImageWrapper>
        <PostImage imgs={item.imagePath} />
      </ImageWrapper>
      <ContentWrapper>
        <UserWrapper>
          <ItemUser
            id={item.memberId}
            img={item.profileImagePath}
            nickName={item.nickName}
          />
          {isLogin ? (
            <DetailOption postId={item.postId} />
          ) : (
            <FollowButtonList memberId={item.memberId} />
          )}
        </UserWrapper>
        <PostContent
          title={item.title}
          text={item.content}
          date={item.createDate}
        />
        <CommentList memberId={item.memberId} />

        <LikeViews likes={item.likeCount} views={item.viewCount} />
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
  & .buttonWrapper {
    width: 80px;
    height: 30px;
  }
`;
const ImageWrapper = styled.div`
  width: 50%;
`;
