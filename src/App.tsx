import Router from "./router/Router";
import "./App.css";
export const TEST_MEMBER_ID = 7;
export const TEST_TOKEN = 
"Bearer " + localStorage.getItem('token')
function App() {

  return <Router />;
}

export default App;