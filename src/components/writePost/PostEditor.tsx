import {useRef, useState, useMemo, useEffect} from "react";
import ImagePrint from "./ImagePrint";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { PreviewImgsState } from "../../atoms/postAtom";

const PostEditor = () => {
  const QuillRef = useRef<ReactQuill>();
  const [contents, setContents] = useState("");
  const [images, setImgages] = useRecoilState<string[] | any>(PreviewImgsState);

  useEffect(() => {
    setImgages([]);
  }, [])
  // 이미지를 업로드 하기 위한 함수
  const imageHandler = () => {
    // 파일을 업로드 하기 위한 input 태그 생성
    const input = document.createElement("input");
    // const formData = new FormData();

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    // function readURL() {
    
    //     var reader = new FileReader();
    //     reader.onload = function(e) {
    //       document.getElementById('preview').src = e.target.result;
    //     };
    //     reader.readAsDataURL(input.files[0]);
   
    //     document.getElementById('preview').src = "";
    
    // }
    // 파일이 input 태그에 담기면 실행 될 함수
    input.onchange =  () => {
      const file = input.files;
      if (file && file[0]) {
        // formData.append("image", file[0].name);
        try {
          
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();
            
            const reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
              const url = window.URL.createObjectURL(file[0]);
              // images.push(file[0]);
              setImgages(url)
              console.log(file[0])
            quill?.clipboard.dangerouslyPasteHTML(range, `<ImagePrint src="abc"  />`);
             };

            quill?.setSelection(range, 1);
          }

        } catch (error) {
          console.error()
        }
      }
    };
  };

  // quill에서 사용할 모듈을 설정하는 코드 입니다.
  // 원하는 설정을 사용하면 되는데, 저는 아래와 같이 사용했습니다.
  // useMemo를 사용하지 않으면, 키를 입력할 때마다, imageHandler 때문에 focus가 계속 풀리게 됩니다.
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{size: ["small", false, "large", "huge"]}, {color: []}],
          [{list: "ordered"}, {list: "bullet"}, {indent: "-1"}, {indent: "+1"}, {align: []}],
          ["image"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    }),
    [],
  );

  return (
    <QuillWrapper>
      <ReactQuill
        ref={element => {
          if (element !== null) {
            QuillRef.current = element;
          }
        }}
        value={contents}
        onChange={setContents}
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
