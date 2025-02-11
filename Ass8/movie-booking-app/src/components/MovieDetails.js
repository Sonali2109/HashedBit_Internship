import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";
import { movies } from "./MovieList"; // Import movies correctly

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = movies.find((m) => m.id === parseInt(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="container">
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} className="movie-img-large" />
      <p>🎞 Experience the magic of {movie.title}. Book your seats now!</p>
      <button className="btn" onClick={() => navigate(`/book/${id}`)}>🎟 Book Seat</button>
    </div>
  );
};

export default MovieDetails;
