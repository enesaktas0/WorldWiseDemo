import React from "react";
import style from "./HomePage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function HomePage() {
  return (
    <main className={style.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world
          <br />
          WordWise keeps track of your adventures
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/WorldWiseDemo/app" className="cta">
          Start Tracking Now
        </Link>
      </section>
    </main>
  );
}
