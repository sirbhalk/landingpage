import React from 'react';
import { Link } from 'react-router-dom';

import lineshape from '../../img/line-3.png'
import ratting from '../../img/ratting-shape.png'
import brush from '../../img/brush-front.png'
import demand from '../../img/demand-shape.png'
import homedemand from '../../img/home-demand.png'
import custom from '../../img/custom-print-img.png'
import lineab1 from '../../img/icon/09.svg'
import lineab2 from '../../img/icon/10.svg'
import lineab3 from '../../img/icon/16.svg'

const about3 = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className="product-demand-section fix section-padding">
            <div className="line-shape">
                <img src={lineshape} alt="Decorative line shape" />
            </div>
            <div className="container">
                <div className="product-demand-wrapper">
                    <div className="row g-4">
                        <div className="col-xl-5 col-lg-6">
                            <div className="product-demand-image">
                                <img src={custom} alt="Custom printable product" className="border-radius-22 wow img-custom-anim-top" />
                                <div className="ratting-shape">
                                    <img src={ratting} alt="Customer rating graphic" />
                                </div>
                                <div className="brush-shape">
                                    <img src={brush} alt="Brush stroke accent" />
                                </div>
                                <div className="demand-shape float-bob-y">
                                    <img src={demand} alt="Demand highlight shape" />
                                </div>
                                <div className="home-demand-shape float-bob-x">
                                    <img src={homedemand} alt="Home demand shape" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="product-demand-content">
                                <div className="section-title">
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Every Mockup Deserves Realistic Motion
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Pick a product, add your design, and see it move with realistic textures and animations<br />
                                </p>
                                <div className="icon-wrapper d-flex flex-nowrap gap-4">
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src={lineab1} alt="Custom design icon" />
                                        </div>
                                        <h4>
                                            Custom design
                                        </h4>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <img src={lineab2} alt="Realistic textures icon" />
                                        </div>
                                        <h4>
                                            Realistic Textures

                                        </h4>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                                        <div className="icon">
                                            <img src={lineab1} alt="Dynamic animations icon" />
                                        </div>
                                        <h4>
                                            Dynamic Animations

                                        </h4>
                                    </div>
                                    <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                                        <div className="icon">
                                            <img src={lineab2} alt="High-quality exports icon" />
                                        </div>
                                        <h4>
                                            High-Quality Exports

                                        </h4>
                                    </div>
                                </div>
                                <ul className="wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <img src={lineab3} alt="Checklist icon" />
                                        Printing programs tailored to your company needs
                                    </li>
                                    <li>
                                        <img src={lineab3} alt="Checklist icon" />
                                        Large paper & stock selection & Unique Print
                                    </li>
                                </ul>
                                <Link onClick={ClickHandler} to="/about" className="theme-btn wow fadeInUp" data-wow-delay=".5s">more about us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default about3;