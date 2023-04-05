import styled from "styled-components";

function LoadTopFive() {
  return (
    <ItemWrapper>
      <SkeletonItem className="image"></SkeletonItem>
    </ItemWrapper>
  );
}

export default LoadTopFive;

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
      background-color: rgba(165, 165, 165, 0.4);
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
  width: 80%;
  /* min-width: calc( ; */
  height: 250px;
  object-fit: contain;
  margin: 15px;
  position: relative;
  .image .fiveImage {
    width: 100%;
    height: 250px;
  }

  .fiveImage:hover {
    opacity: 0.7;
    transition: all 0.3s ease;
    cursor: pointer;
    & .iconList .icon {
      opacity: 1;
      z-index: 3;
    }
  }
`;
