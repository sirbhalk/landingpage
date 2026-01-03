import React, { useEffect, useState } from 'react';
import PS1 from '../../img/pricing-shape.png'
import PS2 from '../../img/pricing-line.png'
import PS3 from '../../img/circle.png'
import PS4 from '../../img/icon/03.svg'
import PS5 from '../../img/pricing-tag.png'
import { Link } from 'react-router-dom';
import PaymentWrapper from '../Payment/PaymentForm';
import axios from 'axios';
import { environment } from '../../config/environment';
import '../Payment/PaymentForm.css';

const PricingSection = () => {
    const [activeTab, setActiveTab] = useState('Tab1');
    const [showPayment, setShowPayment] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checkingAuth, setCheckingAuth] = useState(true);

    const openTab = (tabName) => {
        setActiveTab(tabName);
    };
    
    useEffect(() => {
        openTab('Tab1');
        checkAuth();
    }, []); 

    const checkAuth = async () => {
        try {
            const token = document.cookie
                .split('; ')
                .find(row => row.startsWith('auth_token='))
                ?.split('=')[1];
            
            if (token) {
                const { data } = await axios.get(
                    `${environment.apiUrl}/api/auth/profile`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                        withCredentials: true
                    }
                );
                setIsAuthenticated(!!data.user);
            } else {
                setIsAuthenticated(false);
            }
        } catch (err) {
            setIsAuthenticated(false);
        } finally {
            setCheckingAuth(false);
        }
    };

    const handlePlanClick = (planType, priceId, planName) => {
        if (checkingAuth) return;
        
        if (!isAuthenticated) {
            // Redirect to login or show login modal
            window.location.href = '/login';
            return;
        }
        
        setSelectedPlan({ planType, priceId, planName });
        setShowPayment(true);
    };

    const handlePaymentSuccess = () => {
        setShowPayment(false);
        setSelectedPlan(null);
        alert('Payment successful! Your subscription is now active.');
        window.location.reload();
    };

    const handlePaymentCancel = () => {
        setShowPayment(false);
        setSelectedPlan(null);
    };

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };


    return (
        <section className="pricing-section section-padding pt-0">
            <div className="shape-image float-bob-y">
                <img src={PS1} alt="img" />
            </div>
            <div className="shape-image-2">
                <img src={PS2} alt="img" />
            </div>
            <div className="circle-shape">
                <img src={PS3} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6>Digital printing Service</h6>
                    <h2>
                        Our Populer Pricing Plan<br />
                        By Company
                    </h2>
                </div>
                <div className="pricing-tab-header">
                    <ul className="nav">
                        <li className="nav-item"  >
                            <button className={`nav-link ${activeTab === 'Tab1' ? 'active' : ''}`} onClick={() => openTab('Tab1')} >
                                Monthly
                            </button>
                        </li>
                        <li className="nav-item"  >
                            <button className={`nav-link ${activeTab === 'Tab2' ? 'active' : ''}`} onClick={() => openTab('Tab2')}>
                                Yearly
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="Tab1" style={{ display: activeTab === 'Tab1' ? 'block' : 'none' }}>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="icon" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                            <img src={PS4} alt="img" />
                                            <span style={{fontSize: '30px', color: '#6865FF', fontWeight: 'bold'}}>Free Plan</span>
                                        </div>
                                        <h3>$0 / forever</h3>
                                        <span>Start creating 3D mockups, no credit card required</span>
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <Link onClick={ClickHandler} to="/contact" className="theme-btn">
                                                <span className="theme-effect">
                                                    {/* <span className="effect-1">$0 / forever</span> */}
                                                    <span className="effect-1">Start for Free</span>
                                                    <span className="effect-1">Start for Free</span>
                                                </span>
                                            </Link>
                                        </div>
                                    → Perfect for testing the basics before upgrading

                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i> Create 3D mockups</li>
                                        <li><i className="fa-solid fa-circle-check"></i> adjust color and texture</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Adjust format and size</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Export static HD images (no animations)</li>
                                        {/* <li><i className="fa-solid fa-circle-check"></i> Updates via dashboard & slack</li>
                                        <li><i className="fa-solid fa-circle-check"></i> 50k design & prints</li> */}
                                    </ul>
                                    {/* → Perfect for testing the basics before upgrading */}
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="pricing-box-items active">
                                    <div className="pricing-tag">
                                        <img src={PS5} alt="img" />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="icon" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                            <img src={PS4} alt="img" />
                                            <span style={{fontSize: '30px', color: '#6865FF', fontWeight: 'bold'}}>Trial Plan</span>
                                        </div>
                                        <h3>$7.99 / week</h3>
                                        {/* <h3>Trial Plan (Recommended)</h3> */}
                                        <span>Best value for power users & studios (auto-renews to $29.99/month after 7 days)</span> 
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <button 
                                                onClick={() => handlePlanClick('weekly', process.env.REACT_APP_STRIPE_PRICE_WEEKLY, 'Weekly Plan - $7.99')}
                                                className="theme-btn"
                                                style={{ border: 'none', background: 'transparent', width: '100%', cursor: 'pointer' }}
                                            >
                                                <span className="theme-effect">
                                                    <span className="effect-1">Start Pro Plan</span>
                                                    <span className="effect-1">Start Pro Plan</span>
                                                </span>
                                            </button>
                                        </div>
                                        <span style={{fontSize: '14px', color: '#ffffff', fontWeight: 'bold'}}>→ Cancel anytime before the trial ends to avoid upgrade</span>

                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i>  Everything included in free plan</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Full access to 3D animations</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Export MP4, GIF, 3Dmodel</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Realistic textures & HD lighting</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Custom Image backgrounds</li>
                                        {/* <li><i className="fa-solid fa-circle-check"></i> 50k design & prints</li> */}
                                    </ul>
                                    {/* <span style={{fontSize: '14px', color: '#ffffff', fontWeight: 'bold'}}>→ Cancel anytime before the trial ends to avoid upgrade</span> */}

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="icon" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                            <img src={PS4} alt="img" />
                                            <span style={{fontSize: '30px', color: '#6865FF', fontWeight: 'bold'}}>Premium Plan</span>
                                        </div>
                                        <h3>$19.99 / month</h3>
                                        <span>For creators, brands, and e-commerce professionals</span>
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <button 
                                                onClick={() => handlePlanClick('monthly', process.env.REACT_APP_STRIPE_PRICE_MONTHLY, 'Monthly Plan - $19.99')}
                                                className="theme-btn"
                                                style={{ border: 'none', background: 'transparent', width: '100%', cursor: 'pointer' }}
                                            >
                                                <span className="theme-effect">
                                                    <span className="effect-1">Start Monthly Plan</span>
                                                    <span className="effect-1">Start Monthly Plan</span>
                                                </span>
                                            </button>
                                        </div>
                                        → Best value for power users & studios

                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i> Everything included in free</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Full access to 3D animations</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Export MP4, GIF, 3Dmodel</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Realistic textures & HD lighting</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Custom Image backgrounds</li>
                                        {/* <li><i className="fa-solid fa-circle-check"></i> 50k design & prints</li> */}
                                    </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Tab2" style={{ display: activeTab === 'Tab2' ? 'block' : 'none' }}>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="icon" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                            <img src={PS4} alt="img" />
                                            <span style={{fontSize: '30px', color: '#6865FF', fontWeight: 'bold'}}>6 Months Plan</span>
                                        </div>
                                        <h3>$89.99 / 6 months</h3>
                                        <span>Best value - Save $30 compared to monthly plans</span>
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <button 
                                                onClick={() => handlePlanClick('six_months', process.env.REACT_APP_STRIPE_PRICE_SIX_MONTHS, '6 Months Plan - $89.99')}
                                                className="theme-btn"
                                                style={{ border: 'none', background: 'transparent', width: '100%', cursor: 'pointer' }}
                                            >
                                                <span className="theme-effect">
                                                    <span className="effect-1">Choose Plan</span>
                                                    <span className="effect-1">Choose Plan</span>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i> Everything included in Premium Plan</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Full access to 3D animations</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Export MP4, GIF, 3Dmodel</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Realistic textures & HD lighting</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Custom Image backgrounds</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Best value - Save $30</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                <div className="pricing-box-items active">
                                    <div className="pricing-tag">
                                        <img src={PS5} alt="img" />
                                    </div>
                                    <div className="pricing-header">
                                        <div className="icon">
                                            <img src={PS4} alt="img" />
                                        </div>
                                        <h3>Personal Plan</h3>
                                        <span>Customized anything in anytime</span>
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <Link onClick={ClickHandler} to="/contact" className="theme-btn">
                                                <span className="theme-effect">
                                                    <span className="effect-1">choose pricing plan</span>
                                                    <span className="effect-1">$2500/ Month</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i> 3-5 days turnaround</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Native Development</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Task delivered one-by one</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Dedicated dashboard</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Updates via dashboard & slack</li>
                                        <li><i className="fa-solid fa-circle-check"></i> 50k design & prints</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                <div className="pricing-box-items">
                                    <div className="pricing-header">
                                        <div className="icon">
                                            <img src={PS4} alt="img" />
                                        </div>
                                        <h3>Personal Plan</h3>
                                        <span>Customized anything in anytime</span>
                                        <div className="pricing-btn" style={{ marginTop: '10px' }}>
                                            <Link onClick={ClickHandler} to="/contact" className="theme-btn">
                                                <span className="theme-effect">
                                                    <span className="effect-1">choose pricing plan</span>
                                                    <span className="effect-1">$2500/ Month</span>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    <ul className="pricing-list">
                                        <li><i className="fa-solid fa-circle-check"></i> 3-5 days turnaround</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Native Development</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Task delivered one-by one</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Dedicated dashboard</li>
                                        <li><i className="fa-solid fa-circle-check"></i> Updates via dashboard & slack</li>
                                        <li><i className="fa-solid fa-circle-check"></i> 50k design & prints</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Payment Modal */}
            {showPayment && selectedPlan && (
                <div className="payment-modal-overlay" onClick={(e) => {
                    if (e.target.className === 'payment-modal-overlay') {
                        handlePaymentCancel();
                    }
                }}>
                    <div className="payment-modal-content">
                        <button className="payment-modal-close" onClick={handlePaymentCancel}>×</button>
                        <PaymentWrapper
                            priceId={selectedPlan.priceId}
                            planType={selectedPlan.planType}
                            planName={selectedPlan.planName}
                            onSuccess={handlePaymentSuccess}
                            onCancel={handlePaymentCancel}
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default PricingSection;