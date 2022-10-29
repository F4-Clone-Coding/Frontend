import React from "react";
import styled from "styled-components";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StHeaderContainer>
      <StBtnWrap>
        <IoArrowBackOutline className="icon" onClick={() => navigate("/")} />
        <FaHome className="icon" onClick={() => navigate("/")} />
      </StBtnWrap>
    </StHeaderContainer>
  );
};

export default Header;

const StHeaderContainer = styled.div`
  position: absolute;
  top: 0;
`;

const StBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 10px;
  .icon {
    cursor: pointer;
    font-size: 24px;
  }
`;
