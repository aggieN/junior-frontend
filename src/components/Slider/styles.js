import styled, { keyframes } from "styled-components";

const slide = keyframes`
    from {
        transform: translateX(-15%);
    }
    to {
        transform: translateX(600%);
    }
`;
export const SliderContainer = styled.div`
  width: 100vw;
  margin: 3rem 0;
  padding: 0;
`;

export const SlideShow = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const Slide = styled.img`
  width: 25rem;
  height: auto;
  margin: 0 1rem;
  border-radius: 2rem;
  animation: ${slide} 25s linear infinite;
`;
