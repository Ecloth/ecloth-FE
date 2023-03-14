import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Nav from "../layouts/Nav";
import Feed from "../pages/feed/Feed";

const Main = () => {
  return (
    <>
      <Nav />
      <Section />
      <Routes>
        {/* 메인 / 커뮤니티 / 채팅 페이지 들어가는 부분 */}
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </>
  );
};

export default Main;

const Section = styled.section`
  padding-top: 45px;
`;
