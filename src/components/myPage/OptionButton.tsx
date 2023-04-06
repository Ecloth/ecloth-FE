import axios from "axios";
import { useEffect } from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

function OptionButton() {

  const profile = () => {
    try {
      axios({
        url: 'http://13.125.74.102:8080/api/member/me',
        method: 'GET',
        headers : {
          'Authorization' : axios.defaults.headers.common["Authorization"]
        },
        withCredentials: true,
      }) .then((res) => {
        console.log(res)
      })
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
   
  }, [])
  return (
    <ButtonWrapper>
      <Link to="/profile/edit">
        <Option onClick={profile}>프로필 편집</Option>
      </Link>
    </ButtonWrapper>
  );
}

export default OptionButton;

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
