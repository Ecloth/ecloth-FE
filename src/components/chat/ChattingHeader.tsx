import axios from "axios";
import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import {  useNavigate } from "react-router-dom";
import styled from "styled-components";
import { TEST_TOKEN } from "../../App";
import ChatUserItem from "./ChatUserItem";

function ChattingHeader({
  nickName,
  profileImg,
}: {
  nickName: string;
  profileImg: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const naviagate = useNavigate();

  const handleDeleteonClick = () => {
    const data = {
      chatMemberId: 9,
      memberId: 14,
    };
    axios
      .delete(`http://13.125.74.102:8080/api/chat`, {
        data,
      })
      .then(function (response) {
        console.log(response.data);
        naviagate("/chat");
      });
  };
  return (
    <HeaderWrapper>
      <ChatUserItem profileImg={profileImg} nickName={nickName} memberId={1} />
      <div className="option">
        <ButtonWrapper className="buttonWrapper">
          <BiDotsHorizontalRounded
            onClick={() => setIsOpen(!isOpen)}
            className="icon"
          ></BiDotsHorizontalRounded>
          {isOpen && (
            <OptionWrapper>
              <ul>
                <li>
                  <button className="linkItem" onClick={handleDeleteonClick}>
                    나가기
                  </button>
                </li>
              </ul>
            </OptionWrapper>
          )}
        </ButtonWrapper>
      </div>
    </HeaderWrapper>
  );
}

export default ChattingHeader;

const HeaderWrapper = styled.span`
  height: 15%;
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
  .user {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  .option {
    width: 77px;
    height: 20px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: end;

  cursor: pointer;
  .icon {
    width: 30px;
    font-size: 1.5rem;
  }
`;

const OptionWrapper = styled.span`
  display: block;
  text-align: right;
  width: 80px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);

  & ul {
    width: fit-content;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;

    & li {
      padding: 5px;
      margin: 0;
      cursor: pointer;
      z-index: 4;
      .linkItem {
        color: #000;
        border: 0;
        background: inherit;
      }
    }
  }
`;
