import React from 'react';

//Components
import MovieReviewItem from './MovieReviewItem';

const MovieReviewsList = ({ movieReviews }) => {
    return (
        <div className="review-container" >
            {movieReviews && (
                <div>
                    <h3>Reviews</h3>
                    <div className="review-component">
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