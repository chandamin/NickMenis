import React, { useState } from "react";

const ContactUs = () => {
const [formData, setFormData] = useState({
first: "",
last: "",
email: "",
phone: "",
address: "",
message: ""
});

const handleChange = (e) => {
setFormData({ ...formData, [e.target.name]: e.target.value });
};

const submitForm = (e) => {
e.preventDefault();
console.log("Form Submitted:", formData);
alert("Form submitted successfully!");
};

return ( <div className="contact-main"> <div className="contact-inner"> <h2 className="contact-title">Get In Touch</h2>

    <form className="contact-form" onSubmit={submitForm}>
      <div className="form-row">
        <input
          type="text"
          name="first"
          placeholder="First Name*"
          value={formData.first}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="last"
          placeholder="Last Name*"
          value={formData.last}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone*"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <input
        type="text"
        name="address"
        className="full"
        placeholder="Address*"
        value={formData.address}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        className="full"
        placeholder="Type your message here*"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit" className="contact-btn">Submit</button>
    </form>
  </div>
</div>

);
};

export default ContactUs;
