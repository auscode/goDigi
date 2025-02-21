import React from "react";
import "../styles/_features.scss";
import { FaBox, FaUserCircle, FaShareAlt } from "react-icons/fa";

const featuresList = [
  {
    icon: <FaBox />,
    title: "Fast & Secure Hosting",
    description:
      "Enjoy reliable hosting with top-tier security and fast load speeds to keep your visitors engaged.",
  },
  {
    icon: <FaUserCircle />,
    title: "SEO-Optimized Structure",
    description:
      "Our web designs follow best SEO practices to help your site rank higher and attract more organic traffic.",
  },
  {
    icon: <FaShareAlt />,
    title: "Conversion-Driven Approach",
    description:
      "We create designs that not only look great but also drive leads, sales, and customer engagement.",
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <h2 className="section-title">Features</h2>
        <hr />
        <div className="row">
          {featuresList.map((feature, index) => (
            <div className="col-md-4 feature-box" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
