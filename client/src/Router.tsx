import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import CallbackKakao from "./pages/Callback/CallbackKakao";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/callback/kakao" element={<CallbackKakao />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
