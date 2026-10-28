import React, { useState, useEffect, Component } from 'react';
import { Navbar } from './components/Navbar';
import { HomeSection } from './components/HomeSection';
import { AboutSelfSection } from './components/AboutSelfSection';
import { SkillsExperienceSection } from './components/SkillsExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { HobbiesSection } from './components/HobbiesSection';
import { Footer } from './components/Footer';

// Robust Error Boundary to guarantee no blank screen
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container py-5 text-center">
          <div className="alert alert-warning p-4 shadow-sm rounded-4">
            <h2 className="h4 fw-bold mb-2">Something went wrong rendering a section</h2>
            <p className="text-secondary mb-3">{this.state.error?.message || 'Unknown error'}</p>
            <button
              className="btn btn-primary"
              onClick={() => window.location.reload()}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll safely
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'hobbies'];
      const scrollPosition = (window.scrollY || 0) + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop || 0;
          const height = el.offsetHeight || 0;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 96;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <ErrorBoundary>
      <div className="portfolio-app d-flex flex-column min-vh-100">
        {/* Fixed Transparent Glass Header with GitHub */}
        <Navbar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Main Content Sections */}
        <main className="container flex-grow-1 pb-5">
          <div className="d-flex flex-column gap-5">
            <HomeSection onNavigate={handleNavigate} />
            <hr className="border-cream opacity-50 my-2" />
            <AboutSelfSection />
            <hr className="border-cream opacity-50 my-2" />
            <SkillsExperienceSection />
            <hr className="border-cream opacity-50 my-2" />
            <ProjectsSection />
            <hr className="border-cream opacity-50 my-2" />
            <EducationSection />
            <hr className="border-cream opacity-50 my-2" />
            <HobbiesSection />
          </div>
        </main>

        {/* Clean Minimalist Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
