import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../elements/button";

const OrderGet = () => {
  return (
    <Layout>
      <Header />
      <StBtnBox>
        <Button btn="btn1">주문하러 가기</Button>
      </StBtnBox>
    </Layout>
  );
};

export default OrderGet;
