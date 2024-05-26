import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Register from "./pages/Register.js"
function App() {
  return (
    <div >
          <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login.js/>}/>
                <Route path="/register" element={<Register.js/>} />
            </Routes>
          </BrowserRouter>
    </div> 
  );
}

export default App;
