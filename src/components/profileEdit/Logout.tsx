import React from 'react'
import styled from "styled-components";
import EditSideBar from "../../components/profileEdit/EditSideBar";
import LogoutBody from './LogoutBody';
export default function Logout() {


  return (
    <SectionWrapper>
      <EditSideBar />
      <LogoutBody />
    </SectionWrapper>  
    )  
}

const SectionWrapper = styled.section`
  width: 80%;
  height: 500px;
  margin: 20px auto 0;
  border: 1px solid var(--grayColor2);
  display: flex;
  flex-direction: row;
`;