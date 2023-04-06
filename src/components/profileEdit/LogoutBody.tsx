import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { RoleState, isLoginState } from "../../atoms/Atom";

export default function LogoutBody() {
  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  const [role, setRole] = useRecoilState<boolean>(RoleState)


  console.log(axios.defaults.headers.common["Authorization"])

  const handleLogoutBurron = () => {
    window.confirm("로그아웃 하시겠습니까?")
    axios.interceptors.response.use(
      (response) => {
        setIsLogin(true)  
        return response;
      },
      (error) => {
        const {
          response: { status },
        } = error;
        if (status === 401) {
          try {
            axios({
              url: 'http://13.125.74.102:8080/api/token/reissue',
              // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/token/reissue',
              method: 'POST',
              withCredentials: true,
            }) .then((res) => {
              console.log(res)
            })
          } catch (err) {
            console.log(err);
          }
        }
        return Promise.reject(error);
      },
    );
    axios({
      url: 'http://13.125.74.102:8080/api/logout',
      // url: 'https://43cb-175-194-251-236.jp.ngrok.io/api/token/reissue',
      method: 'POST',
      headers : {
        'Authorization' : `Bearer ` + localStorage.getItem('token')
      },
      withCredentials: true,
    }).then((response) => {
      console.log(response)
      if(response) {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        localStorage.removeItem('nick')
        setIsLogin(false)
        setRole(false)
        window.location.replace('/Login');
      }
    })
  }

  return (
    <BodyWrapper>
            <Title>로그아웃</Title>
            <div style={{margin: "30px"}}>
            <span style={{fontSize: "18px"}}>로그아웃 시 재 로그인이 필요합니다. 로그아웃을 진행하시겠습니까?</span>
            <LogoutButton onClick={handleLogoutBurron}>로그아웃</LogoutButton>
            </div>
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

const LogoutButton = styled.button`
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
      margin-top: 15px;
      /* margin-left: 330px;   */
`