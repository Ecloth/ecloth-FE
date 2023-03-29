import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DeleteBody() {
  const navigate = useNavigate()

  const handleDeleteProfile = (e: any) => {
    e.preventDefault();
    if (window.confirm('확인을 누르면 회원 정보가 삭제됩니다.')) {
      axios
        .delete(
          `api/member/me/status`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('ACCESS_TOKEN'),
            },
          }
        )
        .then(() => {
          localStorage.clear();
          alert('그동안 이용해주셔서 감사합니다.');
          navigate('/');
        })
        .catch((err) => alert(err.response.data.message));
    } else {
      return;
    }
  };
  return (
    <BodyWrapper>
      <Title>회원탈퇴</Title>
      <div style={{margin: "15px"}}>
        <div style={{marginTop: "20px"}}>
        <span style={{fontSize: "18px"}}>※ 탈퇴 시 회원님의 ECloth 이용정보가 삭제되며 복구가 불가능하오니 신중히 선택하시기 바랍니다.</span>
    <ul style={{marginTop: "20px"}}>
      <li style={{listStyle: "initial", fontSize:"18px"}}>회원 정보 삭제</li>
      <ul style={{marginTop: "15px"}}>
        <li style={{listStyle: "initial",fontSize:"16px"}}>회원 탈퇴와 함께 ECloth에 등록된 모든 개인정보는 삭제, 폐기 처리되며 복구되지 않습니다.</li>
        <li style={{listStyle: "initial",fontSize:"16px"}}>회원탈퇴 시 동일 아이디(이메일)로 재가입하실 수 없습니다.</li>
        <li style={{listStyle: "initial",fontSize:"16px"}}>단, 상법 및 '전자상거래 등에서 소비자 보호에 관한 법률' 등 관련 법령의 규정 등을 이유로 일정 기간 보관됩니다.</li>
          <ul style={{marginTop: "15px"}}>
            <li style={{listStyle: "revert-layer",fontSize:"16px"}}> - 계약 또는 청약 철회 등에 관한 기록 : 5년</li>
            <li style={{listStyle: "revert-layer",fontSize:"16px"}}> - 대금결제 및 재화 등의 공급에 관한 기록 : 5년</li>
            <li style={{listStyle: "revert-layer",fontSize:"16px"}}> - 소비자의 불만 또는 분쟁 처리에 관한 기록 : 3년</li>
            <li style={{listStyle: "revert-layer",fontSize:"16px"}}> - 설문조사, 이벤트 등 일시적 목적을 위하여 수집한 경우 : 당해 설문조사, 이벤트 등의 종료 시까지</li>
          </ul>
      </ul>
    </ul>
    </div>
      </div>
      <EditButton onClick={handleDeleteProfile}>탈퇴하기</EditButton>
    </BodyWrapper>  
    )
}

const BodyWrapper = styled.article`
  align-items: stretch;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font: inherit;
  font-size: 100%;
  margin: 0;
  min-width: 50px;
  padding: 0;
  position: relative;
  vertical-align: baseline;
`;

const Title = styled.div`
  width: 200px;
  height: 50px;
  text-align: center;
  margin-top: 20px;
  margin-left: 20px;
  font-size: 30px;
  background-color: #6aafe6;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditButton = styled.button`
      font-weight: var(--font-weight-system-semibold);
      border-bottom-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom-color: rgba(0,0,0,0.4);
      border-bottom-width: 0;
      border-left-width: 0;
      border-top-width: 0;
      text-overflow: ellipsis;
      justify-content: center;
      appearance: none;
      border-top-color: rgba(0,0,0,0.4);
      padding-top: 0;
      color: white;
      display: flex;
      text-align: center;
      cursor: pointer;
      background-color: rgb(0 149 246);
      border-bottom-right-radius: 8px;
      min-height: 0;
      flex-shrink: 0;
      border-left-color: rgba(0,0,0,0.4);
      margin-left: 0;
      border-top-left-radius: 8px;
      -webkit-tap-highlight-color: transparent;
      border-right-color: rgba(0,0,0,0.4);
      border-right-style: none;
      border-right-width: 0;
      width: 120px;
      height: 30px;
      line-height: 30px;
      margin-left: 330px;  
`