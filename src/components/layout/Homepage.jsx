import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MoviesCarousel from '../movies/MoviesCarousel';
import { mainResponsive } from '../../mainResponsive';
import moviesActions from '../../store/actions/actions/moviesActions';
import { useDispatch, useSelector } from 'react-redux';

//Components
import PopularMovieList from '../movies/PopularMoviesList';
import TopMoviesList from '../movies/TopMoviesList';
import UpcomingMoviesList from '../movies/UpcomingMoviesList';
let imgURL = 'https://image.tmdb.org/t/p/original';

const Homepage = () => {

    const upcomingMovies = useSelector(state => state.moviesReducer.upcomingMovies);
    const dispatch = useDispatch();
    useEffect(() => { 
        dispatch(moviesActions.getUpcomingMovies()); 
    }, [dispatch]);

    return (
        <div className="main-carousel-container">
            <MoviesCarousel responsiveConfig={mainResponsive}>
                {upcomingMovies && upcomingMovies.map(movie => {
                    return (
                        <div key={movie.id} className="main-element-container">
                            <img style={{ width: '100%' }} key={movie.id} alt={movie.title} src={imgURL + movie.backdrop_path} />
                            <div className="top-right">
                                <div className="top-right-container">
                                    <h1>{movie.title}</h1>
                                    <p>{movie.overview}</p>
                                    <div className="text-center">
                                        <Link to={`/milan-tv/${movie.id}`}>
                                            See details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </MoviesCarousel>
            <div className="container main-container">
                <PopularMovieList />
                <br />
                <TopMoviesList />
                <br />
                <UpcomingMoviesList upcomingMovies={upcomingMovies} />
            </div>
        </div>
    );
}

export default Homepage;