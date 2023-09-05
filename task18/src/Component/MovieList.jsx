import React, { Component } from "react";

const imgPath = "https://image.tmdb.org/t/p/w500/";
const apiKey = "9813ce01a72ca1bd2ae25f091898b1c7"; 

class MovieList extends Component {
  state = {
    movies: [],
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.results) {
          this.setState({
            movies: data.results,
            isLoading: false,
          });
        } else {
          this.setState({
            error: "No movies found",
            isLoading: false,
          });
        }
      })
      .catch((error) => {
        this.setState({
          error: "An error occurred while fetching data",
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>{error}</div>;
    }

    return (
      <div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {movies.map((movie) => (
            <div key={movie.id} style={{ margin: "10px", textAlign: "center" }}>
              <img src={imgPath + movie.poster_path} alt={movie.title} style={{ width: "200px" }} />
              <h3>{movie.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;
