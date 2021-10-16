import React, { Component } from 'react';
import banner from '../image/banner.jpg';
import banner2 from '../image/banner2.jpg';


class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={banner} class="d-block w-100" alt="course"/>
                    </div>
                    <div class="carousel-item">
                    <img src={banner2} class="d-block w-100" alt="course"/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        );
    }
}

export default Carousel;