import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moviesActions from '../../store/actions/actions/moviesActions';
import MovieItem from './MovieItem';
import MoviesCarousel from './MoviesCarousel';
import { responsive } from '../../responsive';

const PopularMoviesList = () => {

    const popularMovies = useSelector(state => state.moviesReducer.popularMovies);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(moviesActions.getPopularMovies()); 
    }, [dispatch]);

    return (
        <div>
            <h2><b>Popular Movies</b></h2>
            <MoviesCarousel responsiveConfig={responsive}>
                {popularMovies && popularMovies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                    )
                })}
            </MoviesCarousel>
        </div>
    );
}

export default PopularMoviesList;