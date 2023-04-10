import { useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { PreviewImgsState } from "../../atoms/postAtom";

function ImagePrint({imgUrl} : {imgUrl: string[]}) {
  const images = useRecoilState<string[] | any>(PreviewImgsState);
  if (imgUrl[0] !== "null"){
    
  }
  useEffect(() => {

    console.log(images);
  },[images])

  return (<Image src={imgUrl[0] !== "" ? imgUrl : images[0]} alt="postImage" />);
}

export default ImagePrint;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  object-fit: contain;
`;
