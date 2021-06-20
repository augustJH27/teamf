import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MoviesCarousel = props => {
    return (
        <Carousel
            showDots={false}
            swipeable
            responsive={props.responsiveConfig}
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container-with-dots"
            draggable
            focusOnSelect={false}
            infinite
            slidesToSlide={1}
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
        >
            {props.children}
        </Carousel>
    );
}

export default MoviesCarousel;