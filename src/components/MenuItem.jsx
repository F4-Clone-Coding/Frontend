import React, { useEffect, useState } from "react";
import styled from "styled-components";
import coffee from "../image/coffee.jpg"

const MenuItem = ({ menu, setTotalPrice, setMenuList }) => {
  const [count, setCount] = useState(0);
  const plusCountHandler = () => {
    setCount((prev) => prev + 1);
    setTotalPrice((prev) => prev + menu.price);
  };
  const minusCountHandler = () => {
    if (count !== 0) {
      setCount((prev) => prev - 1);
      setTotalPrice((prev) => prev - menu.price);
    } else {
      return;
    }
  };

  useEffect(() => {
    if (count !== 0) {
      setMenuList((prev) => ({
        ...prev,
        [menu.menuId]: { count: count, price: menu.price, menuId: menu.menuId },
      }));
    }
  },[count])

  return (
    <StMenuBox>
      <div style={{ display: "flex", flexFlow: "column" }}>
        <StTitle>{menu.name}</StTitle>
        <StPriceAndCountBox>
          <StSubTitle>{menu.price}원</StSubTitle>
          <StCountWrap>
            <StCountBtn onClick={minusCountHandler}>- 1</StCountBtn>
            <p>{count}개</p>
            <StCountBtn onClick={plusCountHandler}>+ 1</StCountBtn>
          </StCountWrap>
        </StPriceAndCountBox>
      </div>
      <img
        style={{
          width: "100px",
          height: "100px",
          boxShadow: "var(--box-shadow)",
        }}
        src={menu?.image || coffee}
      />
    </StMenuBox>
  );
};

export default MenuItem;

const StMenuBox = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: var(--box-shadow);
`;

const StTitle = styled.p`
  margin: 12px 0px;
`;

const StPriceAndCountBox = styled.div`
  width: 250px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;

const StSubTitle = styled.p`
  margin: 4px 0px;
`;

const StCountWrap = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-right: 5px;
`;

const StCountBtn = styled.button`
  border: 0;
  background: var(--brand-color);
  color: white;
  cursor: pointer;
`;
