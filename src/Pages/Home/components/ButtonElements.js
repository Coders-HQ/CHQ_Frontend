import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(Link)`
border-radius: 50px;
background: #b71c1c;
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#FFF" : "#FFF")}
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #da0202;
`;

export const ButtonR = styled(LinkR)`
border-radius: 50px;
background: #b71c1c;
white-space: nowrap;
padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#FFF" : "#FFF")}
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")}
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover{
    transition: all 0.2s ease-in-out;
    background: #da0202;
`;
