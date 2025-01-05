import React from 'react';
import facebook from '../../logo/facebook.png';
import instagram from '../../logo/instagram.png';
import pin from '../../logo/pin.png';
import tweet from '../../logo/tweet.png';

const AboutPage = () => (
    <div className="about-page-container container">
        <div className="about-page-component">
            <h2>About MilanTV</h2>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </p>
            <div className="copyright">
                <p>Copyright © 2000-202 MilanTV. All Rights Reserved</p>
            </div>
            <div className="follow-us-component component">
            <div className="follow-us-component">
            <h2>Follow Us On:</h2>
            <div className="footer_social">
            <img
            className="footer__media__social-media"
            src={facebook}
            alt="facebook"
            width="24px"
            height="24px"
            ></img>
            <img
            className="footer__media__social-media"
            src={instagram}
            alt="instagram"
            width="24px"
            height="24px"
            ></img>
            <img
            className="footer__media__social-media"
            src={pin}
            alt="pin"
            width="24px"
            height="24px"
            ></img>
            <img
            className="footer__media__social-media"
            src={tweet}
            alt="tweet"
            width="24px"
            height="24px"
            ></img>
            </div>
            </div>
            </div>
        </div>
    </div>
);

export default AboutPage;