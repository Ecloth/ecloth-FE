import styled from "styled-components";
import { Views } from "../feed/ItemFooter";
import { useEffect, useState } from "react";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import axios from "axios";
import { TEST_TOKEN } from "../../App";

function LikeViews({ likes, views }: { likes: number; views: number }) {
  const { id } = useParams();
  const postId = parseInt(id as string, 10);
  const [isHeart, setIsHeart] = useState(false);

  useEffect(() => {
    const headers = {
      "Authorization": TEST_TOKEN,
    };
    const data = {
      postingId: postId
    };
    axios.get(
      `http://13.125.74.102:8080/api/feed/post/${postId}/like`,
      { headers: headers })
        .then(function (response) {
          setIsHeart(response.data);
      });
  }, [])

  const handleSetHeartOnClick = () => {
   
      const headers = {
        "Authorization": TEST_TOKEN,
      };
      const data = {
        postingId: postId
      }
      axios
      .put(
        `http://13.125.74.102:8080/api/feed/post/${postId}/like`,data,
        { headers: headers },
        
          )
          .then(function (response) {
            setIsHeart(response.data);
        });
  };
  return (
    <Wrapper>
      <div>
        {isHeart ? (
          <AiTwotoneHeart
            className="icon"
            size="18"
            onClick={handleSetHeartOnClick}
          />
        ) : (
          <AiOutlineHeart
            className="icon"
            size="18"
            onClick={handleSetHeartOnClick}
          />
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
