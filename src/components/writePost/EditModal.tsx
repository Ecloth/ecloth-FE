import {useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BlueButton from "../commons/BlueButton";
import Editing from "./Editing";

function EditModal() {

  const navigator = useNavigate();
  const handleModalCloseClick = () => {
    navigator(-1);
  };
  return (
        <ModalBackDrop>
          <BackIcon onClick={handleModalCloseClick}>&times;</BackIcon>
          <ModalView >
            <Editing />
          </ModalView>
        </ModalBackDrop>
  );
}

export default EditModal;

const BackIcon = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  text-align: center;
  top: 1%;
  right: 2%;
  font-size: 1.3rem;
  border: 2px solid #fff;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
`;

const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 3;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

const ModalView = styled.section`
  z-index: 999;
  width: 80%;
  height: 80%;
  position: fixed;
  text-decoration: none;
  background-color: #fff;
  border-radius: 10px;
`;
