import styled from "styled-components";

function ContentInput({
  onChange,
  content,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content: string;
}) {
  return (
    <>
      <Input
        value={content}
        onChange={onChange}
        placeholder="내용을 입력해주세요."
      ></Input>
    </>
  );
}

export default ContentInput;

const Input = styled.input`
  height: 500px;
  padding: 0 1% 0 10px;
  /* padding-left: 10px; */
  margin: 10px auto;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  width: calc(100% - 2% - 10px);
`;
