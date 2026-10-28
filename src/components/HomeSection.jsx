import React from 'react';
import { studentProfile, contactInfo } from '../data/portfolioData';

/**
 * HomeSection Component (Redesigned Hero)
 * Profile photo placed on the RIGHT side with significantly increased size (320px).
 * Features direct GitHub integration, Atharva College credentials, and modern layout.
 */
export const HomeSection = ({ onNavigate }) => {
  return (
    <section id="home" className="section-block">
      {/* Redesigned Hero Card */}
      <div className="hero-card">
        <div className="row align-items-center g-5">
          {/* RIGHT SIDE: Large Profile Image */}
          <div className="col-12 col-lg-5 order-1 order-lg-2 text-center text-lg-end">
            <div className="hero-avatar-wrapper">
              <img
                src={studentProfile.avatar}
                alt={studentProfile.name}
                className="hero-avatar-large"
              />
              <div className="hero-avatar-badge">
                <i className="bi bi-circle-fill text-success fs-6"></i>
                <span>Open to Opportunities</span>
              </div>
            </div>
          </div>

          {/* LEFT SIDE: Headline, Information & Action Buttons */}
          <div className="col-12 col-lg-7 order-2 order-lg-1 text-center text-lg-start">
            <div className="hero-greeting">
              <i className="bi bi-stars me-1"></i> Welcome to my portfolio
            </div>

            <h1 className="hero-title">{studentProfile.name}</h1>
            <h2 className="hero-subtitle">{studentProfile.title}</h2>

            <div className="hero-college-badge">
              <i className="bi bi-mortarboard-fill text-danger fs-5"></i>
              <span>{studentProfile.currentCollege}</span>
            </div>

            <p className="section-desc mb-4" style={{ maxWidth: '620px' }}>
              {studentProfile.shortBio}
            </p>

            {/* Action Buttons with GitHub Integration */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start align-items-center gap-3">
              <button
                type="button"
                className="btn-primary-cream"
                onClick={() => onNavigate && onNavigate('projects')}
              >
                <i className="bi bi-code-square"></i> Explore Projects
              </button>

              <a
                href={studentProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-github-hero"
              >
                <i className="bi bi-github"></i> GitHub Profile
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-cream text-success"
              >
                <i className="bi bi-whatsapp"></i> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Portfolio Metric Cards */}
      <div className="row g-3">
        <div className="col-md-4">
          <div className="cream-card h-100 p-4">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="hobby-icon-wrapper mb-0">
                <i className="bi bi-laptop"></i>
              </div>
              <div>
                <h3 className="h6 mb-0 fw-bold">Current Degree</h3>
                <span className="small text-muted">{studentProfile.currentDegree}</span>
              </div>
            </div>
            <p className="text-secondary small mb-0 mt-2">
              Atharva College of Engineering, Malad, Mumbai (Direct Second Year / Sem 3).
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cream-card h-100 p-4">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="hobby-icon-wrapper mb-0">
                <i className="bi bi-briefcase"></i>
              </div>
              <div>
                <h3 className="h6 mb-0 fw-bold">Internship Experience</h3>
                <span className="small text-muted">TejYash Cyber Solutions</span>
              </div>
            </div>
            <p className="text-secondary small mb-0 mt-2">
              Web Developer Intern: Built client corporate sites, e-commerce, and safety platforms.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="cream-card h-100 p-4">
            <div className="d-flex align-items-center gap-3 mb-2">
              <div className="hobby-icon-wrapper mb-0">
                <i className="bi bi-git"></i>
              </div>
              <div>
                <h3 className="h6 mb-0 fw-bold">Open Source & Code</h3>
                <span className="small text-muted">mayu10-cyber</span>
              </div>
            </div>
            <p className="text-secondary small mb-0 mt-2">
              Actively developing responsive web applications, C algorithms, and GUI projects on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
