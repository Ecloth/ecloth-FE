import React, {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  const buttonList = [
    {text: "Community", path: "/"},
    {text: "Chat", path: "/"},
  ];

  const [color, setColor] = useState("black");

  return (
    <Navbar>
      <Navbar__Normal>
        <Navbar__Start>
          <Logo>
            <StyledLink to="/">로고자리</StyledLink>
          </Logo>
        </Navbar__Start>
        <Navmenu>
          {buttonList.map(item => {
            return (
              <UnderLine to={`/${item.text}`} key={item.text}>
                {item.text}
              </UnderLine>
            );
          })}
          <LoginButton>
            <StyledLink to={"Login"}> Login / Sign Up </StyledLink>
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
  margin-top: 10px;
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
