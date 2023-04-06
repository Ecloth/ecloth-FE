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
import { IPost } from "../../types/postType";
import axios from "axios";
import { TEST_MEMBER_ID } from "../../App";

export const LOGIN_ID = localStorage.getItem("email");

function Detail() {
  const { id } = useParams();
  const postId = parseInt(id as string, 10);
  const [post, setPost] = useState<IPost>();

  const testId = TEST_MEMBER_ID;
  useEffect(() => {
    axios
      .get(`http://13.125.74.102:8080/api/feed/post/${postId}`,{
        data: {
          postingId: postId
        }
      })
      .then(function (response) {
        setPost(response.data);
      });
  }, []);
  return (
    <DetailWrapper>
      {post && (
        <>
          <ImageWrapper>
            <PostImage imgs={post.image_paths} />
          </ImageWrapper>
          <ContentWrapper>
            <UserWrapper>
              <ItemUser
                id={post.member.member_id}
                img={post.member.profile_image_path}
                nickName={post.member.nickname}
              />
              {post.member.member_id === testId ? (
                <DetailOption postId={post.posting_id} propItem = {post}/>
              ) : (
                <FollowButtonList memberId={post.member.member_id} />
              )}
            </UserWrapper>
            <PostContent
              title={post.title}
              text={post.content}
              date={post.register_date}
            />
            <CommentList memberId={post.member.member_id} />

            <LikeViews likes={post.like_count} views={post.view_count} />
            <CommentInput />
          </ContentWrapper>
        </>
      )}
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