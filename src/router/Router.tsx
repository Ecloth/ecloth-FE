import {BrowserRouter, Route, Routes} from "react-router-dom";
import KakaoLogin from "../pages/login/KakaoLogin";
import Login from "../pages/login/LoginPage";
import ResetPasswordPage from "../pages/login/ResetPasswordPage";
import SignUpPage from "../pages/login/SignUpPage";
import Mypage from "../pages/Mypage";
import Main from "./Main";
import User from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/KakaoLogin" element={<KakaoLogin />} />
        <Route path="/ResetPassword" element={<ResetPasswordPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
