import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/images/test.jpg";

function ChatUserItem({
  profileImg,
  nickName,
  memberId,
}: {
  profileImg?: string;
  nickName?: string;
  memberId?: number;
}) {
  const [isOnline, setIsOnline] = useState(false);
  useEffect(() => {
    axios({
      method: "post",
      url: `api/chat/online/${memberId}`,
      baseURL: "http://localhost:8080",
    })
      .then(function (response) {
        // 성공한 경우 실행
        console.log(response);
        setIsOnline(response.status === 200);
      })
      .catch(function (error) {
        // 에러인 경우 실행
        console.log(error);
      })
      .then(function () {
        // 항상 실행
      });
  }, []);

  return (
    <ItemWrapper className="itemwrapper">
      {profileImg && (
        <div className="profileWrapper">
          <img src={profileImg} alt="profile"></img>

          {isOnline && <div className="badge"></div>}
        </div>
      )}
      <p className="nickName">{nickName}</p>
    </ItemWrapper>
  );
}

export default ChatUserItem;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  color: #000;

  .profileWrapper {
    position: relative;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50px;
    }
    .badge {
      position: absolute;
      bottom: 6px;
      right: 3px;
      width: 10px;
      height: 10px;
      border-radius: 50px;
      background: #52ff00;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  .nickName {
    margin: 0;
    padding: 0;
    font-weight: 700;
    font-size: 1rem;
    line-height: 29px;
  }
`;
