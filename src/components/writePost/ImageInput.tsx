import { useState } from "react";
import styled from "styled-components";

function ImageInput({
  onChange,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <Input
        multiple
        type="file"
        name="photo"
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
}

export default ImageInput;

const Input = styled.input`
  padding: 1%;
  padding-left: 10px;
  margin: 0 auto;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  width: calc(100% - 2% - 10px);
  height: 35px;
`;
