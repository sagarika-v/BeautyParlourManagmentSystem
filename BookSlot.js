import React, { useState } from 'react';
import axios from 'axios';

function BookSlot() {
  const [form, setForm] = useState({ name: '', service: '', date: '', time: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/appointments', form);
    alert('Appointment Booked!');
  };

  return (
    <div>
      <h2>Book a Service Slot</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Your Name" onChange={handleChange} required />
        <input name="service" placeholder="Service Type" onChange={handleChange} required />
        <input name="date" type="date" onChange={handleChange} required />
        <input name="time" type="time" onChange={handleChange} required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookSlot;
