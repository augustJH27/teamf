import React, { Component } from 'react';
import axios from 'axios';

//Components
import MovieItem from '../movies/MovieItem';

class SearchMovie extends Component {

    state = {
        resultMovies: [],
        searchInputText: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let apiKey = '26b6f99577e56d992ffe47051578e1ac';
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.state.searchInputText}&page=1&include_adult=false`)
            .then(res => {
                this.setState({ resultMovies: res.data.results });
            })
    }

    render() {
        const { resultMovies } = this.state; 
        return (
            <div className="container">
                <div className="text-center">
                    <br />
                    <h4>Search a movie</h4>
                    <form onSubmit={ this.handleSubmit }>
                        <input
                            type="text"
                            className="search-input-text"
                            name="searchInputText"
                            id="searchInputText"
                            placeholder="Search"
                            onChange={this.handleChange}
                        />
                    </form>
                </div>
                <div className="search-result-container pt-4">
                    {
                    resultMovies && resultMovies.map(movie => {
                        return(
                            <div className="search-result-item text-center" key={movie.id}>
                                <MovieItem movie={movie} />
                                </div>
                                );
                            })
                            }
                            </div>
                            </div>
                            );
                        }
                    };

export default SearchMovie;