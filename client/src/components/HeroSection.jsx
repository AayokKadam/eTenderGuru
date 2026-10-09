import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const HeroSection = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <div className="hero-viewport-wrapper">

      <header className="hero-banner" id="hero">

        {/* Decorative Outlined Editorial Wordmark Layer */}
        <div className="hero-editorial-wordmark" aria-hidden="true">
          <span>eTender Guru</span>
        </div>

        <div className="hero-inner-container">

          {/* Left Column */}
          <div className="hero-content-col">

            {/* GeM logo: replaces the old "GOVERNMENT TENDERS MADE SIMPLE" eyebrow */}
            <div className="hero-eyebrow-wrap">
              <div className="hero-gem-logo-wrap">
                {/* base copy: everything except the emblem (emblem part is clipped away in CSS) */}
                <img
                  src="/gem_logo-removebg-preview.png"
                  alt="Government e-Marketplace"
                  className="hero-gem-logo hero-gem-logo-base"
                />
                {/* second copy: ONLY the Ashoka emblem, turned white */}
                <img
                  src="/gem_logo-removebg-preview.png"
                  alt=""
                  aria-hidden="true"
                  className="hero-gem-logo hero-gem-logo-emblem"
                />
              </div>

              {/* kept for mobile only (the big wordmark is hidden on small screens) */}
              <span className="hero-eyebrow hero-eyebrow-mobile">
                {language === 'mr' ? 'ई-टेंडर गुरू' : 'eTender Guru'}
              </span>
            </div>

            <h1 className="hero-editorial-heading">
              <span className="hero-headline-serif">
                {t.headlineBold}
              </span>

              <span className="hero-headline-impact">
                {t.headlineLight}
              </span>
            </h1>

            <p className="hero-editorial-subtext">
              {t.supportingText}
            </p>

            {/* "Explore Courses" button removed */}

          </div>

          {/* Right Column: Founder Cutout */}
          <div className="hero-founder-col">

            <div className="hero-founder-frame">
              <img
                src="/foundernobg.png"
                alt={t.altFounder}
                className="hero-founder-img"
                loading="eager"
                fetchPriority="high"
              />
            </div>

          </div>

        </div>
      </header>

    </div>
  );
};