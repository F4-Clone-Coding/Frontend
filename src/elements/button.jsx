import React from "react";
import styled, { css } from "styled-components";

export default function Button({ children, ...restProps }) {
  return <Btn {...restProps}>{children}</Btn>;
}

const Btn = styled.button`
  height: 62px;
  border-radius: 6px;
  position: absolute;
  bottom: 15px;
  ${({ btn }) => {
    switch (btn) {
      case "btn1":
        return btn1;
      case "btn2":
        return btn2;
      case "btn3":
        return btn3;
      default:
        break;
    }
  }}
`;

export const btn1 = css`
  width: 381px;
  background-color: var(--brand-color);
  color: white;
  border: none;
  transition: all 0.2s linear;
  font-size: 16px;
  margin: 0;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: var(--brand-color);
    border: 1px solid var(--brand-color);
  }
`;
export const btn2 = css`
  width: 7rem;
  height: 4rem;
  background-color: #293991;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: #1b2661;
  }
`;
export const btn3 = css`
  width: 7rem;
  height: 4rem;
  background-color: #293991;
  color: #ffffff;
  border: 2px solid white;
  border-radius: 5px;
  &:hover {
    background-color: #1b2661;
  }
`;
