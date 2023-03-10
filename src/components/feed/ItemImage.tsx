import styled from "styled-components";

function ItemImage() {
  return (
    <ImageWrapper>
      <img alt="image" src="public/test.jpg"></img>
    </ImageWrapper>
  );
}

export default ItemImage;

const ImageWrapper = styled.div`
  width: 90%;
  height: 280px;
  img {
    width: 100%;
    height: 280px;
  }
  margin: 0 auto 5px;
  padding-top: 10px;
`;
