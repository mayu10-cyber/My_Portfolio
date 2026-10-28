import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';

/**
 * ProjectCarouselItem Component
 * Manages an individual project's screenshot queue with Left/Right navigation arrows,
 * active thumbnail indicators, and click-to-enlarge modal.
 */
const ProjectCarouselItem = ({ project, onEnlarge }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project || !project.screenshots || project.screenshots.length === 0) {
    return null;
  }

  const total = project.screenshots.length;
  const currentScreenshot = project.screenshots[currentIndex] || project.screenshots[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="project-showcase-card">
      <div className="row g-4 align-items-center">
        {/* Left Column: Interactive Screenshot Carousel Queue with Arrows */}
        <div className="col-12 col-xl-7">
          <div className="carousel-viewport">
            {/* Arrow Navigation */}
            {total > 1 && (
              <>
                <button
                  type="button"
                  className="carousel-arrow-btn carousel-arrow-prev"
                  onClick={handlePrev}
                  title="Previous Screenshot"
                  aria-label="Previous Screenshot"
                >
                  <i className="bi bi-chevron-left"></i>
                </button>

                <button
                  type="button"
                  className="carousel-arrow-btn carousel-arrow-next"
                  onClick={handleNext}
                  title="Next Screenshot"
                  aria-label="Next Screenshot"
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </>
            )}

            {/* Active Screenshot Display */}
            <img
              src={currentScreenshot.src}
              alt={currentScreenshot.caption || project.title}
              className="carousel-main-image"
              onClick={() => onEnlarge(currentScreenshot)}
              title="Click to view full screen"
            />

            {/* Screenshot Counter & Caption Overlay */}
            <div
              className="d-flex justify-content-between align-items-center px-3 py-2 bg-dark text-white small"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              <span className="text-truncate me-2 fw-medium">
                {currentScreenshot.caption}
              </span>
              <span className="badge bg-secondary">
                {currentIndex + 1} / {total}
              </span>
            </div>
          </div>

          {/* Screenshot Queue Thumbnails Strip */}
          {total > 1 && (
            <div className="screenshot-queue-bar">
              {project.screenshots.map((ss, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`queue-thumb-btn ${idx === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(idx)}
                  title={`Screenshot ${idx + 1}: ${ss.caption}`}
                >
                  <img src={ss.src} alt={ss.caption} className="queue-thumb-img" />
                </button>
              ))}
            </div>
          )}
          <span className="small text-muted d-block text-center mt-1">
            <i className="bi bi-arrows-expand me-1"></i> Use arrows or click thumbnails to shift screenshots
          </span>
        </div>

        {/* Right Column: Project Details, Analyzed Features & Technologies */}
        <div className="col-12 col-xl-5">
          <div className="d-flex flex-wrap gap-2 align-items-center mb-2">
            <span className="section-badge mb-0">{project.category}</span>
            <span className="badge bg-light text-dark border">{project.client}</span>
          </div>

          <h3 className="h4 fw-bold text-dark mb-2">{project.title}</h3>
          
          <p className="text-secondary small mb-3">
            {project.summary}
          </p>

          <h4 className="h6 fw-bold text-dark mb-2">
            <i className="bi bi-stars text-danger me-1"></i> Key Features Analyzed:
          </h4>
          <div className="mb-3">
            {(project.features || []).map((feature, fIdx) => (
              <div key={fIdx} className="feature-check-item">
                <i className="bi bi-check-circle-fill"></i>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <h4 className="h6 fw-bold text-dark mb-2">Tech Stack:</h4>
          <div className="d-flex flex-wrap gap-1">
            {(project.tech || []).map((t, tIdx) => (
              <span key={tIdx} className="tech-badge">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * ProjectsSection Component
 * Showcases the 3 internship projects:
 * 1. TejYash Cyber Solution Website
 * 2. BookNook E-Commerce Bookstore Platform
 * 3. SheRise Women Safety Application
 */
export const ProjectsSection = () => {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section id="projects" className="section-block">
      <h2 className="section-title">{projectsData.title}</h2>

      {/* Projects List with Screenshot Carousels */}
      {(projectsData.projects || []).map((project) => (
        <ProjectCarouselItem
          key={project.id}
          project={project}
          onEnlarge={(img) => setModalImage(img)}
        />
      ))}

      {/* Lightbox Modal for Enlarge View */}
      {modalImage && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)', zIndex: 1060 }}
          onClick={() => setModalImage(null)}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content border-0 bg-transparent text-white">
              <div className="modal-header border-0 pb-2">
                <h5 className="modal-title fw-bold text-white">{modalImage.caption}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setModalImage(null)}
                ></button>
              </div>
              <div className="modal-body text-center p-0">
                <img
                  src={modalImage.src}
                  alt={modalImage.caption}
                  className="img-fluid rounded"
                  style={{ maxHeight: '82vh', objectFit: 'contain' }}
                />
              </div>
              <div className="modal-footer border-0 pt-2 justify-content-between">
                <span className="small text-white-50">{modalImage.caption}</span>
                <a
                  href={modalImage.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-light"
                >
                  Open Original <i className="bi bi-box-arrow-up-right ms-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
