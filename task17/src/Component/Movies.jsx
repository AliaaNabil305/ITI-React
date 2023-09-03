import  { useState } from 'react';
import Movie from './Movie';


const Movies = () => {
    const [moviesArr]= useState([
        {Movie:"f" ,year:2020},
        {Movie:"s" ,year:2022},
        {Movie:"t" ,year:2021},
        {Movie:"u" ,year:2023},
       
    ])
    console.log(moviesArr)
    return (
       <div>
        {moviesArr.map((movie) => (
  <Movie Movie={movie.Movie} year={movie.year}></Movie>
))}


       </div>
    );
}

export default Movies;

