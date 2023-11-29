// import React from 'react';

import "./sample.css"

const Sample = () => {
    return (
        <div>


            <div id="twoSidedCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {/* <!-- Left side items --> */}
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="path/to/your/image1.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="path/to/your/image2.jpg" alt="Second slide" />
                    </div>
                    {/* <!-- Right side items --> */}
                    <div className="carousel-item">
                        <img className="d-block w-100" src="path/to/your/image3.jpg" alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="path/to/your/image4.jpg" alt="Fourth slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#twoSidedCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#twoSidedCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
};

export default Sample;