import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
  {/* <React.StrictMode> */}
    <App />
  {/* </React.StrictMode> */}
  </RecoilRoot>,
);
