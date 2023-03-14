import styled from "styled-components";

function TopFiveItem() {
  return (
    <ImageWrapper>
      <img alt="image" src="public/test.jpg"></img>
    </ImageWrapper>
  );
}

export default TopFiveItem;

const ImageWrapper = styled.div`
  width: 250px;
  height: 250px;
  img {
    width: 250px;
    height: 250px;
  }
  &:hover {
    opacity: 0.4;
    transition: all 0.3s ease;
    cursor: pointer;
  }
`;
