import styled from "styled-components";
import BreadCrumb from "../commons/BreadCrumb";
import WriteModal from "../writePost/WriteModal";
import FeedFilter from "./FeedFilter";

function CommunityHeader() {
  return (
    <HeaderWrapper>
      <BreadCrumb title="Community" />
      <div className="Wrapper">
        <FeedFilter />
        <WriteModal />
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  & .Wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default CommunityHeader;
