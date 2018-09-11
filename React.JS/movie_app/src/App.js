import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Movie from "./Movie";
import Search from "react-search-box";

// import Dropdown from "react-dropdown";

// const options = [
//   "title",
//   "year",
//   "rating",
//   "peers",
//   "seeds",
//   "download_count",
//   "like_count",
//   "date_added"
// ];

class App extends Component {
  // Component LifeCycle
  // render : componentWillMount() -> render() -> componentDidMount()
  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  constructor(props) {
    super(props);
    this.state = {
      selected: "year",
      update: false,
      searchData: []
    };
    // this._onSelect = this._onSelect.bind(this);
  }

  componentDidMount() {
    this._getMovies();
    this._getSearchData();
  }

  // shouldComponentUpdate() {
  //   if (this.state.update) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return (
        <Movie
          title={movie.title_long}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    // promise는 첫 번째 작업이 끝나지 않아도 두 번째 작업을 수행함
    const { selected } = this.state;
    return fetch(
      `https://yts.am/api/v2/list_movies.json?sort_by=${selected}?limit=30`
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  // _onSelect = options => {
  //   this.setState({
  //     selected: options,
  //     update: true
  //   });
  // };

  _getSearchData = () => {
    const { movies } = this.state;
    const data = movies.map(movie => {
      this.setState({
        searchData: movie.title_long
      });
      return data
    })
    
  };


  render() {
    const { movies } = this.state;

    return (
      <Fragment>
        {/* <Dropdown
          options={options}
          onChange={this._onSelect}
          value={this.state.selected}
          placeholder="Select Sort options"
        /> */}
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : "Loading"}
        </div>
      </Fragment>
    );
  }
}

export default App;
