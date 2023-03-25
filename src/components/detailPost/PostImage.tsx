import styled from "styled-components";
import ImagePrint from "../writePost/ImagePrint";
<<<<<<< Updated upstream
=======
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

>>>>>>> Stashed changes

function PostImage({imgs}: {imgs: string[]}) {
  return (
    <ImageWrapper>
<<<<<<< Updated upstream
      <Image src={imgs[0]} alt="postImage" />
=======
      <Carousel showStatus={false} >
        {imgs.map((item) => (
        <div className="imgWrapper">
          <Image src={item} alt="postImage" />
        </div>
        ))}
      </Carousel>
      
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  & img {
    height: 100%;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
=======
  & div, .slider {
    width: 100%;
    height: inherit;

  }

li{
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
>>>>>>> Stashed changes
  object-fit: contain;
`;
