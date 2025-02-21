import React from "react";
import "../styles/_pricing.scss";

const pricingPlans = [
  {
    name: "Free",
    price: "$0/mo",
    users: "Basic website design",
    storage: "Mobile responsiveness",
    support: "Email support",
    access: "Help center access",
    btnText: "Sign up for free",
  },
  {
    name: "Pro",
    price: "$15/mo",
    users: "Custom website design",
    storage: "SEO optimization",
    support: "Priority email support",
    access: "Help center access",
    btnText: "Get started",
  },
  {
    name: "Enterprise",
    price: "$29/mo",
    users: "Advanced web design",
    storage: "SEO optimization",
    support: "Dedicated support",
    access: "Help center access",
    btnText: "Contact us",
  },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="text-center mb-10">
        <h2 className="section-title">Pricing</h2>
        <p className="text-gray-400 mt-2 sec-desc">
          Choose a package that fits your business needs.
        </p>
        <hr />
      </div>

      <div className="container">
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-md-4">
              <div
                className={`pricing-card ${
                  index === 1 ? "bg-primary text-white" : "bg-dark text-light"
                }`}
              >
                <h3>{plan.name}</h3>
                <p className="h3 fw-bold mt-2">{plan.price}</p>
                <ul className="list-unstyled mt-3 pricing-desc">
                  <li>{plan.users}</li>
                  <li>{plan.storage}</li>
                  <li>{plan.support}</li>
                  <li>{plan.access}</li>
                </ul>
                <button
                  className={`mt-4 btn bg-white text-black ${
                    index === 1 ? "" : ""
                  } `}
                >
                  {plan.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
