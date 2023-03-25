import styled from "styled-components";
import {Views} from "../feed/ItemFooter";
import {useState} from "react";
import {AiTwotoneHeart, AiOutlineHeart} from "react-icons/ai";

function LikeViews({likes, views}: {likes: number; views: number}) {
  const [isHeart, setIsHeart] = useState(false);

  const handleSetHeartOnClick = () => {
    setIsHeart(!isHeart);
  };
  return (
    <Wrapper>
      <div>
        {isHeart ? (
          <AiTwotoneHeart className="icon" size="18" onClick={handleSetHeartOnClick} />
        ) : (
          <AiOutlineHeart className="icon" size="18" onClick={handleSetHeartOnClick} />
        )}

        <Likes>좋아요 {likes}개</Likes>
      </div>
      <Views>조회수 {views}</Views>
    </Wrapper>
  );
}

export default LikeViews;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 2% 5%;
  & div {
    & .icon {
      cursor: pointer;
    }
    display: flex;
    flex-direction: row;
  }
`;

const Likes = styled.p`
  font-weight: 700;
  margin: 0 5px;
  padding: 0;
  font-size: 16px;
  line-height: 19px;
`;
