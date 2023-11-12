import React from "react";
import style from "./Logo.module.css";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/WorldWiseDemo/">
      <img src="./logo.png" alt="WordWise Logo" className={style.logo} />
    </Link>
  );
}
