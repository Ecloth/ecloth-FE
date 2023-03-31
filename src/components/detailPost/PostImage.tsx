import styled from "styled-components";
import ImagePrint from "../writePost/ImagePrint";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function PostImage({ imgs }: { imgs: string[] }) {
  return (
    <ImageWrapper>
      <Carousel showStatus={false}>
        {imgs.map((item) => (
          <div className="imgWrapper">
            <Image src={item} alt="postImage" />
          </div>
        ))}
      </Carousel>
    </ImageWrapper>
  );
}

export default PostImage;

const ImageWrapper = styled.div`
  /* width: 50%; */
  height: 100%;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
  background-color: #000;
  & div,
  .slider {
    width: 100%;
    height: inherit;
  }

  li {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const Image = styled.img`
  widows: 100%;

  display: block;
  /* margin: auto; */
  height: inherit;
  text-align: center;
  /* overflow-y: hidden; */
  object-fit: contain;
`;
