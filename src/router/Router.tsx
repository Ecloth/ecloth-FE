import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import Main from "./Main";
import User from "./Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
