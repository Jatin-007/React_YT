import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search'; 
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyCazvzWGihtmyg5_2usra_y7SEgusLZ3zI'; // Youtube API key

class App extends Component {

    constructor(props){
        super (props);

        this.state = { videos: [] };
    
        YTSearch({key: API_KEY, term: 'real madrid'}, (videos) => {
          this.setState({ videos });
        });
    }

    render () {
        
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;