import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/MovieDetailsPage.css';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=9813ce01a72ca1bd2ae25f091898b1c7`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(error => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movie) return <div className="loading">Loading...</div>;

  return (
    <div className="movie-details-page">
      <div className="movie-details-content">
        <h2 className="movie-title">{movie.title}</h2>
        <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetailsPage;
