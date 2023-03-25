import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";

function MessageSendButton() {
  const navigator = useNavigate();
  const handleMessageonClick = () => {
    navigator("/chat/id");
  };
  return (
    <ButtonWrapper className="buttonWrapper">
      <Link to="/chat/id" className="linkButton">
        메세지 보내기
      </Link>
    </ButtonWrapper>
  );
}

export default MessageSendButton;

const ButtonWrapper = styled.button`
  background: var(--blueColor);
  border: 0;
  margin-left: 8px;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  .linkButton {
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    font-size: 0.8rem;
  }
  &:hover {
    background: var(--blueColor2);
    opacity: 0.7;
  }
`;
