import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const Carousel = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            {/* Carousel Indicators */}
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                ></button>
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                ></button>
            </div>

            {/* Carousel Items */}
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src="src\assets\imgs\img2.jpg"
                        className="d-block w-100"
                        alt="Slide 1"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First Slide Label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="src\assets\imgs\img3.jpg"
                        className="d-block w-100"
                        alt="Slide 2"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second Slide Label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src="src\assets\imgs\img4.jpg"
                        className="d-block w-100"
                        alt="Slide 3"
                    />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third Slide Label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>

            {/* Carousel Controls */}
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;