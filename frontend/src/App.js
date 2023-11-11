import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import User from "./pages/User";
import NavBar from "./components/navBar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
