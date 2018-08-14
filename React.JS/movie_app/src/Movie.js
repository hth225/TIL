import React, { Component } from 'react';
import './Movie.css'

class Movie extends Component {
    render() {
        return (
            <div>
                <MoviePoster />
                <h1>Hello this is a Movie</h1>
            </div>
        );
    }
}

class MoviePoster extends Component {
    render() {
        return(
            <img src="https://t1.daumcdn.net/cfile/tistory/245A4C3F580FA48F19" />
        );
    }
}

export default Movie;