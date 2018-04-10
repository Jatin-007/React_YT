import React, { Component } from 'react';
import styles from '../styles/style.css';
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state= {term: ''};
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
    
    render () {
        return (
            <div className="search-bar">
                <input 
                value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                placeholder="Search for Videos"
                />
            </div>
        );
    }
}

export default SearchBar;