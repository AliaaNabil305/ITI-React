import Types from "prop-types"

const Movie = (props) => {
    console.log(props);
    const { Movie, year } = props;
    return (
      <div style={{  margin: "50px auto" }}>
        {Movie && <div>Movie : {Movie}</div>}
        <div>year : {year}</div>
      </div>
    );
  };
  
Movie.propTypes={
    Movie:Types.string,

    year:Types.number.isRequired
}

export default Movie;