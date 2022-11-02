import { useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../elements/button";
import styled from "styled-components";
import Swal from "sweetalert2";
import { FaPhoneAlt, FaStore } from "react-icons/fa";
import OrderCard from "../components/OrderCard";
import { orderGet } from '../redux/modules/orderSlice';
import { useDispatch, useSelector } from 'react-redux';

const OrderGet = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { orderId } = useParams();
  console.log("orderId", orderId);
  const { orders } = useSelector((state) => state.orders);
  console.log("orders", orders);

  const storeInfo = () => {
    Swal.fire({
      icon: "info",
      title: "문의사항은 연락주시기 바랍니다.",
      text: "010-1234-1234",
    });
  };

  useEffect(() => {
    dispatch(orderGet(orderId));
  }, [dispatch]);

  return (
    <Layout>
      <Header />
      <StInfo>
        <StDescWrap>
          <p style={{ color: "darkgray", fontSize: "14px" }}>배달 완료</p>
          <p style={{ fontSize: "20px" }}>{orders?.name}</p>
          <p style={{ fontSize: "14px" }}>
            {orders?.menus[0].name} 외 {orders?.menusCount - 1}개
          </p>
          <p style={{ color: "darkgray", fontSize: "14px" }}>
            주문일시 : {orders?.createdAt}
          </p>
        </StDescWrap>
        <StbtnWrap>
          <Button btn="btn2" onClick={storeInfo}>
            <FaPhoneAlt />
            전화
          </Button>
          <Button btn="btn2" onClick={() => nav(`/store/${orders?.storeId}`, { state: { storeName: orders?.name } })}>
            <FaStore style={{ margin: "3px 3px 0px" }} />
            가게 보기
          </Button>
        </StbtnWrap>
      </StInfo>
      <OrderCard orders={orders} />
      <StPriceContainer>
        <StPriceBox>
          <p>총 주문금액: {orders?.sum}원</p>
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
