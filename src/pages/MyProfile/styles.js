import React from "react";
import styled, { keyframes } from "styled-components";

const appear = keyframes`
 0% {
     opacity: 0;
 }
 90% {
     opacity: 1;
 }
`;

const bounce = keyframes`
    0%, 80%, 100% {
        transform: scale(0)
    }
    40% {
        transform: scale(1);
    }
`;

export const Wrapper = styled.div`
  width: ${({ theme }) => theme.size.contentWidth};
  margin: 4rem auto;
  padding: 5rem;
`;

export const Name = styled.h1`
  margin-left: 1rem;
  animation: ${appear} 1s ease;
`;

export const Image = styled.img`
  width: 22rem;
  height: auto;
  border-radius: 1.5rem;
  margin-top: 1rem;
  animation: ${appear} 1s ease;
`;

const DotsWrapper = styled.div`
  width: 100%;
  height: 30rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dot1 = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.black};
  animation: ${bounce} 1.5s infinite ease-in-out;
  animation-delay: -0.3s;
`;
const Dot2 = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.black};
  animation: ${bounce} 1.5s infinite ease-in-out;
  animation-delay: -0.15s;
`;
const Dot3 = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.black};
  animation: ${bounce} 1.5s infinite ease-in-out;
`;

export const Loader = () => (
  <DotsWrapper>
    <Dot1></Dot1>
    <Dot2></Dot2>
    <Dot3></Dot3>
  </DotsWrapper>
);
