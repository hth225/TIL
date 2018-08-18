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
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster:
              "https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/09/The-Matrix-Revolutions-Hugo-Weaving-600x400.jpg"
          },
          {
            title: "Full Metal Jacket",
            poster:
              "http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/full-metal-jacket-hed.jpg?itok=z83XGyRg&resize=1100x1100"
          },
          {
            title: "OldBoy",
            poster:
              "http://www.gablescinema.com/media/filmassets/slides/oldboy_5.jpg"
          },
          {
            title: "Star Wars",
            poster:
              "https://lumiere-a.akamaihd.net/v1/images/swbfii_keyart_clean_final_flat_8d03e069.jpeg?region=0%2C69%2C1024%2C512&width=480"
          },
          {
            title: "Transporter 2",
            poster:
              "https://i.pinimg.com/originals/c6/09/0f/c6090f29a3ce4b0b013522c85cca8704.jpg"
          }
        ]
      });
    }, 2000);
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return (<Movie title={movie.title} poster={movie.poster} key={index} />);
    });
    return (movies);
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
