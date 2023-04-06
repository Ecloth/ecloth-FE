import styled from "styled-components";

function BlueButton({
  handleOnClick,
  text,
}: {
  handleOnClick:
    | (() => void)
    | ((e: React.FormEvent<HTMLButtonElement>) => Promise<void>);
  text: string;
}) {
  return <ModalBtn onClick={handleOnClick}>{text}</ModalBtn>;
}

const ModalBtn = styled.button`
  background-color: var(--mainColor);
  border-radius: 30px;
  text-decoration: none;
  width: 100px;
  padding: 3px;
  border: none;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 19px;
  text-align: center;
  color: #fff;
  cursor: pointer;

  & .icon {
    font-size: 0.65rem;
    margin-right: 5px;
  }
`;

export default BlueButton;
