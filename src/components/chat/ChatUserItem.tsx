import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { TEST_TOKEN } from "../../App";

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
    axios
      .post(`http://13.125.74.102:8080/api/chat/online/${1}`, {
        headers: { authorization: TEST_TOKEN },
      })
      .then(function (response) {
        console.log(response.status);
        alert(response.status);
      });
  }, []);
  console.log(nickName);

  return (
    <ItemWrapper className="itemwrapper">
      {profileImg && (
        <div className="profileWrapper">
          <img
            src={
              profileImg !== undefined
                ? profileImg
                : "https://via.placeholder.com/40"
            }
            alt="profile"
          ></img>

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
      margin-right: 5px;
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
