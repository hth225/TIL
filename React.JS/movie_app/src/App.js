import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'


const movies = [
  {
    title: 'Matrix',
    poster: 'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/09/The-Matrix-Revolutions-Hugo-Weaving-600x400.jpg',
  },
  {
    title: 'Full Metal Jacket',
    poster: 'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/full-metal-jacket-hed.jpg?itok=z83XGyRg&resize=1100x1100',
  },
  {
    title: 'OldBoy',
    poster:'http://www.gablescinema.com/media/filmassets/slides/oldboy_5.jpg',
  },
  {
    title: 'Star Wars',
    poster:'https://lumiere-a.akamaihd.net/v1/images/swbfii_keyart_clean_final_flat_8d03e069.jpeg?region=0%2C69%2C1024%2C512&width=480'
  },

]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;
