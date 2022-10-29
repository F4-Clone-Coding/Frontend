import React from "react";
import styled, { css } from "styled-components";

export default function Input({ children, ...restProps }) {
    return <Inp {...restProps}>{children}</Inp>;
}

const Inp = styled.input`
  
  ${({ inp }) => {
        switch (inp) {
            case "inp1":
                return inp1;
            case "inp2":
                return inp2;
            case "inp3":
                return inp3;
            default:
                break;
        }
    }}
`;

export const inp1 = css`
        width: 361px;
        height: 61px;
        font-size: 16px;
        border: 1px solid #999;
        border-radius: 6px;
        transition: all 0.3s linear;
    &:focus {
        border:1px solid #2AC1BC;
        outline: none;
    }
`;
export const inp2 = css`
        width: 361px;
        height: 61px;
        font-size: 16px;
        border:none;
        border-bottom: 1px solid #999;
        
        transition: all 0.2s linear;
    &:focus {
        border-bottom: 1px solid #2AC1BC;
        outline: none
    }
`;
export const inp3 = css`
   width: 7rem;
    height: 4rem;
    background-color: #293991;
    color: #ffffff;
    border: 2px solid white;
    border-radius: 5px;
    &:hover{
        background-color: #1b2661;
    }
`;