import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Home.css'; 

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7')
      .then(response => response.json())
      .then(data => setMovies(data.results)); 
  }, []);

  return (
    <div className="movie-list"> 
      
      {movies.map(movie => (
        <div key={movie.id} className="movie-card"> 
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          <div className="movie-details"> 
            <h3>{movie.title}</h3>
            <Link to={`/movie/${movie.id}`}>Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
