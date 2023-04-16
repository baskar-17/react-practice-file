import React, { useState } from "react";

function Technical() {
  const [technicalData, setTechnicalData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const handleTechnicalChange = (event) => {
    setTechnicalData({
      ...technicalData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(technicalData); // You can see the data in the browser console
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={technicalData.name}
        onChange={handleTechnicalChange}
      />
      <input
        type="email"
        name="email"
        value={technicalData.email}
        onChange={handleTechnicalChange}
      />
      <input
        type="tel"
        name="phone"
        value={technicalData.phone}
        onChange={handleTechnicalChange}
      />
      <input
        type="text"
        name="city"
        value={technicalData.city}
        onChange={handleTechnicalChange}
      />
      <input
        type="text"
        name="state"
        value={technicalData.state}
        onChange={handleTechnicalChange}
      />
      <input
        type="text"
        name="country"
        value={technicalData.country}
        onChange={handleTechnicalChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
export default Technical;
