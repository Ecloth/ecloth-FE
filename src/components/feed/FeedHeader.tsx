import styled from "styled-components";
import BreadCrumb from "../commons/BreadCrumb";
import CommunityFilter from "./FeedFilter";

function CommunityHeader() {
  return (
    <HeaderWrapper>
      <BreadCrumb title="Community" />
      <CommunityFilter />
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.section`
  margin-top: 30px;
`;

export default CommunityHeader;
