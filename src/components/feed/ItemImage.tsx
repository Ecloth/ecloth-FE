import styled from "styled-components";
function ItemImage({images, postId}: {images: string[]; postId: number}) {
  console.log(images[0]);
  return (
    <ImageWrapper>
      <img alt="image" src={images[0]} className="itemImage"></img>
    </ImageWrapper>
  );
}

export default ItemImage;

const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  height: 280px;
  & .itemImage {
    width: 100%;
    height: 280px;
    z-index: -1;
  }
  margin: 0 auto 5px;
  padding-top: 10px;
`;
