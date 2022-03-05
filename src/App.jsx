import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

import Header from "./components/Header/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
