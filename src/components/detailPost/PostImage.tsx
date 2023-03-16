import styled from "styled-components";
import ImagePrint from "../writePost/ImagePrint";

function PostImage() {
  return (
    <ImageWrapper>
      <ImagePrint />
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
