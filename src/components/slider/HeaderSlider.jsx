import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2000,
        autoplay: true,
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='slider'>
            <div className="container">
                <div className="slider-content overflow-x-hidden overflow-y-hidden">
                    <Slider {...settings}>
                        <div className="slider-item">
                            <img src="https://picsum.photos/1280/400" alt="" />
                        </div>
                        <div className="slider-item">
                            <img src="https://picsum.photos/1280/400" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default HeaderSlider
