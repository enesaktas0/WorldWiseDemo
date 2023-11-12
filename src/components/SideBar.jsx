import React from "react";
import styles from "./SideBar.module.css";
import AppNav from "./AppNav";
import Logo from "./Logo";
import { Outlet } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />

      <footer className={styles.footer}>
        &copy; Copyrigth {new Date().getFullYear()} by WordWise Inc.
      </footer>
    </aside>
  );
}
