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
  const [totalPrice, setTotalPrice] = useState(0);
  const order = { menus: Object.values(menuList), sum: totalPrice };

  const orderHandler = async (order, storeId) => {
      try {
        const res = await instance.post(`/store/${storeId}`, { order });
        if (res.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            background:
              "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
            title: "주문이 완료되었습니다!",
            width: 350,
            height: 200,
            showConfirmButton: false,
            timer: 1500,
          });
          nav(`/order/${res.data.orderId}`);
        }
      } catch (err) {
        Swal.fire({
          position: "center",
          icon: "warning",
          background:
            "#fff url(https://images.velog.io/images/kongsub/post/96e23619-25ab-4d99-a5fd-6e31a9e7fa8b/100600104.2.jpg)",
          title: "로그인 후 이용해주세요!",
          width: 350,
          height: 200,
          showConfirmButton: false,
          timer: 1500,
        });
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
