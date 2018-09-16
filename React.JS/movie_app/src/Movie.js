import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LineEllipsis from "react-lines-ellipsis";
function Movie({ poster, title, genres, synopsis }) {
  return (
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster} alt={title} />
      </div>
      <div className="Movie__Column">
        <h1>{title}</h1>
        <div className="Movie__Genres">
          {genres.map((genre, index) => (
            <MovieGenre genre={genre} key={index} />
          ))}
        </div>
        <p className="Movie__Synopsis">
          <LineEllipsis
            text={synopsis}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </p>
      </div>
    </div>
  );
}
function MovieGenre({ genre }) {
  return <span className="Movie__Genre">{genre}</span>;
}
// _genreGenerator = () => {
//   const {movies, genres} = this.state;
//   console.log(genres);
//   const genreVal = movies.map(movie => {movie.genre_ids})
//   console.log(movies);
//   console.log(movies.find(movie => {movie.genre_ids.includes(genres.id)}));
//   console.log(genres);
//   const genreText = movies.filter(movie => movie.genre_ids.includes(genres.id))
//   console.log(genreText)
// }

function MoviePoster({ alt, poster }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />;
}
Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  synopsis: PropTypes.string.isRequired
};
MoviePoster.propTypes = {
  alt: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};
MovieGenre.propTypes = {
  genre: PropTypes.string.isRequired
};
export default Movie;
