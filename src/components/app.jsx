import React, { Component } from 'react';
import giphy from 'giphy-api'

import SearchBar from './search_bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif_list.jsx';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  search = (query) => {
    giphy("SI9zQNGQHZwxnv89kOUTUSSGXmVElZEe").search({
      q: query,
        rating: 'g',
        limit: 10
    }, (err, result) => {
        this.setState({
          gifs: result.data
        });
    });
  }

  selectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }


  render () {
    // const gifs = [
    //   {id: "l0unkiodQqmA3lPO5e"},
    //   {id: "UTRSC9VGMMG8tHRxcr"}
    // ]
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectedGif={this.selectedGif}/>
        </div>
      </div>
    );
  }
}

export default App;
