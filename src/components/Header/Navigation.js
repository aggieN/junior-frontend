import React from "react";
import { NavLink } from "react-router-dom";

import { NavList, NavItem } from "./styles";

export const Navigation = () => (
  <nav>
    <NavList>
      <NavItem as={NavLink} to="/">
        Start
      </NavItem>
      <NavItem as={NavLink} to="/my-profile">
        My Profile
      </NavItem>
    </NavList>
  </nav>
);
