import React from "react";
import "./styles.css";

const AllBookings = ({ bookings }) => (
  <div className="container">
    <h2>📋 All Bookings</h2>
    {bookings.map((booking) => (
      <div key={booking.id} className="booking-card">
        <p>🎥 Movie ID: {booking.movieId}</p>
        <p>👤 Name: {booking.name}</p>
        <p>📧 Email: {booking.email}</p>
        <p>📞 Mobile: {booking.mobile}</p>
      </div>
    ))}
  </div>
);

export default AllBookings;
