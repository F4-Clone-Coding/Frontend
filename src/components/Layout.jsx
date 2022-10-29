import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <StLayout>{props.children}</StLayout>;
};

export default Layout;

const StLayout = styled.div`
    max-width :390px;
    max-height:844px;
    width:390px;
    height:844px;
    margin: 0 auto;
    background-color: white;
    position: relative;
`
