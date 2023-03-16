import {BrowserRouter, Route, Routes} from "react-router-dom";
import KakaoLogin from "../pages/login/KakaoLogin";
import Login from "../pages/login/LoginPage";
import SignUpPage from "../pages/login/SignUpPage";
import Main from "./Main";
import User from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
