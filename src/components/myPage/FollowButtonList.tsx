import styled from "styled-components";
import {useState} from "react";

function FollowButtonList({following}: {following: boolean}) {
  const [isFollow, setIsFollow] = useState(following);
  return (
    <ButtonWrapper className="buttonWrapper">
      {isFollow ? (
        <FollwingButton onClick={() => setIsFollow(!isFollow)}>팔로잉</FollwingButton>
      ) : (
        <FollowButton onClick={() => setIsFollow(!isFollow)}>팔로우</FollowButton>
      )}
    </ButtonWrapper>
  );
}

export default FollowButtonList;

const ButtonWrapper = styled.div`
  & button {
    cursor: pointer;
    width: 70px;
    height: 30px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 0.8rem;
    line-height: 22px;
  }
`;

const FollowButton = styled.button`
  background: #7cb6e0;
  border: 1px solid #fff;
  border-radius: 10px;
  color: #fff;
`;

const FollwingButton = styled.button`
  background: #ffffff;
  border: 1px solid #7cb6e0;
  box-shadow: inset 0px 1.3px 1.3px rgba(0, 0, 0, 0.25);
  color: var(--blueColor);
`;
