import React from 'react';
import { Link } from 'react-router-dom';
let imgURL = 'https://image.tmdb.org/t/p/w500';

const MovieItem = ({ movie }) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Link to={`/milan-tv/${movie.id}`}>
                <img className="carousel-image" src={`${imgURL}${movie.poster_path}`} alt={movie.title} />
            </Link>
        </div>
    );
}

export default MovieItem;