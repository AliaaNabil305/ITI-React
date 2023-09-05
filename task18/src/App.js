import React from 'react';
import Images from './Component/Images'; 
import MovieList from './Component/MovieList';

const images = [
  'images/1.jpg',
  'images/2.jpg',
  'images/3.jpg',
  'images/4.jpg',
  'images/5.jpg',
  'images/6.jpg',
];

function App() {
  return (
    <div className="App">
      {/* <Images images={images} /> */}
      <MovieList></MovieList>
    </div>
  );
}

export default App;
