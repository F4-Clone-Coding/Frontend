import React, { useState } from "react";
import styled from "styled-components";

const MenuCard = () => {
  // const checkList = [];

  const [plusCount, setPlusCount] = useState(0);
  const [minusCount, setMinusCount] = useState(0);
  const plusCountHandler = () => {
    setPlusCount(plusCount + 1);
  };
  const minusCountHandler = () => {
    if (count !== 0) {
      setMinusCount(minusCount - 1);
    } else {
      return;
    }
  };
  const count = plusCount + minusCount;
  const price = count * 1000;

  return (
    <StMenuContainer>
      <div
        style={{
          padding: "8px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
          }}
        >
          <div
            style={{
              width: "250px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <StTitle>메뉴 이름</StTitle>
            <input type="checkbox" />
          </div>
          <StSubTitle>메뉴</StSubTitle>
          <StPriceAndCountBox>
            <StSubTitle>{price}원</StSubTitle>
            <StCountWrap>
              <StCountBtn onClick={plusCountHandler}>+ 1</StCountBtn>
              <p>{count}개</p>
              <StCountBtn onClick={minusCountHandler}>- 1</StCountBtn>
            </StCountWrap>
          </StPriceAndCountBox>
        </div>
        <img
          style={{
            width: "100px",
            height: "100px",
            boxShadow: "var(--box-shadow)",
          }}
          src="http://www.datanet.co.kr/news/photo/201902/131191_57145_3939.jpg"
        />
      </div>
    </StMenuContainer>
  );
};

export default MenuCard;

const StMenuContainer = styled.div`
  width: 95%;
  margin-top: 16px;
  box-shadow: var(--box-shadow);
`;

const StTitle = styled.p`
  margin: 12px 0px;
`;

const StPriceAndCountBox = styled.div`
  width: 250px;
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
`;
