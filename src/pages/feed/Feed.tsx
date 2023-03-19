import styled from "styled-components";
import CommunityBody from "../../components/feed/FeedBody";
import CommunityHeader from "../../components/feed/FeedHeader";
import TopFive from "../../components/topFive/TopFive";

function Feed() {
  return (
    <CommunityWrapper>
      <TopFive />
      <CommunityHeader />
      <CommunityBody />
    </CommunityWrapper>
  );
}
const CommunityWrapper = styled.section`
  width: 90%;
  margin: 0 auto;
`;

export default Feed;
