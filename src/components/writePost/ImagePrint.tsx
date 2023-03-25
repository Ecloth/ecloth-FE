import styled from "styled-components";

function ImagePrint() {
  const url = "src/assets/images/test.jpg";
  return <Image src={url} alt="postImage" />;
}

export default ImagePrint;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  object-fit: contain;
`;
