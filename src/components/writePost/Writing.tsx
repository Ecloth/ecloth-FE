import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LOGIN_ID } from "../detailPost/Detail";
import ItemUser from "../feed/ItemUser";
import ImagePrint from "./ImagePrint";
import PostEditor from "./PostEditor";
import TitleInput from "./TitleInput";
import WriteButtonList from "./WriteButtonList";

interface IWriteRequest {
  memberId: number;
  title: string;
  content: string;
  imagePath: string[];
}
function Writing() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  //login한 userID
  const memberId = 1;
  const navigator = useNavigate();

  const handleTitleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleSubmitOnClick = () => {
    alert(memberId + title + content);
    axios({
      method: "post",
      url: `/api/feed/post/${memberId}`,
      baseURL: "http://localhost:8080",
      data: {
        memberId: memberId,
        title: title,
        Content: content,
        imagePath: images,
      },
    })
      .then(function (res) {
        // 성공한 경우 실행
        console.log("write submit" + res.data);
        navigator(`/feed/postId`);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      });
  };
  const handleCancelOnClick = () => {
    console.log("cancel");
    navigator(-2);
  };
  return (
    <WritingWrapper>
      <ImageWrapper>
        <ImagePrint imgUrl={[""]} />
      </ImageWrapper>
      <ContentWrapper>
        <ItemUser id={LOGIN_ID} />
        <TitleInput onChange={handleTitleonChange} title={title} />
        <PostEditor
          onChange={setContent}
          content={content}
          imagePath={images}
        />
        <WriteButtonList
          handleCancelonClick={handleCancelOnClick}
          handleSubmitonClick={handleSubmitOnClick}
        />
      </ContentWrapper>
      <input type="hidden" id="quill_html" name="content"></input>
    </WritingWrapper>
  );
}

export default Writing;

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
