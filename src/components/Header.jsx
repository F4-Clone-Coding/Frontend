import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();



  return (
    <StHeaderContainer>
      <IoArrowBackOutline className="icon1" onClick={() => navigate(-1)} />
      <FaHome className="icon2" onClick={() => navigate("/store")} />
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  /* background: white; */
  width: 100%;
  position: absolute;
  top: 20;
  display: flex;
  justify-content: space-between;
  .icon1 {
    font-size: 24px;
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
      color: var(--brand-color);
    }
  }
  .icon2 {
    font-size: 24px;
    padding: 8px 65px;
    cursor: pointer;
    &:hover {
      color: var(--brand-color);
    }
  }
`;
