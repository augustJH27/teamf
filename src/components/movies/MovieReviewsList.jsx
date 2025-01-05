import React from 'react';

//Components
import MovieReviewItem from './MovieReviewItem';

const MovieReviewsList = ({ movieReviews }) => {
    return (
        <div className="review-container" >
            {movieReviews && (
                <div>
                    <div className="review-component">
                        <h3>Reviews</h3>
                        {movieReviews ? movieReviews.map(review => {
                            return (
                                <div key={review.id}>
                                    <MovieReviewItem review={review} />
                                </div>
                            )
                        }) : null}
                    </div>
                </div>
            ) 
            }
        </div>
    )
};

export default MovieReviewsList;