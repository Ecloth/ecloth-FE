import { Link } from "react-router-dom";
import styled from "styled-components";

function MessageSendButton({ memberId }: { memberId: number }) {
  return (
    <ButtonWrapper className="buttonWrapper">
      <Link to={`/chat/${memberId}`} className="linkButton">
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
