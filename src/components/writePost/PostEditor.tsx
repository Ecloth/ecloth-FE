import {
  useRef,
  useState,
  useMemo,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import ImagePrint from "./ImagePrint";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { PreviewImgsState } from "../../atoms/postAtom";

const PostEditor = ({
  onChange,
  content,
  imagePath,
}: {
  onChange: Dispatch<SetStateAction<string>>;
  content: string;
  imagePath: string[];
}) => {
  const QuillRef = useRef<ReactQuill>();
  // const [contents, setContents] = useState("");
  const [images, setImgages] = useRecoilState<string[] | any>(PreviewImgsState);

  useEffect(() => {
    setImgages([]);
  }, []);

  // 이미지를 업로드 하기 위한 함수
  const url: string[] = [];
  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement("input");
    const formData = new FormData();

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange = () => {
      const file = input.files;
      console.log(file);
      if (file && file[0]) {
        formData.append("image", file[0].name);
        try {
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();

            const reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
              url.push(window.URL.createObjectURL(file[0]));
              // images.push(file[0]);
              setImgages([...url]);
              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<ImagePrint imgUrl=""  />`,
              );
            };

            quill?.setSelection(range, 1);
          }
        } catch (error) {
          console.error();
        }
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ size: ["small", false, "large", "huge"] }, { color: [] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] },
          ],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  //  console.log(contents)

  return (
    <QuillWrapper>
      <ReactQuill
        ref={(element) => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={content}
        onChange={onChange}
        modules={modules}
        theme="snow"
        placeholder="내용을 입력해주세요."
      />
    </QuillWrapper>
  );
};

export default PostEditor;

const QuillWrapper = styled.div`
  width: 100%;
  height: 50%;

  & .quill {
    height: 100%;
  }
`;
