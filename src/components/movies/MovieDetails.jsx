import React, { useEffect } from 'react';
//delayde - north felil
import { useDispatch, useSelector } from 'react-redux';
import MovieReviewsList from './MovieReviewsList';
import moviesActions from '../../store/actions/actions/moviesActions';

let imgURL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = props => {

    const { movie, movieReviews } = useSelector(state => ({
        movie: state.moviesReducer.movie,
        movieReviews: state.moviesReducer.movieReviews
    }));

    const dispatch = useDispatch();
    useEffect(() => {
        window.scrollTo(0, 0);
        const id = props.match.params.id;
        dispatch(moviesActions.getMovie(id));
        dispatch(moviesActions.getMovieReviews(id));
    }, [dispatch, props.match.params.id]);

    return (
        <div className="container">
            <main className="movie-container">
                <article className="movie-component is-centered">
                    <section className="pc-section-1">
                        <img src={`${imgURL}${movie.poster_path}`} alt="alt" />
                    </section>
                    <section className="pc-section-2">
                        <h2 className="pc-title">{movie.title}</h2>
                        <div className="pc-rating">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <span>{movie.vote_average}</span>
                        </div>
                        <p>{movie.overview}</p>
                        <small>Duration: {movie.runtime + "min"}</small>
                        <small>
                            Production companies:
                            {movie.production_companies && movie.production_companies.map((p, i) => {
                            return (
                                <span key={i} className="badge badge-dark">{p.name}</span>
                            );
                        })}
                        </small>
                        <small>
                            Genres:
                            {movie.genres && movie.genres.map((genre, i) => {
                            return (
                                <span key={i} className="badge badge-dark">{genre.name}</span>
                            );
                        })}
                        </small>
                    </section>
                </article>
            </main>
            <MovieReviewsList movieReviews={movieReviews} />
        </div>
    );
}

export default MovieDetails;