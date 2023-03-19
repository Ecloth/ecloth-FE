import styled from "styled-components";
import CommunityBody from "../../components/feed/FeedBody";
import CommunityHeader from "../../components/feed/FeedHeader";
import TopFive from "../../components/topFive/TopFive";

function Feed() {
  return (
    <FeedWrapper>
      <TopFive />
      <CommunityHeader />
      <CommunityBody />
    </FeedWrapper>
  );
}
const FeedWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export default Feed;
