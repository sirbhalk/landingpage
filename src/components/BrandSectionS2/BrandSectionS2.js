import React, { useEffect } from "react";
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';

import logo1 from '../../img/brand/1.png'
import logo2 from '../../img/brand/2.png'
import logo3 from '../../img/brand/3.png'
import logo4 from '../../img/brand/4.png'
import logo5 from '../../img/brand/5.png'
import logo6 from '../../img/brand/6.png'
import logo7 from '../../img/brand/brand-logo-17.png'

const BrandSectionS2 = () => {

    useEffect(() => {
        new Swiper(".brand-slider-3", {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1399: {
                    slidesPerView: 7,
                },
                1199: {
                    slidesPerView: 6,
                },
                991: {
                    slidesPerView: 5,
                },
                767: {
                    slidesPerView: 4,
                },
                575: {
                    slidesPerView: 3,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    
    }, []);



    return (


        <div className="brand-section">
            <div className="brand-wrapper-3">
                <div className="swiper brand-slider-3">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo1} alt="Brand logo 1" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo1} alt="Brand logo 2" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo2} alt="Brand logo 3" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo3} alt="Brand logo 4" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo4} alt="Brand logo 5" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo5} alt="Brand logo 6" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo6} alt="Brand logo 7" />
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="brand-image">
                                <img src={logo7} alt="Brand logo 8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandSectionS2;