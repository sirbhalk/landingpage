import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3';
import PageTitle from '../../components/pagetitle/PageTitle';
import FooterS3 from '../../components/footerS3/FooterS3';

const AffiliateProgramPage = () => {
    const formStyle = {
        maxWidth: '820px',
        margin: '0 auto',
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        padding: '28px 28px 32px',
        boxShadow: '0 12px 30px rgba(15, 23, 42, 0.08)',
    };

    const sectionTitleStyle = {
        fontSize: '20px',
        fontWeight: 700,
        color: '#1d4ed8',
        margin: '24px 0 12px',
    };

    const labelStyle = {
        fontWeight: 600,
        color: '#0f172a',
        marginBottom: 6,
        display: 'block',
    };

    const inputStyle = {
        width: '100%',
        border: '1px solid #cbd5e1',
        borderRadius: '8px',
        padding: '12px 14px',
        fontSize: '15px',
        color: '#0f172a',
        outline: 'none',
        background: '#fff',
    };

    const checkboxContainerStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '12px 16px',
    };

    return (
        <Fragment>
            <NavbarS3 hclass={'header-section'} />
            <PageTitle pageTitle={'Affiliate Program'} pagesub={'Partner with 3DMock'} />
            <section className="section-padding" style={{ background: '#f8fafc' }}>
                <div className="container" style={{ maxWidth: 1080 }}>
                    <div style={formStyle}>
                        <h2 style={{ color: '#1d4ed8', fontSize: 26, fontWeight: 700, marginBottom: 8 }}>
                            3DMock Affiliate Program Application
                        </h2>
                        <p style={{ color: '#475569', marginBottom: 18 }}>
                            Tell us a bit about you so we can review and activate your affiliate account.
                        </p>

                        <div style={sectionTitleStyle}>Section 1: Basic Information</div>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label style={labelStyle}>Full Name*</label>
                                <input style={inputStyle} type="text" placeholder="Please enter your full legal name." />
                            </div>
                            <div className="col-md-6">
                                <label style={labelStyle}>Email*</label>
                                <input style={inputStyle} type="email" placeholder="Provide your primary email address." />
                            </div>
                            <div className="col-md-6">
                                <label style={labelStyle}>WhatsApp Number*</label>
                                <input
                                    style={inputStyle}
                                    type="tel"
                                    placeholder="Include country code (e.g., +1 555-123-4567)"
                                />
                            </div>
                            <div className="col-md-6">
                                <label style={labelStyle}>Country*</label>
                                <input style={inputStyle} type="text" placeholder="Provide the country where you will operate." />
                            </div>
                            <div className="col-md-6">
                                <label style={labelStyle}>Language of Preference*</label>
                                <input
                                    style={inputStyle}
                                    type="text"
                                    placeholder="Select your preferred language for communication."
                                />
                            </div>
                        </div>

                        <div style={sectionTitleStyle}>Section 2: Ecommerce Audience</div>
                        <div className="row g-3">
                            <div className="col-12">
                                <label style={labelStyle}>
                                    Do you have a community of POD (print-on-demand) merchants or ecommerce enthusiasts?*
                                </label>
                                <div className="d-flex align-items-center gap-4">
                                    <label className="d-flex align-items-center gap-2" style={{ color: '#0f172a' }}>
                                        <input type="radio" name="community" /> Yes
                                    </label>
                                    <label className="d-flex align-items-center gap-2" style={{ color: '#0f172a' }}>
                                        <input type="radio" name="community" /> No
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <label style={labelStyle}>
                                    Do you have an agency providing POD (print-on-demand) ecommerce services?*
                                </label>
                                <div className="d-flex align-items-center gap-4">
                                    <label className="d-flex align-items-center gap-2" style={{ color: '#0f172a' }}>
                                        <input type="radio" name="agency" /> Yes
                                    </label>
                                    <label className="d-flex align-items-center gap-2" style={{ color: '#0f172a' }}>
                                        <input type="radio" name="agency" /> No
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div style={sectionTitleStyle}>Section 3: Marketing & Promotion</div>
                        <label style={{ ...labelStyle, marginTop: 6 }}>Social Media Channels Used for Promotion*</label>
                        <div style={checkboxContainerStyle} className="mb-3">
                            {['Website', 'YouTube', 'Instagram', 'Facebook', 'X (Twitter)', 'LinkedIn', 'TikTok', 'Email Marketing'].map(
                                (channel) => (
                                    <label key={channel} className="d-flex align-items-center gap-2" style={{ color: '#0f172a' }}>
                                        <input type="checkbox" /> {channel}
                                    </label>
                                )
                            )}
                        </div>

                        <div className="row g-3">
                            <div className="col-md-6">
                                <label style={labelStyle}>Platform & Handle*</label>
                                <input style={inputStyle} type="text" placeholder="@yourhandle" />
                            </div>
                            <div className="col-md-6">
                                <label style={labelStyle}>Follower Count / Average Reach*</label>
                                <input style={inputStyle} type="text" placeholder="e.g., 25k followers / 50k monthly impressions" />
                            </div>
                        </div>
                        <p style={{ color: '#475569', fontSize: 14, marginTop: 8 }}>
                            If you use multiple platforms, add the main one here. You can share more details after approval.
                        </p>

                        <div className="d-flex align-items-center gap-2 mt-3 mb-3">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" style={{ color: '#0f172a', margin: 0 }}>
                                I have read and agree to the Affiliate Terms & Conditions.*
                            </label>
                        </div>
                        <button
                            type="button"
                            className="theme-btn"
                            style={{ width: '100%', padding: '14px', fontWeight: 700, fontSize: 16 }}
                        >
                            Submit Application
                        </button>
                    </div>
                </div>
            </section>
            <FooterS3 />
        </Fragment>
    );
};

export default AffiliateProgramPage;

