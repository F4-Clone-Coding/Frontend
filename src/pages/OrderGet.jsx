import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";

import styled from "styled-components";

const OrderGet = () => {
  return (
    <Layout>
      <Header />
      <div
        style={{ padding: "50px 10px 10px", display: "flex", rowGap: "50px" }}
      >
        <p>배달 완료</p>
        <p>업소명</p>
        <p>OO메뉴 외 O개</p>
        <p>2022. 10. 29.</p>
      </div>
    </Layout>
  );
};

export default OrderGet;
