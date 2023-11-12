import React from "react";
import style from "./Login.module.css";
import PageNav from "../components/PageNav";
import Button from "../components/Button";

export default function Login() {
  return (
    <main className={style.login}>
      <PageNav />
      <form>
        <div>
          <label>E-mail adress </label>
          <input type="e-mail" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div>
          <Button type="login">Login</Button>
        </div>
      </form>
    </main>
  );
}
