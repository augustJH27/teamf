import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviesActions from '../../store/actions/actions/moviesActions';
import MoviesCarousel from './MoviesCarousel';
import MovieItem from './MovieItem';
import { responsive } from '../../responsive';

const TopMoviesList = () => {

    const topMovies = useSelector(state => state.moviesReducer.topMovies);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(moviesActions.getTopMovies()); 
    }, [dispatch]);

    return (
        <div>
            <h2><b>Top Ranked Movies</b></h2>
            <MoviesCarousel responsiveConfig={responsive}>
                {topMovies && topMovies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    )
                })}
            </MoviesCarousel>
        </div>
    );
}

export default TopMoviesList;