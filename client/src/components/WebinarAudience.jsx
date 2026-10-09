import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";




export default function WebinarAudience() {
  const { language } = useLanguage();

  const t = translations[language];
  const section = t.webinarAudience;

  return (
    <section className="webinar-audience">
      <div className="webinar-audience-container">

        {/* Header */}
        <div className="webinar-audience-header">
          
       

          <div>
            <span className="webinar-audience-eyebrow">
              {section.eyebrow}
            </span>
            

            <h2 className="webinar-audience-title">
              <span>{section.titleSerif}</span>
              <strong>{section.titleImpact}</strong>
            </h2>
          </div>

          <p className="webinar-audience-intro">
               <img
  src="../../public/gem_logo-removebg-preview.png"
  alt="Government e-Marketplace"
  className="gem-logo"
/>
            {section.subtitle}
          </p>

          

        </div>

        {/* Compact Table */}
        <div className="webinar-audience-table">

          {section.audiences.map((audience, index) => (
            <article
              className="webinar-audience-row"
              key={audience.id}
            >

              <div className="webinar-audience-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="webinar-audience-icon">
                
              </div>

              <div className="webinar-audience-content">
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </div>

              <div className="webinar-audience-arrow">
                
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}