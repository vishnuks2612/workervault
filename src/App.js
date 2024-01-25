import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Register from "./Components/Register";
import ViewNews from "./Components/ViewNews";
import Home from "./Components/Home";
import AddNearNews from "./Components/AddNearNews";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/viewnews" element={<ViewNews />}></Route>
        <Route path="/addnearnews" element={<AddNearNews />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
