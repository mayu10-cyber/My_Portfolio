import React from 'react';
import { internshipAndSkillsData } from '../data/portfolioData';

/**
 * SkillsExperienceSection Component
 * Highlights the student's internship experience at TejYash Cyber Solutions (TYCS)
 * and strictly displays the requested core skills (React.js, HTML, CSS, C, C++, Python at beginner).
 * Word "Industry" removed as requested.
 */
export const SkillsExperienceSection = () => {
  const { internship, skills } = internshipAndSkillsData;

  return (
    <section id="skills" className="section-block">
      <div className="d-flex align-items-center gap-2 mb-3">
        <span className="section-badge">Career & Expertise</span>
      </div>
      <h2 className="section-title">{internshipAndSkillsData.title}</h2>
      <p className="section-desc">{internshipAndSkillsData.subtitle}</p>

      {/* Internship Showcase Card */}
      <div className="internship-card mb-5">
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
          <div>
            <span className="badge bg-danger text-white mb-2 px-3 py-1">Internship Experience</span>
            <h3 className="internship-role-title mb-1">{internship.role}</h3>
            <h4 className="internship-company mb-0">{internship.company}</h4>
          </div>
          <span className="badge bg-light text-dark border px-3 py-2 fw-semibold">
            <i className="bi bi-clock-history me-1 text-primary"></i> {internship.duration}
          </span>
        </div>

        <p className="text-secondary mb-4 fs-6">
          {internship.description}
        </p>

        <h4 className="h6 fw-bold text-uppercase tracking-wider text-muted mb-3">
          Key Projects & Major Contributions During Internship:
        </h4>

        <div className="row g-3">
          {internship.achievements.map((item, idx) => (
            <div key={idx} className="col-12 col-md-6">
              <div className="achievement-pill-card">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="hobby-icon-wrapper mb-0" style={{ width: '38px', height: '38px', fontSize: '1.1rem' }}>
                    <i className="bi bi-check2-circle"></i>
                  </div>
                  <h5 className="h6 fw-bold mb-0 text-dark">{item.title}</h5>
                </div>
                <p className="small text-secondary mb-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Technical Skills (Strictly requested skills only) */}
      <div className="cream-card">
        <h3 className="h5 fw-bold mb-2">Technical Skills</h3>
        <p className="text-muted small mb-4">
          Core programming and web development proficiencies.
        </p>

        <div className="row g-3">
          {skills.map((skill, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4">
              <div className="cream-card-subtle p-3 h-100 d-flex justify-content-between align-items-center">
                <span className="fw-bold text-dark">{skill.name}</span>
                <span className={`badge ${skill.level === 'Beginner' ? 'bg-warning text-dark' : 'bg-light text-secondary border'} small`}>
                  {skill.level}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
