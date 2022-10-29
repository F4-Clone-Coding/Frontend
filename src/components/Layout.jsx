import React from "react";
import styled from "styled-components";

const Layout = (props) => {
    return (

        <StLayout>{props.children}</StLayout>

    );
};

export default Layout;

const StLayout = styled.div`
    max-width :410px;
    max-height:844px;
    width:410px;
    height:844px;
    margin: 0 auto;
    background-color: #e2eeee;
    position: relative;
`