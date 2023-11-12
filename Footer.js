import React from 'react';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="your-logo.png" alt="Platform Logo" />
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h3>Categories</h3>
              <ul>
                <li><a href="#">Development</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">IT & Software</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} Your Platform Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
