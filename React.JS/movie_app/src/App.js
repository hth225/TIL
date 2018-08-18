import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Component LifeCycle
  // render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {};

  componentDidMount() {
    // promise는 첫 번째 작업이 끝나지 않아도 두 번째 작업을 수행함
    fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });
    return movies;
  };

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : "Loading"}
      </div>
    );
  }
}

export default App;
