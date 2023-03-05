import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import Nav from "../layouts/Nav";
import MainPage from "../pages/main/MainPage";

const Main = () => {
  return (
    <>
      <Nav />
      <Section />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
};

export default Main;

const Section = styled.section`
  padding-top: 45px;
`;
