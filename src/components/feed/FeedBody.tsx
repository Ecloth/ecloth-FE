import styled from "styled-components";
import CommunityItem from "./FeedItem";

function CommunityBody() {
  return (
    <BodyWrapper>
      <CommunityItem></CommunityItem>
      <CommunityItem></CommunityItem>
      <CommunityItem></CommunityItem>
      <CommunityItem></CommunityItem>
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
  justify-content: space-around;
`;
