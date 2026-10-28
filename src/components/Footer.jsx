import React from 'react';
import { studentProfile, contactInfo } from '../data/portfolioData';

/**
 * Footer Component
 * Clean, minimalist cream footer.
 * Removed all college names, roll numbers, and academic clutter as requested.
 */
export const Footer = () => {
  return (
    <footer className="clean-footer mt-auto">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
          <div className="text-center text-md-start">
            <span className="fw-bold text-dark d-block">
              {studentProfile.name}
            </span>
            <span className="small text-muted">
              Software Developer Portfolio &bull; All Rights Reserved
            </span>
          </div>

          {/* Social Channels */}
          <div className="d-flex align-items-center gap-3">
            {contactInfo.socialMedia.map((s) => (
              <a
                key={s.id}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary fs-5"
                title={s.platform}
                style={{ transition: 'color 0.2s ease' }}
              >
                <i className={`bi ${s.icon}`}></i>
              </a>
            ))}
          </div>

          {/* Tech Stack Attribution */}
          <div className="text-center text-md-end small text-muted">
            Built with{' '}
            <span className="fw-semibold text-dark">React.js</span> &bull;{' '}
            <span className="fw-semibold text-dark">Bootstrap 5</span> &bull;{' '}
            <span className="fw-semibold text-dark">HTML5 / CSS3</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
