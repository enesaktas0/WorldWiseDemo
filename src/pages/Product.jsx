import React from "react";
import PageNav from "../components/PageNav";
import style from "./Pricing.module.css";

export default function Product() {
  return (
    <main className={style.pricing}>
      <PageNav />
      <section>
        <div>
          <img src="./img-1.jpg" alt="view" />
        </div>
        <div>
          <h1>About WorldWise.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            maiores? Sapiente qui ex sunt delectus nisi molestiae sequi
            consectetur corrupti facilis deleniti dolore velit eos, nemo ipsa
            amet atque itaque! Libero saepe ab ut sed accusamus doloremque
            blanditiis aperiam aut!
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            doloribus libero sunt expedita ratione iusto, magni, id sapiente
            sequi officiis et.
          </p>
        </div>
      </section>
    </main>
  );
}
