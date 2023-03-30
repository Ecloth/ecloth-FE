import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Delete from '../components/profileEdit/Delete';
import Logout from '../components/profileEdit/Logout';
import Footer from '../layouts/Footer';
import Nav from '../layouts/Nav';
import FeedPage from '../pages/feed/FeedPage';
import MainPage from '../pages/main/MainPage';
import Edit from '../pages/profile/Edit';

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
      </Routes>
      <Footer />
    </>
  );
};

export default Main;

const Section = styled.section`
  padding-top: 45px;
`;
