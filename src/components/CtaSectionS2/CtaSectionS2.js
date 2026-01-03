import React from 'react';
import { Link } from 'react-router-dom';
import Mq2 from '../../img/cta-bg-2.jpg'
import Mq3 from '../../img/print-box.png'
import Mq4 from '../../img/hand-bag.png'
import Mq5 from '../../img/cta-sticker.png'
// import Mq6 from '../../img/cta-t-shirt.png'
import Mq6 from '../../img/cta-t-shirt.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const CtaSectionS2 = () => {
    return (
        <section className="cta-section-3 m-5">
            {/* <div className="mycustom-marque style-3">
                <div className="scrolling-wrap">
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                    <div className="comm cmn-style-2">
                        <div className="cmn-textslide">Design.</div>
                        <div className="cmn-textslide"> Brand.</div>
                        <div className="cmn-textslide color-3">Quality</div>
                        <div><img src={Mq1} alt="img" /></div>
                    </div>
                </div>
            </div> */}
            <div className="container">
                <div className="cta-wrapper-2 bg-cover"  style={{ backgroundImage: `url(${Mq2})` }}>
                    <div className="prite-box float-bob-y">
                        <img src={Mq3} alt="Printed product display" />
                    </div>
                    <div className="hand-bag float-bob-x">
                        <img src={Mq4} alt="Promotional hand bag" />
                    </div>
                    <div className="cta-sticker float-bob-y">
                        <img src={Mq5} alt="Partner program sticker" />
                    </div>
                    <div className="cta-content">
                        <div className="section-title">
                            <h6 className="bg-white wow fadeInUp">PARTNER REWARDS PROGRAM</h6>
                            <h2 className="text-white split-text right">
                                BECOME A 3DMOCK PARTNER <br/>AND EARD 30% COMMISSION
                            </h2>
                        </div>
                        <div className="cta-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            <Link onClick={ClickHandler} to="/pages/affiliate-program" className="theme-btn"> OPEN A PARTNER ACCOUNT</Link>
                        </div>
                    </div>
                    <div className="cta-image">
                        <img src={Mq6} alt="3D mock partner t-shirt" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSectionS2;