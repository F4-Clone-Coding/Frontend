import React from "react";
import styled from "styled-components";

const Menu = () => {
  return (
    <div style={{ background: "red" }}>
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
          style={{ background: "blue", width: "100px", height: "100px" }}
          src=""
        />
      </div>
    </div>
  );
};

export default Menu;

const StTitle = styled.p`
  margin: 12px 0px;
`;

const StSubTitle = styled.p`
  margin: 4px 0px;
`;

// const StImgBox = styled.div`
//   background: blue;
//   width: 100px;
// `;
