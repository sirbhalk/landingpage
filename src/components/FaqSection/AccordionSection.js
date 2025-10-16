import React, { useState } from 'react';

const AccordionSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="accordion">
      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(0)}
          >
            Do I need an account to start?

          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 0 ? 'show' : ''}`}>
          <div className="accordion-body">
            No sign-up required to try! Just upload your design, choose a model, and start creating. You only need an account if you want to save your projects or access premium options.
          </div>
        </div>
      </div>

      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(1)}
          >
            Can I customize the textures and colors?
          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 1 ? 'show' : ''}`}>
          <div className="accordion-body">
            Yes, you can! Change colors, materials, and even textures in seconds. Make your mockups match your brand aesthetic perfectly.

          </div>
        </div>
      </div>

      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(2)}
          >
            Do I need to wait for rendering?

          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 2 ? 'show' : ''}`}>
          <div className="accordion-body">
            Not at all. All animations are pre-rendered and optimized for instant export. You’ll get your final 3D animation in just a few seconds.

          </div>
        </div>
      </div>

      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 3 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(3)}
          >
            Can I use my own designs or patterns?

          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 3 ? 'show' : ''}`}>
          <div className="accordion-body">
            
Of course! Upload any PNG, JPG, or transparent logo — 3Dmock will automatically wrap it around the 3D garment in perfect alignment.

          </div>
        </div>
      </div>
      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 4 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(4)}
          >
            Can I export my mockups for social media or my store?

          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 4 ? 'show' : ''}`}>
          <div className="accordion-body">
            Yes! Export your 3D mockups in MP4, GIF, or high-resolution PNG — ready to share on Shopify, Instagram, TikTok, or any other platform.

          </div>
        </div>
      </div>
      <div className="accordion-item wow fadeInUp">
        <h4 className="accordion-header">
          <button
            className={`accordion-button ${activeIndex === 4 ? '' : 'collapsed'}`}
            onClick={() => toggleAccordion(4)}
          >
            Can I request a new model or animation?


          </button>
        </h4>
        <div className={`accordion-collapse collapse ${activeIndex === 4 ? 'show' : ''}`}>
          <div className="accordion-body">
Yes! Our library grows every month. You can suggest new clothing types or animations directly from your dashboard — we listen to our community.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
