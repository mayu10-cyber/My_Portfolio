import React from 'react';
import { educationHistory } from '../data/portfolioData';

/**
 * EducationSection Component
 * Structured text-only education timeline (Images removed as requested).
 * Highlights Atharva College of Engineering, Vidyalankar Polytechnic, and Cardinal Gracias High School.
 */
export const EducationSection = () => {
  return (
    <section id="education" className="section-block">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="section-badge">Academic Timeline</span>
      </div>
      <h2 className="section-title">Education & Qualifications</h2>
      <p className="section-desc">
        A structured overview of my academic progression from school foundation to degree engineering.
      </p>

      <div className="education-list">
        {educationHistory.map((edu) => (
          <div key={edu.id} className="edu-card">
            {/* Header with Title and Status Badges */}
            <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-2">
              <div>
                <span className="text-muted small fw-semibold text-uppercase tracking-wider">
                  {edu.level}
                </span>
                <h3 className="edu-institution mb-1">{edu.institution}</h3>
                <h4 className="edu-degree mb-0">{edu.degree}</h4>
              </div>
              <div className="d-flex flex-wrap gap-2 align-items-center">
                <span className="edu-period-badge">
                  <i className="bi bi-calendar3 me-1"></i> {edu.duration}
                </span>
                <span className="edu-status-badge">
                  <i className="bi bi-check-circle-fill me-1"></i> {edu.status}
                </span>
              </div>
            </div>

            {/* Affiliation and Location */}
            <div className="d-flex flex-wrap gap-3 text-muted small mb-3">
              <span>
                <i className="bi bi-geo-alt-fill text-danger me-1"></i> {edu.location}
              </span>
              <span>&bull;</span>
              <span>
                <i className="bi bi-award-fill text-warning me-1"></i> {edu.affiliation}
              </span>
            </div>

            {/* Description */}
            <p className="text-secondary mb-3 fs-6">
              {edu.description}
            </p>

            {/* Key Curriculum & Focus Areas */}
            <div>
              <span className="small fw-bold text-dark d-block mb-2">Key Areas & Highlights:</span>
              <div className="d-flex flex-wrap">
                {edu.keyHighlights.map((highlight, idx) => (
                  <span key={idx} className="edu-highlight-chip">
                    <i className="bi bi-dot text-primary"></i> {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
