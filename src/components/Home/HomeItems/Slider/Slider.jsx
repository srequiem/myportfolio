import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./Slider.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";


const IMAGES = [
    { id: 1, path: '/Deezer7.png', width: '216px' },
    { id: 2, path: '/Deezer9.png', width: '465px' },
    { id: 3, path: '/Deezer10.png', width: '904px' },
    { id: 4, path: '/Deezer4.png', width: '216px' },
    { id: 5, path: '/Deezer2.png', width: '530px' },
    { id: 6, path: '/Deezer8.png', width: '752px' },
    { id: 7, path: '/Deezer3.png', width: '216px' },
    { id: 8, path: '/Deezer5.png', width: '216px' },

]

const Slider = () => {

    return (
        <Swiper
            loop={true}
            loopFillGroupWithBlank={true}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 10000,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="slider"
        >
            {IMAGES.map(i => {
                return (
                    <SwiperSlide className='slider-item' key={i.id}>
                        <img src={i.path} id={i.id} className="slider-img" width={i.width} />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
};

export default Slider;
