import React from "react";

import { slides } from "./slides";

import { SliderContainer, Slide, SlideShow } from "./styles";

export const Slider = () => {
  const slidesArr = [
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
    ...slides,
  ];

  return (
    <>
      <SliderContainer>
        <SlideShow>
          {slidesArr.map((slide, index) => {
            return <Slide key={index} src={slide} />;
          })}
        </SlideShow>
      </SliderContainer>
    </>
  );
};
