import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3'
import ProductSection from '../../components/ProductSection/ProductSection';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import PricingSection from '../../components/PricingSection/PricingSection';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import Hero3 from '../../components/hero3/hero3';
import api from "../../api";
import BrandSectionS2 from '../../components/BrandSectionS2/BrandSectionS2';
import About3 from '../../components/about3/about3';
import TestimonialSectionS2 from '../../components/TestimonialSectionS2/TestimonialSectionS2';
import FaqSection from '../../components/FaqSection/FaqSection';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';


const HomePage = ({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const products = productsArray

    return (
        <Fragment>
            {/* <Navbar hclass={'header-section'} /> */}
            <NavbarS3 hclass={'header-section'} />
            {/* <Hero /> */}
            <Hero3 />
            
            <BrandSectionS2 />
            <ProductSection
                addToCartProduct={addToCartProduct}
                products={products}
            />            
            <About3 />
            <ProcessSection />
            <TestimonialSectionS2 />
            <PricingSection />
            <FaqSection />
            <CtaSectionS2 />
            <FooterS3 />



            {/* <FeatureSection />
            <About />
            <MarqueeSection hclass={'marquee-section margin-top-8 mb-80'} />
            <ServiceSection hclass={'service-section bg-cover section-padding'} Bg={ServiceBg} />
            <StoreSection />
            <ProductSection
                addToCartProduct={addToCartProduct}
                products={products}
            />
            <PortfolioSection />
            <FunFact hclass={'counter-section fix section-padding pt-0'} />
            <WorksSection hclass={'about-feature-section fix section-padding pt-0 bg-cover'} eclass={'about-feature-wrapper'} Ws6={Ws6} /> */}
            {/* <ProcessSection /> */}
            {/* <PricingSection />
            <Testimonial />
            <BlogSection hclass="blog-section section-padding pt-0 bg-cover" SubClass="blog-wrapper" />
            <CtaSection />
            <Footer />
            <CursorMaus /> */}
        </Fragment>
    )
};
export default connect(null, { addToCart })(HomePage);