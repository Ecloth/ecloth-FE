import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import LogoImamge from '../assets/images/LOGO.png'
import { isLoginState } from '../atoms/Atom';

export const LOGIN_ID = localStorage.getItem("email");

export default function Nav() {
  const [isLogin, setIsLogin] = useRecoilState(isLoginState);
  

  const buttonList = [
    { text: 'Community', path: '/' },
    { text: 'Chat', path: '/' },
  ];

  useEffect(() => {
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
              url: 'http://localhost:8123/refreshtoken',
              method: 'GET',
              withCredentials: true,
            });
          } catch (err) {
            console.log(err);
          }
        }
        return Promise.reject(error);
      },
    );
    try {
      axios({
        url: 'http://localhost:8123/login/success',
        method: 'GET',
        withCredentials: true,
      })
        .then((result) => {
          if (result.data) {
            setIsLogin(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [isLogin]);

  return (
    <Navbar>
      <Navbar__Normal>
        <Navbar__Start>
          <Logo>
            <StyledLink to="/">
            <LogoImg>
              <img src={LogoImamge} alt=""width={"150px"} height={"50px"}  />
              </LogoImg>
              </StyledLink>
          </Logo>
        </Navbar__Start>
        <Navmenu>
          {buttonList.map((item) => {
            return (
              <UnderLine to={`/${item.text}`} key={item.text}>
                {item.text}
              </UnderLine>
            );
          })}
          <LoginButton>
            {!isLogin ? (
              <StyledLink to={'Login'}> Login / Sign Up </StyledLink>
            ) : (
              <StyledLink to={`/myPage/${LOGIN_ID}`}> my-page </StyledLink>
              )}
          </LoginButton>
        </Navmenu>
      </Navbar__Normal>
    </Navbar>
  );
}

const Navbar = styled.nav`
  position: fixed;
  top: 0px;
  left: 0px;
  box-sizing: border-box;
  z-index: 3;
  width: 100%;
  height: 2.77778rem;
  font-size: 20px;
  font-weight: 500;
  transition: background 300ms ease-out 0s;
  padding: 0px;
  background-color: white;
`;
const Navbar__Normal = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 1.11111rem;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

const Navbar__Start = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
`;

const Logo = styled.div`
  display: inline-block;
  box-sizing: border-box;
  background-position: center center;
  background-size: contain;
  width: 9.11111rem;
  height: 2.22222rem;
  font-size: 20px;
`;
const LogoImg = styled.i`
  background-position: 0px -50px;
  background-size: auto;
  width: 175px;
  height: 51px;
  background-repeat: no-repeat;
  display: block;
`;

const Navmenu = styled.nav`
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  flex: 0 0 auto;
`;

const UnderLine = styled(NavLink)`
  margin-right: 10px;
  padding: 15px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: black;
  &.active {
    color: #4ec5d6;
    border-bottom: 3px solid #4ec5d6;
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const LoginButton = styled.button`
  border: none;
  background: transparent;
`;

const StyledLink = styled(Link)`
  color: black;
`;
