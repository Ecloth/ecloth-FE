import styled from "styled-components";
import TopFiveItem from "../topFive/TopFiveItem";

import {dummy} from "../feed/FeedBody";
import {useEffect} from "react";
import {IPost} from "../../types/postType";

function MainFeed({posts}: {posts: IPost[]}) {
  const newArray: IPost[] = [];
  useEffect(() => {
    for (let i = 0; i < 3; i++) {
      newArray.push(dummy[i], dummy[i + 1], dummy[i + 2]);
    }
    console.log(newArray);
  }, []);

  return (
    <FeedWrapper>
      <div className="FeedWrapper">
        {posts.map(item => (
          <div key={item.post_id} className="imageWrapper">
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
