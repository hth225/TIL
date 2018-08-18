import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
            {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
        </div>
        <p className="Movie__Synopsis">
            {synopsis}
        </p>

      </div>
    </div>
  );
}
function MovieGenre({genre}){
    return (
        <span className="Movie__Genres">{genre}</span>
    )
}

function MoviePoster({ alt, poster }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster"/>;
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
MoviePoster.propTypes = {
  alt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  
};
MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired,
}
export default Movie;
