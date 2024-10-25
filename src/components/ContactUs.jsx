<<<<<<< HEAD
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container contact container">
      <h1
        style={{
          fontWeight: "bolder",
          fontSize: "2.5em",
          textAlign: "center",
          textDecoration: "underline crimson",
        }}
      >
        Contact Us
      </h1>
      <p>
        If you have any questions or need assistance, please fill out the form
        below or reach out to us directly.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <h2>Contact Information</h2>
      <p>
        Email: <a href="mailto:support@example.com">support@example.com</a>
      </p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Education Lane, Learning City, ED 12345</p>
    </div>
  );
};

export default ContactUs;
=======
import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container contact container">
      <h1
        style={{
          fontWeight: "bolder",
          fontSize: "2.5em",
          textAlign: "center",
          textDecoration: "underline crimson",
        }}
      >
        Contact Us
      </h1>
      <p>
        If you have any questions or need assistance, please fill out the form
        below or reach out to us directly.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Send Message
        </button>
      </form>

      <h2>Contact Information</h2>
      <p>
        Email: <a href="mailto:support@example.com">support@example.com</a>
      </p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 Education Lane, Learning City, ED 12345</p>
    </div>
  );
};

export default ContactUs;
>>>>>>> 5a84f5fdfd4b446c55c304790ce134a4a1595fe8
