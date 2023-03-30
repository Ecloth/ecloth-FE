const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {
  login,
  accessToken,
  refreshToken,
  loginSuccess,
  logout,
} = require("./controller");

const app = express();
dotenv.config();

// 기본설정을 해줍니다.
app.use(express.json());
app.use(cookieParser());
// app.use(localStorage.setItem(''ACCESS_TOKEN''));
app.use(
  cors({
    origin: "https://ecloth-fe-woad.vercel.app",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.post("/login", login);
app.get("/accesstoken", accessToken);
app.get("/refreshtoken", refreshToken);
app.get("/login/success", loginSuccess);
app.post("/logout", logout);

app.listen(process.env.PORT, () => {
  console.log(`server is on ${process.env.PORT}`);
});
