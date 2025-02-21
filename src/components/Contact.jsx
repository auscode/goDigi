import React, { useState } from "react";
import "../styles/_contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", query: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setError("Invalid email format");
    } else {
      setError("Success!");
      setFormData({ name: "", email: "", query: "" });
    }
  };

  return (
    <section className="contact text-center">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="query"
          placeholder="Tell Us About Your Project"
          value={formData.query}
          onChange={handleChange}
        ></textarea>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </section>
  );
};

export default Contact;
