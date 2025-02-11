import React from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const BookingConfirmation = ({ bookings }) => {
  const { id } = useParams();
  const booking = bookings.find((b) => b.id === id);

  return booking ? (
    <div className="container">
      <h2>✅ Booking Confirmed!</h2>
      <p><strong>Booking ID:</strong> {booking.id}</p>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Email:</strong> {booking.email}</p>
      <p><strong>Mobile:</strong> {booking.mobile}</p>
    </div>
  ) : (
    <p>Booking not found!</p>
  );
};

export default BookingConfirmation;
