import {useRef, useState} from "react";
import { NavLink } from "react-router-dom";
import {Link} from "react-router-dom";
import styled from "styled-components";
import profile from "../../assets/images/profile.png"

function EditSideBar() {

  const buttonList = [
    { text: '프로필 편집', path: 'profile/edit' },
    { text: '로그아웃', path: 'profile/logout' },
    { text: '회원탈퇴', path: 'profile/delete' },
  ];
  return (
    <SideBarWrapper>
      <Profile src={profile}/>
      <div style={{marginTop: "10px"}}>
      <span style={{display: "flex", justifyContent: "center", fontSize: "24px"}}>{localStorage.getItem("email")}</span>
      {buttonList.map((item) => {
        return (
              <SelectDiv >
              <Select to={`/${item.path}`} key={item.text}>
                {item.text}
              </Select>
                 </SelectDiv>
            );
          })}
          </div>
    
    </SideBarWrapper>
  );
}

export default EditSideBar;

const SideBarWrapper = styled.div`
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  margin: 0;
  padding: 2% 0;
  border-right: 1px solid var(--grayColor2);
`;
const Profile = styled.img`
  margin-left: 105px;
  width: 130px;
  height: 130px;
  border-radius: 100%;
`
const SelectDiv = styled.div`
margin-top: 50px;
`

const Select = styled(NavLink)`
  margin-right: 10px;
  border: none;
  font-size: 23px;
  color: gray;
  padding-left: 20px;
  &.active {
    border-left: 2px solid gray;
    font-weight: 700;
    color: gray;
    cursor: pointer;
  }
`;