import styled from "styled-components";
import BlueButton from "../commons/BlueButton";

function WriteButtonList() {
  const handleSubmitOnClick = () => {
    console.log("submit");
  };
  const handleCancelOnClick = () => {
    console.log("cancel");
  };

  return (
    <ListWrapper>
      <BlueButton handleOnClick={handleSubmitOnClick} text="취소하기" />
      <BlueButton handleOnClick={handleCancelOnClick} text="수정하기" />
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
