import styled from "styled-components";
import { AiOutlineSend } from "react-icons/ai";
import { Dispatch, SetStateAction, useState } from "react";

function ChattingFooter({
  handleButtononClick,
  setSendMessage,
}: {
  handleButtononClick: (message: string) => void;
  setSendMessage: Dispatch<SetStateAction<string>>;
}) {
  const [tempMessage, setTempMessage] = useState("");
  const handleInputonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempMessage(e.target.value);
  };
  const handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSendMessage(tempMessage);
    handleButtononClick(tempMessage);
  };
  return (
    <FooterWrapper>
      <input
        type="text"
        placeholder="Type a Message"
        id="message"
        onChange={handleInputonChange}
      />
      <button onClick={handleButtonOnClick}>
        <AiOutlineSend className="icon"></AiOutlineSend>
      </button>
    </FooterWrapper>
  );
}

export default ChattingFooter;

const FooterWrapper = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & input {
    width: 90%;
    height: 50%;
    padding: 8px 5%;
    border: 0;
    background: rgba(255, 255, 255, 0.86);
    border-radius: 30px;
  }

  & button {
    background-color: inherit;
    border: 0;
    cursor: pointer;
    & .icon {
      font-size: 30px;
      color: #000;
      margin-left: 10px;
    }
  }
`;
