import { useRef, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";

const PostEditor = () => {
  const QuillRef = useRef<ReactQuill>();
  const [images, setImgages] = useRecoilState<string[] | any>(PreviewImgsState);

  useEffect(() => {
    setImgages([]);
  }, []);

  const url: string[] = [];
  const imageHandler = () => {
    const input = document.createElement("input");
    const formData = new FormData();
    let url = "";

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      const file = input.files;
      if (file !== null) {
        formData.append("image", file[0]);

        // 저의 경우 파일 이미지를 서버에 저장했기 때문에
        // 백엔드 개발자분과 통신을 통해 이미지를 저장하고 불러왔습니다.
        try {
          const res = ""; //axios를 통해 백엔드 개발자분과 통신했고, 데이터는 폼데이터로 주고받았습니다.

          // 백엔드 개발자 분이 통신 성공시에 보내주는 이미지 url을 변수에 담는다.
          url = res.data.url;

          // 커서의 위치를 알고 해당 위치에 이미지 태그를 넣어주는 코드
          // 해당 DOM의 데이터가 필요하기에 useRef를 사용한다.
          const range = QuillRef.current?.getEditor().getSelection()?.index;
          if (range !== null && range !== undefined) {
            const quill = QuillRef.current?.getEditor();

            const reader = new FileReader();
            reader.readAsDataURL(file[0]);
            reader.onloadend = () => {
              const url = window.URL.createObjectURL(file[0]);
              // images.push(file[0]);
              setImgages(url);
              console.log(file[0]);
              quill?.clipboard.dangerouslyPasteHTML(
                range,
                `<ImagePrint src="abc"  />`,
              );
            };

            quill?.setSelection(range, 1);

            quill?.clipboard.dangerouslyPasteHTML(
              range,
              `<ImagePrint src=${url} alt="이미지 태그가 삽입됩니다." />`,
            );
          }

          return { ...res, success: true };
        } catch (error) {
          const err = error as AxiosError;
          return { ...err.response, success: false };
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

  return (
    <QuillWrapper>
      <ReactQuill
        ref={(element) => {
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
