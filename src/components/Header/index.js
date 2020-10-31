import React from "react";

import { Navigation } from "./Navigation";

import { Root, Wrapper, Logo } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <Navigation />
    </Wrapper>
  </Root>
);
