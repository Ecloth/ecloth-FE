import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TEST_TOKEN } from "../../App";
import { PreviewImgsState } from "../../atoms/postAtom";
import { LOGIN_ID } from "../detailPost/Detail";
import ItemUser from "../feed/ItemUser";
import ContentInput from "./ContentInput";
import ImageInput from "./ImageInput";
import ImagePrint from "./ImagePrint";
import TitleInput from "./TitleInput";
import WriteButtonList from "./WriteButtonList";

export const MAX_IMAGE_COUNT = 5;

function Writing() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<any>([]);
  const [tempImages, setImgages] = useRecoilState<string[] | any>(
    PreviewImgsState,
  );

  useEffect(() => {
    setImgages([]);
  }, []);

  //login한 userID
  const memberId = 8;
  const navigator = useNavigate();

  const handleContentonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleTitleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmitOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    const formData = new FormData();
    images.forEach((image: any) => {
      formData.append('images', image);
  });
  formData.append(
    'content',  content
  )
  formData.append(
    'title',
   
  title
  )
    e.preventDefault();
    const headers = {
      "Authorization": TEST_TOKEN,
      "Content-Type": "multipart/form-data",
    };
    axios
      .post(
        `http://13.125.74.102:8080/api/feed/post`,
        formData,
        { headers: headers },
      )
      .then(function (response) {
        console.log(response.data);
        alert(response.data);
      });
    setTitle("");
    setContent("");
    setImages({});
  };

  const url: string[] = [];
  const handleUploadonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files === null) return
    const files = e.target.files;
    setImages([...images ,...files]);
    // console.log(images)

    let file;
    let filesLength =
      files.length > MAX_IMAGE_COUNT ? MAX_IMAGE_COUNT : files.length;

    for (let i = 0; i < filesLength; i++) {
      file = files[i];
      let reader = new FileReader();
      reader.onload = () => {
        // console.log(reader.result);
        // images[i] = reader.result;
      };
      reader.readAsDataURL(file);
      url.push(window.URL.createObjectURL(file));
      setImgages([...url]);
    }
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
      <ContentWrapper encType="multipart/form-data">
        <ItemUser id={memberId} nickName={LOGIN_ID as string} img={""} />
        <TitleInput onChange={handleTitleonChange} title={title} />
        <ImageInput onChange={handleUploadonChange} />
        <ContentInput onChange={handleContentonChange} content={content} />
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
