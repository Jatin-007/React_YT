import React, { Component } from 'react';

class SearchBar extends Component {
    
    onInputChange(event) {
        console.log(event.target.value);
    }
    
    render () {
        return (
            <div>
                <input onChange={this.onInputChange}/>
            </div>
        )
    }
}

export default SearchBar;