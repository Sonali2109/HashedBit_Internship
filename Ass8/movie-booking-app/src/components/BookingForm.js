import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

const BookingForm = ({ onBook }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", mobile: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = { ...form, id: uuidv4(), movieId: id };
    onBook(booking);
    navigate(`/confirmation/${booking.id}`);
  };

  return (
    <div className="container">
      <h2>🎟 Book Your Seat</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input type="email" placeholder="Email" required onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input type="tel" placeholder="Mobile" required onChange={(e) => setForm({ ...form, mobile: e.target.value })} />
        <button type="submit" className="btn">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
