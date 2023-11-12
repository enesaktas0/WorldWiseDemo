import React from "react";
import style from "./PageNav.module.css";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

export default function AppNav() {
  return (
    <nav className={style.navbar}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/WorldWiseDemo/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/WorldWiseDemo/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/WorldWiseDemo/login" className={style.ctaLink}>
            Log In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
