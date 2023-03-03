import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "../pages/login/Login";
import User from "../pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
