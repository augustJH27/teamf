import {
    GET_POPULAR_MOVIES,
    GET_TOP_MOVIES,
    GET_MOVIE,
    GET_MOVIE_REVIEWS,
    GET_UPCOMING_MOVIES
} from "./actionTypes";

const movieDispatchers = {
    getPopularMoviesSuccess: popularMovies => {
        return {
            type: GET_POPULAR_MOVIES,
            payload: {
                popularMovies
            }
        };
    },
    
    getMovieSuccess: movie => {
        return {
            type: GET_MOVIE,
            payload: {
                movie
            }
        };
    },
    
    getTopMoviesSuccess: topMovies => {
        return {
            type: GET_TOP_MOVIES,
            payload: {
                topMovies
            }
        };
    },
    
    getMoviesReviewsSuccess: movieReviews => {
        return {
            type: GET_MOVIE_REVIEWS,
            payload: {
                movieReviews
            }
        };
    },
    
    getUpcomingMoviesSuccess: upcomingMovies => {
        return {
            type: GET_UPCOMING_MOVIES,
            payload: {
                upcomingMovies
            }
        };
    }
};

export default movieDispatchers;