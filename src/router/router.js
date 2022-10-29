import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Store from "../pages/Store";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import OrderGet from "../pages/OrderGet";
import OrderPost from "../pages/OrderPost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store/:storeId" element={<OrderPost />} />
        <Route path="/order/:storeId" element={<OrderGet />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
