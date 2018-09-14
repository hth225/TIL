import React, { Component, Fragment } from "react";
// import logo from './logo.svg';
import "./App.css";
import Movie from "./Movie";

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
  }

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.searchData.map(movie => {
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
      movies,
      searchData: movies
    });
  };

  _callApi = () => {
    // promise는 첫 번째 작업이 끝나지 않아도 두 번째 작업을 수행함
    const { selected } = this.state;
    return fetch(
      `https://yts.am/api/v2/list_movies.json?sort_by=${selected}`
    )
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  onChangeSearchInput(event) {
    const searchKeyword = event.target.value;
    const { movies } = this.state;
    const searchResultList = movies.filter(movie =>
      movie.title_long.includes(searchKeyword)
    );
    console.log(searchResultList);
    this.setState({ searchData: searchResultList });
  }

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
        <input
          className="SearchBox"
          onChange={this.onChangeSearchInput.bind(this)}
          placeholder="Search"
        />
        <div className={movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : "Loading"}
        </div>
      </Fragment>
    );
  }
}

export default App;
