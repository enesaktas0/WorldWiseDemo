import React from "react";
import PageNav from "../components/PageNav";
import style from "./Pricing.module.css";

export default function Pricing() {
  return (
    <main className={style.pricing}>
      <PageNav />
      <section>
        <div>
          <h1>
            Simple Pricing.
            <br />
            Just $9/Month
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            maiores? Sapiente qui ex sunt delectus nisi molestiae sequi
            consectetur corrupti facilis deleniti dolore velit eos, nemo ipsa
            amet atque itaque! Libero saepe ab ut sed accusamus doloremque
            blanditiis aperiam aut!
          </p>
        </div>
        <div>
          <img src="./img-2.jpg" alt="view" className={style.view} />
        </div>
      </section>
    </main>
  );
}
