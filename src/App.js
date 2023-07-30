import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/nav" element={<Navbar />} />
      </Routes>
    </div>
  );
}

export default App;
