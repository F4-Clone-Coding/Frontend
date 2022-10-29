import React from "react";
import styled from "styled-components";

const Menu = () => {
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
          <StTitle>메뉴 이름</StTitle>
          <StSubTitle>메뉴</StSubTitle>
          <StSubTitle>가격</StSubTitle>
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

export default Menu;

const StMenuContainer = styled.div`
  width: 95%;
  margin-top: 16px;
  box-shadow: var(--box-shadow);
`;

const StTitle = styled.p`
  margin: 12px 0px;
`;

const StSubTitle = styled.p`
  margin: 4px 0px;
`;
