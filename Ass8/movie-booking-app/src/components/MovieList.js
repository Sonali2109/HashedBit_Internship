import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import inception from "./images/inception.png";
import avengers from "./images/avengers.png";
import titanic from "./images/titanic.png";
import interstellar from "./images/interstellar.png";
import darkknight from "./images/thedarkknight.png";
import avatar from "./images/avatar.png";
import joker from "./images/joker.png";

export const movies = [
  { id: 1, title: "Inception", image: inception },
  { id: 2, title: "Avengers", image: avengers },
  { id: 3, title: "Titanic", image: titanic },
  { id: 4, title: "Interstellar", image: interstellar },
  { id: 5, title: "The Dark Knight", image: darkknight },
  { id: 6, title: "Avatar", image: avatar },
  { id: 7, title: "Joker", image: joker }
];

const MovieList = () => (
  <div className="container">
    <h2>🎬 Now Showing</h2>
    <div className="movie-grid">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image} alt={movie.title} className="movie-img" />
            <p>{movie.title}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export default MovieList;
