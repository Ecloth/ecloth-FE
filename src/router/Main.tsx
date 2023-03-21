import {Route, Routes, useLocation} from "react-router-dom";
import styled from "styled-components";
import DetailModal from "../components/detailPost/DeatilModal";
import Footer from "../layouts/Footer";
import Nav from "../layouts/Nav";
import Chat from "../pages/chat/Chat";
import ChatId from "../pages/chat/ChatId";
import Feed from "../pages/feed/Feed";
import FeedPage from "../pages/feed/FeedPage";
import Edit from "../pages/profile/Edit";
import MainPage from "../pages/main/MainPage";
import WriteModal from "../components/writePost/WriteModal";
import EditModal from "../components/writePost/EditModal";


const Main = () => {
  const location = useLocation();


  return (
    <>
      <Nav />
      <Section />
      <Routes>
        {/* 메인 / 커뮤니티 / 채팅 페이지 들어가는 부분 */}
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/*" element={<Edit />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/myPage/:id" element={<FeedPage />} />
        <Route path="/feed/*" element={<Feed />} />
        <Route path="/feed/:id" element={<DetailModal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatId />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/post/edit/*" element={<Feed /> } />
        <Route path="/post/edit/:postId" element={<EditModal />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;

const Section = styled.section`
  padding-top: 45px;
`;
