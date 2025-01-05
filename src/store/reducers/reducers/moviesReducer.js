import {
    GET_MOVIE,
    GET_MOVIE_REVIEWS,
    GET_POPULAR_MOVIES,
    GET_TOP_MOVIES,
    GET_UPCOMING_MOVIES
} from '../../actions/actions/actionTypes';

// Initial state
const initialState = {
    popularMovies: [],
    topMovies: [],
    upcomingMovies: [],
    movieReviews: [],
    movie: {}
};

// Reducer function
export default function movieReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MOVIE:
            return { ...state, movie: payload.movie };

        case GET_MOVIE_REVIEWS:
            return { ...state, movieReviews: payload.movieReviews };

        case GET_POPULAR_MOVIES:
            return { ...state, popularMovies: payload.popularMovies };

        case GET_TOP_MOVIES:
            return { ...state, topMovies: payload.topMovies };

        case GET_UPCOMING_MOVIES:
            return { ...state, upcomingMovies: payload.upcomingMovies };

        default:
            return state;
    }
}
