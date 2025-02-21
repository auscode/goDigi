import React from "react";
import "../styles/_hero.scss";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Elevate Your Brand with Stunning Web Design</h1>
        <p className="">
          Create high-converting, visually compelling websites that drive
          engagement and sales. Our digital marketing web design service ensures
          your brand stands out with sleek, responsive, and user-friendly
          designs tailored to your business goals.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Primary</button>
          <button className="btn default">Default</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Section" />
      </div>
    </section>
  );
};

export default Hero;
