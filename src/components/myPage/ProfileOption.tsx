import {Link} from "react-router-dom";
import styled from "styled-components";

function ProfileOption() {
  return (
    <ButtonWrapper>
      <Link to="/profile/edit">
        <Option>프로필 편집</Option>
      </Link>
    </ButtonWrapper>
  );
}

export default ProfileOption;
const ButtonWrapper = styled.div`
  & button {
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 22px;
  }
`;

const Option = styled.button`
  width: 100%;
  background: #7cb6e0;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
`;
