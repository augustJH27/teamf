import { 
    GET_POPULAR_MOVIES,
    GET_TOP_MOVIES,
    GET_MOVIE,
    GET_MOVIE_REVIEWS,
    GET_UPCOMING_MOVIES
} from '../../actions/actions/actionTypes';


/* Initial state from store */
const initState = {
    popularMovies: [],
    topMovies: [],
    upcomingMovies: [],
    movieReviews: [],
    movie: {}
}

export default function (state = initState, action) {
    switch (action.type) {
        case GET_POPULAR_MOVIES:
            return { ...state, popularMovies: action.payload.popularMovies }
        case GET_TOP_MOVIES:
            return { ...state, topMovies: action.payload.topMovies }
        case GET_MOVIE:
            return { ...state, movie: action.payload.movie }
        case GET_UPCOMING_MOVIES:
            return { ...state, upcomingMovies: action.payload.upcomingMovies }
        case GET_MOVIE_REVIEWS:
            return { ...state, movieReviews: action.payload.movieReviews }
        /* Default return  */     
        default:
            return state;
    }
};

//banyak cacing di atas, nggak tahu kenapa