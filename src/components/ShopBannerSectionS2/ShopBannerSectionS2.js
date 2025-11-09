import React from 'react';
import { Link } from 'react-router-dom';

import SB1 from '../../img/shop-banner/t-shirt.png'
import SB2 from '../../img/shop-banner/flower.png'
import SB3 from '../../img/icon/16.svg'
import SB4 from '../../img/shop-banner/gift-box.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ShopBannerSectionS2 = () => {
    return (
        <section className="shop-banner-section-2 fix">
            <div className="row g-4">
                <div className="col-xl-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.1s">
                    <div className="shop-banner-items-2">
                        <div className="content">
                            <p className="wow fadeInUp">Wear your brand with pride</p>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Hoddie custom print</h2>
                            <h3 className="wow fadeInUp" data-wow-delay=".5s"><span>Starting</span> 560.99</h3>
                            <Link onClick={ClickHandler} to="/shop" className="theme-btn wow fadeInUp" data-wow-delay=".7s">Custom print now</Link>
                        </div>
                        <div className="thumb wow fadeInUp" data-wow-delay=".3s">
                            <img src={SB1} alt="Custom hoodie mockup" />
                            <div className="flower-shape">
                                <img src={SB2} alt="Decorative flower graphic" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s">
                    <div className="shop-banner-items-2 style-2">
                        <div className="content">
                            <p className="wow fadeInUp">Wear your brand with pride</p>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">Custom Packaging</h2>
                            <ul className="wow fadeInUp" data-wow-delay=".5s">
                                <li>
                                    <span><img src={SB3} alt="Included feature icon" /></span>
                                    Premium Quality Custom boxes
                                </li>
                                <li>
                                    <span><img src={SB3} alt="Included feature icon" /></span>
                                    Free Standard Shipping
                                </li>
                                <li>
                                    <span><img src={SB3} alt="Included feature icon" /></span>
                                    Unnique Design & custom cloths
                                </li>
                            </ul>
                        </div>
                        <div className="thumb-2">
                            <Link onClick={ClickHandler} to="/shop">
                                <img src={SB4} alt="Custom packaging gift box" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopBannerSectionS2;