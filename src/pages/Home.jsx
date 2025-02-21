import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Pricing from "../components/Pricing";
import Contact from "../components/Contact";
// import "../styles/_global.scss";

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

const Home = () => {
  useScrollAnimation();
  return (
    <div>
      <Hero className="fade-in" />
      <Features className="fade-in" />
      <Pricing className="fade-in" />
      <Contact className="fade-in" />
    </div>
  );
};

export default Home;
