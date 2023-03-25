import styled from "styled-components";
import ImagePrint from "../writePost/ImagePrint";

function PostImage({imgs}: {imgs: string[]}) {
  return (
    <ImageWrapper>
      <Image src={imgs[0]} alt="postImage" />
    </ImageWrapper>
  );
}

export default PostImage;

const ImageWrapper = styled.div`
  width: 50%;
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  background-color: #000;
  & img {
    height: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  object-fit: contain;
`;
