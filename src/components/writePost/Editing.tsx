import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TEST_MEMBER_ID, TEST_TOKEN } from "../../App";
import { postList, PreviewImgsState } from "../../atoms/postAtom";
import { IFeed, IPost } from "../../types/postType";
import PostImage from "../detailPost/PostImage";
import ItemUser from "../feed/ItemUser";
import ContentInput from "./ContentInput";
import ImageInput from "./ImageInput";
import TitleInput from "./TitleInput";
import WriteButtonList from "./WriteButtonList";
import { MAX_IMAGE_COUNT } from "./Writing";

function Editing() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<any>([]);
  const { postId } = useParams();
  const tempPostId = parseInt(postId as string, 10);
  const postProp = useLocation().state.post;
  const [tempImages, setImgages] = useRecoilState<string[] | any>(
    PreviewImgsState,
  );
  //수정중
  useEffect(() => {
    if (postProp){
      setContent(postProp.content);
      setTitle(postProp.title);
      setImages(postProp.image_paths);
    }
  }, [])

  const handleTitleonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleSubmitOnClick = async (e: React.FormEvent<HTMLButtonElement>) => {
    const formData = new FormData();
    console.log(images);
    images.forEach((image: any) => {
      formData.append('images', image);
    });
    formData.append('content',  content);
    formData.append('title',title);
    e.preventDefault();
    const headers = {
        "Authorization": TEST_TOKEN,
        "Content-Type": "multipart/form-data",
    }
    axios
      .put(`http://13.125.74.102:8080/api/feed/post/${tempPostId}`, 
          {data : formData, tempPostId},
        {headers : headers}
      )
      .then(function (response) {
        console.log("EDITING" ,response.data);
      });
    setContent("");
    // setImages({});
  };
  const url: string[] = [];
  const handleUploadonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files === null) return
    const files = e.target.files;
    setImages([...images ,...files]);

    let file;
    let filesLength =
      files.length > MAX_IMAGE_COUNT ? MAX_IMAGE_COUNT : files.length;

    for (let i = 0; i < filesLength; i++) {
      file = files[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      url.push(window.URL.createObjectURL(file));
      setImgages([...url]);
    }
  };
  const handleCancelOnClick = () => {
    console.log("cancel");
    // navigator("/feed");
  };
  return (
    <WritingWrapper>
      {postProp && 
      <>
      <ImageWrapper>
        <PostImage imgs={images} />
      </ImageWrapper>
      <ContentWrapper encType="multipart/form-data">
        <ItemUser
          id={postProp.member.member_id}
          nickName={postProp.member.nickname}
          img={postProp.member.profile_image_path}
          />
        <TitleInput onChange={handleTitleonChange} title={title} />
        <ImageInput onChange={handleUploadonChange} />
        <ContentInput onChange={handleContentonChange} content={content} />
        <WriteButtonList
          handleCancelonClick={handleCancelOnClick}
          handleSubmitonClick={handleSubmitOnClick}
          />
      </ContentWrapper>
          </>
  }
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
