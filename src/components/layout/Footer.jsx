import React from "react";
import "../../styles/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>There’s even more to watch.</h2>
        <p>
          MilanTV has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning MilanTV originals, and more. Watch as much
          as you want, anytime you want.
        </p>
        <button className="join-btn">
          <Link to="/account">Join Now</Link>
        </button>
      </div>
      <div className="footer-bottom">
        <p>
          Read about Milan TV shows and movies and watch bonus videos on
          milantv.com.
        </p>
        <div className="footer-links">
          <ul>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on MilanTV</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
          <ul>
            <li>Account</li>
            <li>Redeem Gift Cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Buy Gift Cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
