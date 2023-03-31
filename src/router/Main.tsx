import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "../layouts/Footer";
import Nav from "../layouts/Nav";
import FeedPage from "../pages/feed/FeedPage";
import MainPage from "../pages/main/MainPage";
import Edit from "../pages/profile/Edit";
import Delete from "../components/profileEdit/Delete";
import Logout from "../components/profileEdit/Logout";
import DetailModal from "../components/detailPost/DeatilModal";
import Chat from "../pages/chat/Chat";
import ChatId from "../pages/chat/ChatId";
import Feed from "../pages/feed/Feed";
import WriteModal from "../components/writePost/WriteModal";
import EditModal from "../components/writePost/EditModal";

const Main = () => {
  return (
    <>
      <Nav />
      <Section />
      <Routes>
        <Route path="/profile/edit" element={<Edit />} />
        <Route path="/profile/delete" element={<Delete />} />
        <Route path="/profile/logout" element={<Logout />} />
        <Route path="/myPage/:id" element={<FeedPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/feed/*" element={<Feed />} />
        <Route path="/feed/:id" element={<DetailModal />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/chat/:id" element={<ChatId />} />
        <Route path="/post/edit/*" element={<Feed />} />
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
