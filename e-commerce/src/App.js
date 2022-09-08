import "./App.css";
import Nav from "./components/NavBar";
import Main from "./Main/Main";


import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Nav />
      <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
