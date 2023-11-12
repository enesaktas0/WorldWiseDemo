import React from "react";
import style from "./AppLayout.module.css";
import SideBar from "../components/SideBar";

export default function AppLayout() {
  return (
    <div className={style.app}>
      <SideBar />
    </div>
  );
}
