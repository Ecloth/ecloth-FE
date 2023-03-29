import {useState} from "react";
import styled from "styled-components";
import FollowList from "./FollowList";

function FollowModal({isFollow}: {isFollow: boolean}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalCloseClick = () => {
    setIsOpen(false);
  };
  const handleModalOpenonClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <ModalButton onClick={handleModalOpenonClick} />
      {isOpen && (
        <ModalBackDrop>
          <BackIcon onClick={handleModalCloseClick}>&times;</BackIcon>
          <ModalView onClick={handleModalOpenonClick}>
            <FollowList isFollow={isFollow} />
          </ModalView>
        </ModalBackDrop>
      )}
    </>
  );
}

export default FollowModal;

const ModalButton = styled.button`
  position: absolute;
  background-color: inherit;
  cursor: pointer;
  border: 0;
  width: 40%;
  height: 100%;
`;

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
  height: 100%;
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
  width: 30%;
  height: 60%;
  position: fixed;
  text-decoration: none;
  background-color: #fff;
  border-radius: 10px;
`;
