import React from "react";
import styled from "styled-components";
import phone from "../image/phone.png"

const Layout = (props) => {
  return (
    <StLayout>
      {props.children}
    </StLayout>
  );
};

export default Layout;

const StLayout = styled.div`
  width: 390px;
  height: 844px;
  padding: 60px 25px;
  background-image: url("${phone}");
  background-size: cover;
  background-position: center;
  position: relative;
`;
