import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import Detail from "./Detail";

function DetailModal() {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();

  // useEffect(() => {
  //   if (!isOpen) return;
  //   document.body.style.cssText = `
  //     position: fixed; 
  //     top: -${window.scrollY}px;
  //     overflow-y: scroll;
  //     width: 100%;`;
  //   return () => {
  //     const scrollY = document.body.style.top;
  //     document.body.style.cssText = "";
  //     window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  //   };
  // }, [isOpen]);
  const handleModalCloseClick = () => {
    setIsOpen(false);
    navigator(-1);
  };
  const handleModalOpenonClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <ModalBackDrop>
        <BackIcon onClick={handleModalCloseClick}>&times;</BackIcon>
        <ModalView onClick={handleModalOpenonClick}>
          <Detail />
        </ModalView>
      </ModalBackDrop>
    </>
  );
}

export default DetailModal;

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
