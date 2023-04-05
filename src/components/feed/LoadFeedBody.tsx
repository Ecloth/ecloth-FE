import styled from "styled-components";
import { IFeed } from "../../types/postType";

function LoadFeedBody() {
  return (
    <ItemWrapper>
      <SkeletonItem className="imageLoad"></SkeletonItem>
      <SkeletonItem className="contentLoad"></SkeletonItem>
    </ItemWrapper>
  );
}

export default LoadFeedBody;

const SkeletonItem = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 4px;

  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;

const ItemWrapper = styled.div`
  display: block;
  margin: 10px 15px;
  min-width: 250px;
  width: 22%;
  height: 470px;
  padding: 15px 5px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .imageLoad {
    width: 90%;
    height: 100%;
    margin: 10px 5px;
  }
  .contentLoad {
    width: 90%;
    height: 50%;
    margin: 10px auto;
  }
`;
