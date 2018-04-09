import React, { Component } from 'react';
import styles from '../styles/style.css';
class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state= {term: ''};
    }


    onInputChange(event) {
        console.log(event.target.value);
    }
    
    render () {
        return (
            <div className="search-bar">
                <input 
                onChange={event => this.setState({term: event.target.value})}/>              
            </div>
        );
    }
}

export default SearchBar;