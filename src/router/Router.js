import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Router.css";
import React from "react";
import Store from "../pages/Store";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import OrderGet from "../pages/OrderGet";
import OrderPost from "../pages/OrderPost";
import MyPage from "../pages/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/store/:storeId" element={<OrderPost />} />
        <Route path="/order/:orderId" element={<OrderGet />} />
        <Route path="/store" element={<Store />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
