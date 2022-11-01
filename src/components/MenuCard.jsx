import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from './MenuItem';
import Button from "../elements/button";
import { useNavigate } from 'react-router';
import instance from '../shared/apis';
import Swal from "sweetalert2";

const MenuCard = ({ menus, storeId }) => {
  const nav = useNavigate();
  const [menuList, setMenuList] = useState({});
  console.log("menuList", menuList);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("menuList", { menus: Object.values(menuList) });
  const order = { menus: Object.values(menuList), sum: totalPrice };
  console.log("order", order);

  const orderHandler = async (order, storeId) => {
      try {
        const res = await instance.post(`/store/${storeId}`, { order });
        console.log("orderId 받아와야함", res.data.orderId);
        if (res.status === 200) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "주문이 완료되었습니다!",
            showConfirmButton: false,
            timer: 1000,
          });
          nav(`/order/${res.data.orderId}`);
        }
      } catch (err) {
        return console.log('주문하기 에러', err);
      }
    };

  return (
    <>
      <StMenuContainer>
        {menus?.map((menu) => (
          <MenuItem
            key={menu.menuId}
            menu={menu}
            setTotalPrice={setTotalPrice}
            setMenuList={setMenuList}
          />
        ))}
      </StMenuContainer>
      <StTotalPriceBox>
        <p>총 주문금액: {totalPrice}원</p>
      </StTotalPriceBox>
      <StBtnBox>
        <Button onClick={() => orderHandler(order, storeId)} btn="btn1">
          주문하러 가기
        </Button>
      </StBtnBox>
    </>
  );
};

export default MenuCard;

const StMenuContainer = styled.div`
  width: 95%;
  margin-top: 16px;
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
