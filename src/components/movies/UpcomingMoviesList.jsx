import React from 'react';
import MovieItem from './MovieItem';
import MoviesCarousel from './MoviesCarousel';
import { responsive } from '../../responsive';

const UpcomingMoviesList = ({ upcomingMovies }) => (
    <div>
        <h2><b>Upcoming Movies</b></h2>
        <MoviesCarousel responsiveConfig={responsive}>
            {upcomingMovies && upcomingMovies.map(movie => {
                return (
                    <MovieItem key={movie.id} movie={movie} />
                )
            })}
        </MoviesCarousel>
    </div>
);

export default UpcomingMoviesList;