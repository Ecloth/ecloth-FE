import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BlueButton from "../commons/BlueButton";

function WriteButtonList({
  handleSubmitonClick,
  handleCancelonClick,
}: {
  handleSubmitonClick: () => void;
  handleCancelonClick: () => void;
}) {
  return (
    <ListWrapper>
      <BlueButton handleOnClick={handleCancelonClick} text="취소하기" />
      <BlueButton handleOnClick={handleSubmitonClick} text="등록하기" />
    </ListWrapper>
  );
}

export default WriteButtonList;

const ListWrapper = styled.div`
  display: flex;
  height: 30px;
  margin-top: 25%;
  margin-bottom: 5%;
  flex-direction: row;
  justify-content: space-evenly;
`;
