import React from 'react'
import "./BrendsStyle/Brends.scss"
// import { MDBCarouselItem, MDBCarousel } from 'mdb-react-ui-kit'
import brendOne from "./BrendsStyle/BrendsImg/Brend-1.png"
import brendTwo from "./BrendsStyle/BrendsImg/Brend-2.png"
import brendThree from "./BrendsStyle/BrendsImg/Brend-3.png"
import brendFour from "./BrendsStyle/BrendsImg/Brend-4.png"
import brendFive from "./BrendsStyle/BrendsImg/brend-5.png"
import brendSix from "./BrendsStyle/BrendsImg/brend-6.png"
import brendSeven from "./BrendsStyle/BrendsImg/brend-7.png"
import brendEight from "./BrendsStyle/BrendsImg/brend-8.png"
import brendNine from "./BrendsStyle/BrendsImg/brend-9.png"
import brendTen from "./BrendsStyle/BrendsImg/brend-10.png"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default class Responsive extends React.Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className='Brends container'>
                <h2> Лучшие <span>товары </span></h2>
                <p>От ведущих мировых брендов</p>
                <Slider {...settings} >
                    
                    <div>
                        <img src={brendOne} alt="No image" />
                    </div>
                    <div>
                        <img src={brendTwo} alt="No image" />
                    </div>
                    <div>
                        <img src={brendThree} alt="No image" />
                    </div>
                    <div>
                        <img src={brendFour} alt="No image" />
                    </div>
                    <div>
                        <img src={brendFive} alt="No image" />
                    </div>
                    <div>
                        <img src={brendSix} alt="No image" />
                    </div>
                    <div>
                        <img src={brendSeven} alt="No image" />
                    </div>
                    <div>
                        <img src={brendEight} alt="No image" />
                    </div>

                    <div>
                        <img src={brendNine} alt="No image" />
                    </div>
                    <div>
                        <img src={brendTen} alt="No image" />
                    </div>
                </Slider>
            </div>
        );
    }
}