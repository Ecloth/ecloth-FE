import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

function FollowButtonList({ memberId }: { memberId: number }) {
  const [isFollow, setIsFollow] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `/api/member/${memberId}/follow/status`,
      baseURL: "http://localhost:8080",
      data: {
        target_Id: memberId,
      },
    })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  }, []);

  const handleFollowonClick = () => {
    setIsFollow(!isFollow);
    // axios({
    //   method: 'post',
    //   url: `/api/member/${memberId}/follow`,
    //   data: [],
    // baseURL: 'http://localhost:8080'
    // })
  };
  const handleUnFollowonClick = () => {
    setIsFollow(!isFollow);
    // axios({
    //   method: 'delete',
    //   url: `/api/member/${memberId}/follow`,
    // baseURL: 'http://localhost:8080'

    // })
  };

  return (
    <ButtonWrapper className="buttonWrapper">
      {isFollow ? (
        <FollwingButton onClick={handleUnFollowonClick}>팔로잉</FollwingButton>
      ) : (
        <FollowButton onClick={handleFollowonClick}>팔로우</FollowButton>
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
