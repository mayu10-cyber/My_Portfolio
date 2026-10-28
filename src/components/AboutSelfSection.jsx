import React from 'react';
import { studentProfile, contactInfo } from '../data/portfolioData';

/**
 * AboutSelfSection Component
 * Uses the second image (my self 2.jpg) in the second position box.
 * Quote line has been removed as requested.
 */
export const AboutSelfSection = () => {
  return (
    <section id="about" className="section-block">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="section-badge">About Me</span>
      </div>
      <h2 className="section-title">Personal Profile</h2>
      <p className="section-desc">
        A glimpse into my journey, core interests, and how to connect with me.
      </p>

      {/* Main Bio Card */}
      <div className="cream-card">
        <div className="row g-4 align-items-center mb-4">
          <div className="col-12 col-md-auto text-center">
            {/* Second position box using my self 2.jpg */}
            <img
              src={studentProfile.profilePic}
              alt={studentProfile.name}
              className="hero-avatar"
              style={{ width: '140px', height: '140px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-12 col-md">
            <h3 className="h4 fw-bold mb-2">{studentProfile.name}</h3>
            <p className="text-secondary mb-0 fs-6">
              {studentProfile.detailedBio}
            </p>
          </div>
        </div>

        <hr className="my-4" style={{ borderColor: 'var(--border-cream)' }} />

        {/* Contact Channels */}
        <h4 className="h5 fw-bold mb-3">Get in Touch</h4>
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="contact-card-item">
              <div className="d-flex align-items-center gap-3">
                <div className="hobby-icon-wrapper mb-0 bg-white shadow-sm">
                  <i className="bi bi-envelope-at text-danger"></i>
                </div>
                <div>
                  <span className="small text-muted d-block">Email Address</span>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="fw-bold text-dark text-decoration-none small text-break"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card-item">
              <div className="d-flex align-items-center gap-3">
                <div className="hobby-icon-wrapper mb-0 bg-white shadow-sm">
                  <i className="bi bi-telephone text-primary"></i>
                </div>
                <div>
                  <span className="small text-muted d-block">Phone Number</span>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="fw-bold text-dark text-decoration-none"
                  >
                    +91 {contactInfo.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-card-item">
              <div className="d-flex align-items-center gap-3">
                <div className="hobby-icon-wrapper mb-0 bg-white shadow-sm">
                  <i className="bi bi-whatsapp text-success"></i>
                </div>
                <div>
                  <span className="small text-muted d-block">WhatsApp Chat</span>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fw-bold text-success text-decoration-none"
                  >
                    +91 {contactInfo.whatsapp} <i className="bi bi-box-arrow-up-right small"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <h4 className="h5 fw-bold mb-3">Connect on Social Media</h4>
        <div className="d-flex flex-wrap gap-2">
          {contactInfo.socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill-cream"
            >
              <i className={`bi ${social.icon} fs-5`} style={{ color: social.color }}></i>
              <span>{social.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
