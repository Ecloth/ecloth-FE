import {useState} from "react";
import styled from "styled-components";

function TitleInput() {
  const [title, setTitle] = useState("");

  const handleSetTitleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <>
      <Input value={title} onChange={handleSetTitleOnChange} placeholder="제목"></Input>
    </>
  );
}

export default TitleInput;

const Input = styled.input`
  padding: 1%;
  padding-left: 10px;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  width: calc(100% - 2% - 10px);
  height: 6%;
`;
