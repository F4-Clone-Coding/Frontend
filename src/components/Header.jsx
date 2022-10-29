import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeaderContainer>
      <IoArrowBackOutline className="icon" onClick={() => navigate("/")} />
      <FaHome className="icon" onClick={() => navigate("/")} />
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  /* background: white; */
  width: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  .icon {
    font-size: 24px;
    padding: 10px 14px;
    cursor: pointer;
    &:hover {
      color: var(--brand-color);
    }
  }
`;
