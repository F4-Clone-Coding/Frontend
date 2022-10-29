import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../elements/button";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaStore } from "react-icons/fa";
import OrderCard from "../components/OrderCard";

const OrderGet = () => {
  const navigate = useNavigate();

  const alertInfo = () => {
    Swal.fire({
      icon: "info",
      title: "문의사항은 연락주시기 바랍니다.",
      text: "010-1234-1234",
    });
  };

  return (
    <Layout>
      <Header />
      <StInfo>
        <StDescWrap>
          <p style={{ color: "darkgray", fontSize: "14px" }}>배달 완료</p>
          <p style={{ fontSize: "20px" }}>업소명</p>
          <p style={{ fontSize: "14px" }}>OO메뉴 외 O개</p>
          <p style={{ color: "darkgray", fontSize: "14px" }}>
            주문일시 2022. 10. 29.
          </p>
        </StDescWrap>
        <StbtnWrap>
          <Button btn="btn2" onClick={alertInfo}>
            <FaPhoneAlt />
            전화
          </Button>
          <Button btn="btn2" onClick={() => navigate("/")}>
            <FaStore style={{ margin: "3px 3px 0px" }} />
            가게 보기
          </Button>
        </StbtnWrap>
      </StInfo>
      <OrderCard />
      <StPriceContainer>
        <StPriceBox>
          <p>총 주문금액: 100,000원</p>
        </StPriceBox>
      </StPriceContainer>
    </Layout>
  );
};

export default OrderGet;

const StInfo = styled.div`
  height: 220px;
  display: flex;
  flex-flow: column;
`;

const StDescWrap = styled.div`
  padding: 50px 20px 10px;
  display: flex;
  flex-flow: column;
  row-gap: 12px;
`;

const StbtnWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  column-gap: 20px;
`;

const StPriceContainer = styled.div`
  height: 144px;
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StPriceBox = styled.div`
  width: 95%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--box-shadow);
`;
