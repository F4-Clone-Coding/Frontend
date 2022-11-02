import React from "react";
import styled from "styled-components";

const OrderCard = ({ orders }) => {

  return (
    <>
      <StMenuContainer>
        {orders?.menus.map((menu) => (
          <StWrap key={menu.menuId}>
            <StTextWrap>
              <span>
                {menu.name} - {menu.count}개
              </span>
              <p>{menu.price}원</p>
            </StTextWrap>
            <Stimg
              src="https://doewxs707ovkc.cloudfront.net/v3/prod/image/item/mainpage/907/ad4474bef39c4167b84477eaa7a5052f20210708171733."
              alt="menuImage"
            />
          </StWrap>
        ))}
      </StMenuContainer>
    </>
  );
};

export default OrderCard;

const StMenuContainer = styled.div`
  height: 480px;
  box-shadow: var(--box-shadow);
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StWrap = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 16px;
  padding: 0px 10px;
  box-shadow: var(--box-shadow);
`;

const StTextWrap = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: 10px;
`;

const Stimg = styled.img`
  width: 80px;
  height: 80px;
`;
