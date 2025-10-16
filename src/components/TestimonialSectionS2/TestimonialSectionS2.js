import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";

import Ts1 from '../../img/testimonial/client-2.png'
import Ts2 from '../../img/testimonial/client-3.png'
import Ts3 from '../../img/testimonial/client-4.png'
import Ts4 from '../../img/testimonial/client-5.png'
import Ts5 from '../../img/testimonial/client-6.png'
import Ts6 from '../../img/testimonial/line-shape.png'
import Ts7 from '../../img/testimonial/line-shape-2.png'
import Tclient1 from '../../img/testimonial/client-1.png'
import Tclient2 from '../../img/testimonial/client-2.png'
import Tclient3 from '../../img/testimonial/client-3.png'

SwiperCore.use([Navigation, Autoplay]);
const TestimonialSectionS2 = () => {
    useEffect(() => {

    }, []);

    return (
        <section className="testimonial-section-2 section-padding">
            <div className="client-1">
                <img src={Ts1} alt="img" />
            </div>
            <div className="client-2">
                <img src={Ts2} alt="img" />
            </div>
            <div className="client-3">
                <img src={Ts3} alt="img" />
            </div>
            <div className="client-4">
                <img src={Ts4} alt="img" />
            </div>
            <div className="client-5">
                <img src={Ts5} alt="img" />
            </div>
            <div className="line-shape">
                <img src={Ts6} alt="img" />
            </div>
            <div className="line-shape-2">
                <img src={Ts7} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">Digital printing Service</h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        What Our Client’s Says <br />
                        About Company
                    </h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-9">
                        <div className="swiper testimonial-slider-2">
                            <Swiper
                                spaceBetween={30}
                                speed={2000}
                                loop={true}
                                autoplay={{
                                    delay: 1000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: ".array-next",
                                    prevEl: ".array-prev",
                                }}
                            >
                                <SwiperSlide>
                                    <div className="testimonial-box-items">
                                        <div className="overlay-style"></div>
                                        <div className="overlay-style-2"></div>
                                        <div
                                            className="client-img bg-cover"
                                            style={{ backgroundImage: `url(${Tclient1})` }}
                                        ></div>
                                        <p>
                                            3Dmock completely changed the way my store looks. Before, I was using flat mockups that didn’t really capture attention. Now, every product moves, the fabric looks real, and customers actually interact more with my pages. My conversion rate jumped almost 20% after adding animated mockups!                                        </p>
                                        <div className="client-content">
                                            <h4>MAlex M</h4>
                                            <span>Founder of Driftwear</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-box-items">
                                        <div className="overlay-style"></div>
                                        <div className="overlay-style-2"></div>
                                        <div
                                            className="client-img bg-cover"
                                            style={{ backgroundImage: `url(${Tclient2})` }}
                                        ></div>
                                        <p>
                                            As a POD seller, I’ve tried countless mockup tools, but nothing comes close to 3Dmock. It saves me hours every week, and the quality of the animation is top-tier. The models look so realistic that people often ask if we shot real videos. It’s become a must-have in our workflow.
                                        </p>
                                        <div className="client-content">
                                            <h4>Sarah J</h4>
                                            <span>WOwner of TeeHaus</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-box-items">
                                        <div className="overlay-style"></div>
                                        <div className="overlay-style-2"></div>
                                        <div
                                            className="client-img bg-cover"
                                            style={{ backgroundImage: `url(${Tclient3})` }}
                                        ></div>
                                        <p>
                                            I build Shopify stores for clients, and 3Dmock instantly elevates every project. The integration is smooth, the render quality is insane, and it gives stores a premium, modern feel. Every time I show a demo, the client is impressed. It’s a small tool that makes a huge impact.                                        </p>
                                        <div className="client-content">
                                            <h4> Liam T</h4>
                                            <span>Shopify Expert</span>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-box-items">
                                        <div className="overlay-style"></div>
                                        <div className="overlay-style-2"></div>
                                        <div
                                            className="client-img bg-cover"
                                            style={{ backgroundImage: `url(${Tclient3})` }}
                                        ></div>
                                        <p>
                                            We started using 3Dmock for product ads, and the results were unbelievable. Our CTR doubled in the first week. The animated mockups look cinematic — they grab attention in seconds. It’s the kind of visual upgrade that directly impacts performance.                                                                                </p>
                                        <div className="client-content">
                                            <h4> Lisa R</h4>
                                            <span>Creative Director at BoldAds Agency</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-box-items">
                                        <div className="overlay-style"></div>
                                        <div className="overlay-style-2"></div>
                                        <div
                                            className="client-img bg-cover"
                                            style={{ backgroundImage: `url(${Tclient3})` }}
                                        ></div>
                                        <p>
                                            We handle dozens of apparel designs daily, and 3Dmock simplified everything. Instead of generating static mockups one by one, we upload a design and get dynamic versions for all color variants automatically. It’s fast, consistent, and the realism is unmatched                                       
                                        </p>
                                        <div className="client-content">
                                            <h4> Daniel P</h4>
                                            <span> Co-founder of InkedLab</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                            <div className="array-button justify-content-center">
                                <button className="array-prev">
                                    <i className="fa-regular fa-arrow-left-long"></i>
                                </button>
                                <button className="array-next">
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSectionS2;



