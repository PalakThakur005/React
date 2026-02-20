import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from "./practice/Counter";
import FormValid from "./practice/FormValid";
import LoginForm from "./practice/LoginForm";
import Form from "./practice/Form";
import Test from "./practice/Test";
import "./App.css";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
           <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
         
        </Routes>
      </BrowserRouter>
      

    </>
  );
}

export default App;
