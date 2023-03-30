import React from 'react'
import styled from "styled-components";
import EditBody from "../../components/profileEdit/EditBody";
import EditSideBar from "../../components/profileEdit/EditSideBar";
import DeleteBody from './DeleteBody';

export default function Delete() {
  return (
    <SectionWrapper>
      <EditSideBar />
      <DeleteBody />
    </SectionWrapper>  )
}

const SectionWrapper = styled.section`
  width: 80%;
  height: 500px;
  margin: 20px auto 0;
  border: 1px solid var(--grayColor2);
  display: flex;
  flex-direction: row;
`;