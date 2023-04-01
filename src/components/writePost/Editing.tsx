import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { postList } from "../../atoms/postAtom";
import { IPost } from "../../types/postType";
import { LOGIN_ID } from "../detailPost/Detail";
import PostImage from "../detailPost/PostImage";
import ItemUser from "../feed/ItemUser";
import PostEditor from "./PostEditor";
import TitleInput from "./TitleInput";
import WriteButtonList from "./WriteButtonList";

function Editing() {
  const { postId } = useParams();
  const tempPostId = parseInt(postId as string, 10);
  const navigator = useNavigate();

  //서버 연동 전 테스트 코드
  const PostsLoadable = useRecoilValueLoadable<IPost[]>(postList);
  let products: IPost[] =
    "hasValue" === PostsLoadable.state ? PostsLoadable.contents : [];
  const post = products.filter((item) => item.postId === tempPostId)[0];
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleTitleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmitOnClick = () => {
    alert(post.memberId + title + content);

    axios({
      method: "put",
      url: `/api/feed/post/${(post.postId, post.memberId)}`,
      baseURL: "http://localhost:8080",
    })
      .then(function () {
        // 성공한 경우 실행
        console.log("edit submit");
        navigator("../");
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  };
  const handleCancelOnClick = () => {
    console.log("cancel");
    navigator("/feed");
  };
  return (
    <WritingWrapper>
      <ImageWrapper>
        <PostImage imgs={post.imagePath} />
      </ImageWrapper>
      <ContentWrapper>
        <ItemUser
          id={post.memberId}
          nickName={post.nickName}
          img={post.profileImagePath}
        />
        <TitleInput onChange={handleTitleonChange} title={title} />
        <PostEditor
          onChange={setContent}
          content={content}
          imagePath={post.imagePath}
        />
        <WriteButtonList
          handleCancelonClick={handleCancelOnClick}
          handleSubmitonClick={handleSubmitOnClick}
        />
      </ContentWrapper>
    </WritingWrapper>
  );
}

export default Editing;

const WritingWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  border-radius: 10px;
`;

const ImageWrapper = styled.div`
  width: 50%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  background-color: #000;
`;

const ContentWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;

  & span:first-child {
    margin-left: 13px;
    height: 10%;
    font-weight: 800;
  }
`;
