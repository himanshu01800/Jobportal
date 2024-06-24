import React from 'react';
import Navbar from './Navbar';
import firstimg from '../images/first.jpg';
import secimg from '../images/sec.jpg';
import third from '../images/third.jpg';
import './Home.css'; // Make sure to import the CSS file

const Home = () => {
  return (
    <>
      <div className='Cont'>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img src={firstimg} className="d-block w-100 imgg" alt="..." />
              <div className="carousel-caption">
               <h1>Your Dream</h1>
               <h1>Our Work</h1>
                <h1>Find Best <span className="highlight">Opportunity</span></h1>
                <h1>With Us</h1>
              
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img src={secimg} className="d-block w-100 imgg" alt="..." />
              <div className="carousel-caption">
              <h1>Your Dream</h1>
               <h1>Our Work</h1>
                <h1>Find Best <span className="highlight">Opportunity</span></h1>
                <h1>With Us</h1>
              
              </div>
            </div>
            <div className="carousel-item">
              <img src={third} className="d-block w-100 imgg" alt="..." />
              <div className="carousel-caption">
              <h1>Your Dream</h1>
               <h1>Our Work</h1>
                <h1>Find Best <span className="highlight">Opportunity</span></h1>
                <h1>With Us</h1>
              
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
