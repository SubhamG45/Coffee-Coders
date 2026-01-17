import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

import "./About.css";

function About() {
  const [season, setSeason] = useState("");
  const [soil, setSoil] = useState("");
  const [result, setResult] = useState("");

  const getSuggestion = () => {
    if (!season || !soil) {
      alert("Please select both season and soil!");
      return;
    }

    let crop = "";
    let tip = "";

    if (season === "Rainy" && soil === "Clay") {
      crop = "Rice 🌾";
      tip = "Maintain water level and use organic compost.";
    } else if (season === "Summer" && soil === "Sandy") {
      crop = "Watermelon 🍉";
      tip = "Use drip irrigation and mulch to retain moisture.";
    } else if (season === "Winter" && soil === "Loamy") {
      crop = "Wheat 🌾";
      tip = "Irrigate every 7–10 days.";
    } else {
      crop = "Maize 🌽";
      tip = "Use balanced fertilizer and proper spacing.";
    }

    setResult(`✅ Best Crop: ${crop} <br> 💡 Tip: ${tip}`);
  };

  return (
    <>
      <header>
        <h1>🌾 Smart Farmer</h1>
      </header>

      <section className="hero" id="home">
        <h2>Helping Farmers Choose Crops Easily!</h2>
      </section>

      <section className="input-section" id="suggestion">
        <h2>Get Crop Suggestion</h2>
        <select value={season} onChange={(e) => setSeason(e.target.value)}>
          <option value="">Select Season</option>
          <option value="Summer">Summer</option>
          <option value="Rainy">Rainy</option>
          <option value="Winter">Winter</option>
        </select>

        <select value={soil} onChange={(e) => setSoil(e.target.value)}>
          <option value="">Select Soil Type</option>
          <option value="Clay">Clay</option>
          <option value="Sandy">Sandy</option>
          <option value="Loamy">Loamy</option>
        </select>

        <button onClick={getSuggestion}>Get Suggestion</button>

        {result && (
          <div
            className="result"
            dangerouslySetInnerHTML={{ __html: result }}
          ></div>
        )}
      </section>

      <FaCamera size={30} />
      <section className="crops-info" id="crops">
        <h2>Popular Crops</h2>
        <div className="crop">🌾 Rice - Best in Clay soil, Rainy season</div>
        <div className="crop">🍉 Watermelon - Best in Sandy soil, Summer</div>
        <div className="crop">🌽 Maize - Any soil, Any season</div>
        <div className="crop">🌾 Wheat - Best in Loamy soil, Winter</div>
      </section>

      <footer id="contact">
        <p>Contact us: farmer@example.com | Phone: 9876543210</p>
        <p>Made by a student 😎</p>
      </footer>
    </>
  );
}

export default About;
