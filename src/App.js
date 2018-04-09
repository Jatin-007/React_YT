import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search'; 
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyCazvzWGihtmyg5_2usra_y7SEgusLZ3zI'; // Youtube API key

class App extends Component {

    constructor(props){
        super (props);

        this.state = { 
            videos: [],
            selectedVideo: null
        };
    
        YTSearch({key: API_KEY, term: 'nissan gtr'}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }

    render () {
        return (
            <div>
                <SearchBar />
                    <VideoDetail video = {this.state.selectedVideo}/>
                
                <VideoList 
                onVideoSelect = { selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
                />

            </div>
        );
    }
}

export default App;