import React from 'react';

const MovieReviewItem = ({ review }) => {
    return (
        <div>
            <p>{review.content}</p>
            <small> - {review.author}</small>
            <hr />
        </div>
    );
}

export default MovieReviewItem;