import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Button from "../elements/button";
import Menu from "../components/MenuCard";
import { getAllMenu } from "../redux/modules/menuSlice";

import styled from "styled-components";
import { FaPhoneAlt, FaRegHeart, FaRegShareSquare } from "react-icons/fa";

const OrderPost = () => {
  const dispatch = useDispatch();
  const storeId = useParams();
  const [tabId, setTabId] = useState(0);

  const tabHandlser = (tabNum) => {
    setTabId(tabNum);
  };
  console.log(tabId);

  useEffect(() => {
    dispatch(
      getAllMenu({
        storeId,
      })
    );
  }, [dispatch, storeId]);

  return (
    <Layout>
      <Header />
      <StWrap>
        <StImgBox />
        <StInfoWrap>
          <p>CafeTeam4</p>
          <p>별점: ⭐⭐⭐⭐⭐</p>
          <DescWrap1>
            <p>최근리뷰 100개</p>
            <p>댓글 300개</p>
          </DescWrap1>
          <DescWrap2>
            <StBtn>
              <FaPhoneAlt />
              전화
            </StBtn>
            <StBtn>
              <FaRegHeart />찜
            </StBtn>
            <StBtn>
              <FaRegShareSquare />
              공유
            </StBtn>
          </DescWrap2>
        </StInfoWrap>
      </StWrap>
      <StTabWrap>
        <StTab onClick={() => tabHandlser(1)}>
          <p>메뉴</p>
        </StTab>
        <StTab onClick={() => tabHandlser(2)}>
          <p>리뷰</p>
        </StTab>
      </StTabWrap>
      <MenuWrap>
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <Menu />
        <StTotalPriceBox>
          <p>총 주문금액: 100,000원</p>
        </StTotalPriceBox>
      </MenuWrap>
      <StBtnBox>
        <Button btn="btn1">주문하러 가기</Button>
      </StBtnBox>
    </Layout>
  );
};

export default OrderPost;

const StWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StImgBox = styled.div`
  background: black;
  width: 100%;
  height: 300px;
  background-image: url("https://cdn.traveltimes.co.kr/news/photo/202109/113022_11185_1829.jpg");
  background-size: cover;
  box-shadow: var(--box-shadow);
`;

const StInfoWrap = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  row-gap: 10px;
  padding: 10px;
`;

const DescWrap1 = styled.div`
  display: flex;
  column-gap: 20px;
`;

const DescWrap2 = styled.div`
  display: flex;
  column-gap: 50px;
`;

const StBtn = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  &:hover {
    color: var(--brand-color);
  }
`;

const StTabWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  column-gap: 3px;
`;

const StTab = styled.button`
  background: white;
  width: 50%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 0px lightgray;
  border: 0;
  cursor: pointer;
  &:hover {
    background: var(--brand-color);
    color: white;
  }
  &:focus {
    background: var(--brand-color);
    color: white;
  }
`;

const MenuWrap = styled.div`
  width: 100%;
  max-height: 310px;
  flex-flow: column;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StTotalPriceBox = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

// ----- 주문하기 -----
// const submitHandler = async () => {
//   const info = { categoryId, title, content, imageUrl };
//   try {
//     const res = await axios.post("url", info);
//     return nav(`/${res.data.orderId}`);
//   } catch (err) {
//     console.log(err);
//     return;
//   }
// };
