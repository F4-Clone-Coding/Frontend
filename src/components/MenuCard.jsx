import React, { useState } from "react";
import styled from "styled-components";
import MenuItem from './MenuItem';

const MenuCard = ({ menus }) => {
  const [menuList, setMenuList] = useState({});
  console.log("menuList", menuList);
  const [totalPrice, setTotalPrice] = useState(0);
  console.log("menuList", { menus: Object.values(menuList) });
  const order = { menus: Object.values(menuList), sum: totalPrice };
  console.log('order', order)

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
