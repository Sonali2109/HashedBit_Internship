import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import BookingForm from "./components/BookingForm";
import BookingConfirmation from "./components/BookingConfirmation";
import AllBookings from "./components/AllBookings";

const App = () => {
  const [bookings, setBookings] = useState([]);
  const handleBooking = (booking) => setBookings([...bookings, booking]);

  return (
    <Router>
      <nav>
        <Link to="/">🏠 Movies</Link> | <Link to="/all-bookings">📋 All Bookings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm onBook={handleBooking} />} />
        <Route path="/confirmation/:id" element={<BookingConfirmation bookings={bookings} />} />
        <Route path="/all-bookings" element={<AllBookings bookings={bookings} />} />
      </Routes>
    </Router>
  );
};

export default App;
