import styled from "styled-components";
import testImg from "../../assets/images/test.jpg";
import DetailModal from "../detailPost/DeatilModal";

function ItemImage() {
  return (
    <ImageWrapper>
      <DetailModal />
      <img alt="image" src={testImg} className="itemImage"></img>
    </ImageWrapper>
  );
}

export default ItemImage;

const ImageWrapper = styled.div`
  width: 90%;
  position: relative;
  height: 280px;
  & .itemImage {
    width: 100%;
    height: 280px;
  }
  margin: 0 auto 5px;
  padding-top: 10px;
`;
