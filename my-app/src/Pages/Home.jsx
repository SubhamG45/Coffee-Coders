
import React, { useState } from "react";
import tomato from "../assets/tomato.jpg";
import rice from "../assets/rice.jpg";
import chili from "../assets/chilli.jpg";
import mango from "../assets/mango.jpg";
import "./Home.css";

function Home() {
  return (
    <>
  
  <title>Agri Market - Home</title>

  <header>
    <h1>🌾 Agri Market - Butwal & Tilottama</h1>
    <p>Buy or Sell your crops easily in your local areas!</p>
  </header>

  <main>
    <section class="market-section">

      <div class="toggle-container">
        <button class="toggle-btn active">Buy</button>
        <button class="toggle-btn">Sell</button>
      </div>

      <div class="location-container">
        <label htmlFor="area">Choose Area:</label>
        <select id="area">
          <option value="butwal">Butwal</option>
          <option value="tilottama">Tilottama</option>
        </select>
      </div>

      <ul class="item-list">
        <li>
          <img src={tomato} alt="Fresh Tomatoes"/>
          <h3>Fresh Tomatoes</h3>
          <p>Price: NPR 80/kg</p>
          <p>Location: Butwal</p>
        </li>
        <li>
          <img src={rice} alt="Organic Rice"/>
          <h3>Organic Rice</h3>
          <p>Price: NPR 55/kg</p>
          <p>Location: Tilottama</p>
        </li>
        <li>
          <img src={chili} alt="Green Chili"/>
          <h3>Green Chili</h3>
          <p>Price: NPR 120/kg</p>
          <p>Location: Butwal</p>
        </li>
        <li>
          <img src={mango} alt="Fresh Mango"/>
          <h3>Fresh Mango</h3>
          <p>Price: NPR 150/kg</p>
          <p>Location: Tilottama</p>
        </li>
      </ul>

    </section>
  </main>

  <footer>
    <p>© 2026 Agri Market. All rights reserved.</p>
  </footer>




    </>

  );
}

export default Home;

