import styled from "styled-components";
import { PreviewImgsState } from "../../atoms/postAtom";
import PostImage from "../detailPost/PostImage";

function ImagePrint({ imgUrl }: { imgUrl: string[] }) {
  const [imgList, serImgList] = useState<string[]>([]);
  const images = useRecoilState<string[]>(PreviewImgsState);

  useEffect(() => {
    if (images !== null) {
      serImgList(images[0]);
    }
  }, [images]);

  return (
    <PostImage
      imgs={imgUrl[0] === "https://via.placeholder.com/300" ? imgUrl : imgList}
    />
  );
}

export default ImagePrint;

const Image = styled.img`
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  object-fit: contain;
`;
