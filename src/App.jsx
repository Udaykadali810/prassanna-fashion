import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Mail, Phone, ChevronRight, Star, GraduationCap, Scissors, Users, Palette, MessageCircle } from 'lucide-react';
import './App.css';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    { id: 1, category: 'Bridal', image: '/bridal.png', title: 'Royal Heritage Bridal' },
    { id: 2, category: 'Couture', image: '/bridal.png', title: 'Contemporary Gowns' },
    { id: 3, category: 'Casual', image: '/hero-bg.png', title: 'Summer Breeze Collection' },
    { id: 4, category: 'Student Works', image: '/designer.png', title: 'Annual Student Showcase' },
  ];

  const filteredPortfolio = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory || (activeCategory === 'Student Works' && item.category === 'Student Works'));

  const categories = ['All', 'Bridal', 'Couture', 'Casual', 'Student Works'];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-logo">
            PRASSANNAA <span>FASHION</span>
          </div>
          
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
            <li><a href="#programs" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Programs</a></li>
            <li><a href="#portfolio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Portfolio</a></li>
            <li><a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>

          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero" style={{ backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content animate-fade-in">
          <h1>Learn Fashion Design from an Industry-Proven Designer</h1>
          <p className="section-subtitle" style={{color: '#fff', fontSize: '1.2rem', marginBottom: '2rem'}}>
            Unleash your creativity with Smt. Lakshmi Prassanna
          </p>
          <div className="btn-group">
            <button className="btn btn-primary">Enroll Now</button>
            <button className="btn btn-secondary">Join Free Webinar</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section bg-white">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src="/designer.png" alt="Smt. Lakshmi Prassanna Gollapudi" />
              <div className="experience-badge">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', display: 'block' }}>15+</span>
                Years of Excellence
              </div>
            </div>
            <div className="about-content">
              <h2 className="section-title">Meet Your Mentor</h2>
              <div className="section-subtitle">Smt. Lakshmi Prassanna Gollapudi</div>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                A distinguished NIFT Hyderabad graduate with over a decade and a half of industry experience. 
                Lakshmi Prassanna has redefined fashion education by blending traditional craftsmanship with modern aesthetics.
              </p>
              <div className="quote-box">
                “When a woman becomes strong and independent, the entire family becomes strong.”
              </div>
              <p>
                As the founder of Prassannaa Fashion Designs and Institute, she is dedicated to empowering aspiring designers
                to turn their passion into a thriving career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="section" style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className="container">
          <h2 className="section-title">Our Programs</h2>
          <div className="section-subtitle">Start Your Journey</div>
          
          <div className="programs-grid">
            {/* 1 Month Course */}
            <div className="program-card">
              <div className="program-icon"><Scissors size={40} /></div>
              <h3>Fashion Foundation</h3>
              <div className="program-price">1 Month Crash Course</div>
              <p>Perfect for beginners looking to understand the basics.</p>
              <ul className="program-features">
                <li><ChevronRight size={16} /> Mode: Online / Offline</li>
                <li><ChevronRight size={16} /> Basic Sketching</li>
                <li><ChevronRight size={16} /> Fabric Science</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Register Now</button>
            </div>

            {/* 3 Month Course */}
            <div className="program-card">
              <div className="program-icon"><Palette size={40} /></div>
              <h3>Advanced Diplamo</h3>
              <div className="program-price">3 Months Intensive</div>
              <p>Dive deeper into pattern making and garment construction.</p>
              <ul className="program-features">
                <li><ChevronRight size={16} /> Mode: Online / Offline</li>
                <li><ChevronRight size={16} /> Advanced Pattern Making</li>
                <li><ChevronRight size={16} /> Portfolio Building</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Register Now</button>
            </div>

            {/* 6 Month Course */}
            <div className="program-card">
              <div className="program-icon"><GraduationCap size={40} /></div>
              <h3>Professional Masterclass</h3>
              <div className="program-price">6 Months Pro Program</div>
              <p>Complete industry-ready training with internship support.</p>
              <ul className="program-features">
                <li><ChevronRight size={16} /> Mode: Online / Offline</li>
                <li><ChevronRight size={16} /> Business of Fashion</li>
                <li><ChevronRight size={16} /> Full Collection Launch</li>
              </ul>
              <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Register Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section bg-white">
        <div className="container">
          <h2 className="section-title">Creative Showcase</h2>
          <div className="section-subtitle">Portfolio Gallery</div>

          <div className="portfolio-filter">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="portfolio-grid">
            {filteredPortfolio.map(item => (
              <div key={item.id} className="portfolio-item">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div style={{ textAlign: 'center', color: '#fff' }}>
                    <h3 style={{ color: '#fff' }}>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h3>Contact Us</h3>
              <ul className="footer-links">
                <li><Mail size={16} style={{display: 'inline', marginRight: '8px'}} /> contact@prassannafashion.com</li>
                <li><Phone size={16} style={{display: 'inline', marginRight: '8px'}} /> +91 98765 43210</li>
                <li>Hyderabad, Telangana, India</li>
              </ul>
            </div>
            
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul className="footer-links">
                <li><a href="#about">About Mentors</a></li>
                <li><a href="#programs">Courses</a></li>
                <li><a href="#portfolio">Student Work</a></li>
                <li><a href="#contact">Enquiry</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Follow Us</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem' }}>
                Stay updated with our latest designs and workshops.
              </p>
              <div className="social-links">
                <a href="#" className="social-icon"><Instagram size={20} /></a>
                <a href="#" className="social-icon"><Facebook size={20} /></a>
                <a href="#" className="social-icon"><Star size={20} /></a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            &copy; 2024 Prassannaa Fashion Designs and Institute Pvt. Ltd. All rights reserved.
          </div>
        </div>
      </footer>

      {/* WhatsApp Action */}
      <a href="https://wa.me/919876543210" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <MessageCircle size={30} />
      </a>
    </div>
  );
}

export default App;
