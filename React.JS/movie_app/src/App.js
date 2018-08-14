import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

const movieTitles = [
  'Matrix',
  'FMJ',
  'OldBoy',
  'Starwars'
]

const movieImages = [
  'https://images.amcnetworks.com/ifc.com/wp-content/uploads/2016/09/The-Matrix-Revolutions-Hugo-Weaving-600x400.jpg',
  'http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/full-metal-jacket-hed.jpg?itok=z83XGyRg&resize=1100x1100',
  'http://www.gablescinema.com/media/filmassets/slides/oldboy_5.jpg',
  'https://lumiere-a.akamaihd.net/v1/images/swbfii_keyart_clean_final_flat_8d03e069.jpeg?region=0%2C69%2C1024%2C512&width=480'

]

const movies = [
  {
    title: 'Matrix',
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;
