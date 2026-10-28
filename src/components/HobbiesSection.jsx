import React from 'react';
import { hobbiesData } from '../data/portfolioData';

/**
 * HobbiesSection Component
 * Hobbies ordered as requested:
 * 1. Collectibles (Coins & Cars)
 * 2. Sports & Athletics
 * 3. Dance & Performing Arts
 * Creative artwork section removed as requested.
 */
export const HobbiesSection = () => {
  return (
    <section id="hobbies" className="section-block">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="section-badge">Personal Pursuits</span>
      </div>
      <h2 className="section-title">{hobbiesData.title}</h2>
      <p className="section-desc">{hobbiesData.subtitle}</p>

      {/* Hobbies Cards (Ordered: 1. Collectibles, 2. Sports, 3. Dance) */}
      <div className="row g-4 mb-5">
        {hobbiesData.items.map((hobby, index) => (
          <div key={hobby.id} className="col-12 col-md-4">
            <div className="hobby-card">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <div className="hobby-icon-wrapper mb-0">
                  <i className={`bi ${hobby.icon}`}></i>
                </div>
                <span className="badge bg-light text-secondary border small">#{index + 1}</span>
              </div>
              <h3 className="h5 fw-bold mb-2">{hobby.name}</h3>
              <p className="text-secondary small mb-0">
                {hobby.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Dance Video Showcase (#3 Hobby) */}
      <div className="cream-card">
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3">
          <div>
            <h3 className="h5 fw-bold mb-1">
              <i className="bi bi-music-note-beamed text-danger me-2"></i>
              {hobbiesData.video.title}
            </h3>
            <p className="text-muted small mb-0">{hobbiesData.video.description}</p>
          </div>
          <a
            href={hobbiesData.video.src}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-secondary-cream mt-2 mt-md-0"
          >
            Open Video in New Tab <i className="bi bi-box-arrow-up-right ms-1"></i>
          </a>
        </div>

        <div className="cream-video-wrapper">
          <video controls preload="metadata" className="w-100">
            <source src={hobbiesData.video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};
