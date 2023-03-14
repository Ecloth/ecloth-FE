import styled from "styled-components";
import FeedItem from "./FeedItem";

function CommunityBody() {
  return (
    <BodyWrapper>
      <FeedItem></FeedItem>
      <FeedItem></FeedItem>
      <FeedItem></FeedItem>
      <FeedItem></FeedItem>
    </BodyWrapper>
  );
}

export default CommunityBody;

const BodyWrapper = styled.article`
  min-width: 600px;
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
