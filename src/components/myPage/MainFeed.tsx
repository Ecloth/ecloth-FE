import styled from "styled-components";
import TopFiveItem from "../topFive/TopFiveItem";
import { IPost } from "../../types/postType";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function MainFeed() {
  const { id } = useParams();
  const memberId = parseInt(id as string, 10);
  const [postsList, setPostsList] = useState<IPost[]>();

  useEffect(() => {
    axios
      .get(`http://13.125.74.102:8080/api/feed/post/member/${memberId}`, {})
      .then(function (response) {
        console.log(response.data);
      });
  }, []);

  return (
    <FeedWrapper>
      <div className="FeedWrapper">
        {postsList &&
          postsList.map((item) => (
            <div key={item.posting_id} className="imageWrapper">
              <TopFiveItem itemProps={item} />
            </div>
          ))}
      </div>
    </FeedWrapper>
  );
}

export default MainFeed;

const FeedWrapper = styled.section`
  margin: 15px auto 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  & .FeedWrapper {
    display: flex;
    flex: 1;
    .imageWrapper {
      width: 33%;
    }
  }
`;
