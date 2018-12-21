import './App.css';
import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import VideoList from '../VideoList/VideoList';
import VideoDetail from '../VideoDetail/VideoDetail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyAaK0-QwA48zg5EgLkK0hAarLWed45QrPs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('');
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term }, videos => {
      this.setState({
        videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);
    return (
      <Fragment>
        <header>
          <SearchBar onSearchTermSubmit={videoSearch} />
        </header>
        <main>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </main>
      </Fragment>
    );
  }
}
export default App;
