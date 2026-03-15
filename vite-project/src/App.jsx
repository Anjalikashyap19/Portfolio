// src/App.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './App.css';
import invest from './assets/invest.png'
import india from './assets/india.png'
import zeg from './assets/image.png'
function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const projects = [
    {
      title: 'Investcly',
      desc: 'Full-stack news & investment platform with real-time updates, authentication, categories, search and responsive UI.',
      tags: ['MERN', 'Tailwind'],
      img: invest,
      github: 'https://github.com/Anjalikashyap19/Investcly',
    },
    {
      title: 'AI Code Reviewer',
      desc: 'AI-powered tool that analyzes code, finds bugs, suggests refactoring, improves structure and detects security issues.',
      tags: ['AI', 'JS'],
      img: 'https://blog.logrocket.com/wp-content/uploads/2025/11/image28.png',
      github: 'https://github.com/Anjalikashyap19/AIcodereview',
    },
    {
      title: 'AI Website Builder',
      desc: 'Generate complete responsive frontend websites from natural language prompts using AI.',
      tags: ['AI', 'Frontend'],
      img: 'https://www.webcrumbs.ai/static/media/screenshot@2x.f55292a8e294ab1ad9c6.png',
      github: 'https://github.com/Anjalikashyap19/AIwebsitebuilder',
    },
    {
      title: 'Zegnite',
      desc: 'Modern service-based website with smooth animations, clean design and excellent performance.',
      tags: ['React', 'Tailwind'],
      img: zeg,
      github: 'https://github.com/Anjalikashyap19/Zegnite-',
    },
    {
      title: 'IndiaAdvocacy.com',
      desc: 'Professional service website with intuitive navigation, forms and responsive layout.',
      tags: ['Fullstack', 'service functionality'],
      img: india,
      github: 'https://github.com/Anjalikashyap19/IADVC',
    },
  ];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className="container">
          <div className="logo-container">
            <div className="logo">Ak</div>
            <span className="logo-text font-heading">Anjali</span>
          </div>

          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link">
                {item.name}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href="/public/akresume.pdf"
               download
              className="resume-btn"
             
              
            >
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Resume
            </a>

            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <XMarkIcon style={{ width: '2rem', height: '2rem' }} /> : <Bars3Icon style={{ width: '2rem', height: '2rem' }} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mobile-menu"
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Resume download!');
                  }}
                  className="mobile-resume"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero */}
      <section id="home">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="opportunity-badge"
          >
            <div className="pulse-dot" />
            Open to new opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-heading"
          >
            Anjali<br />Kumari
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="role"
          >
            Full Stack Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="tagline"
          >
            Building modern, scalable web applications with MERN stack, AI-powered tools, clean architecture and great user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="cta-container"
          >
            <a href="#projects" className="cta-primary">
              View Projects
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            <a href="#contact" className="cta-secondary">
              Let's Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="social-icons"
          >
            <a href="https://github.com/Anjalikashyap19" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/anjali-kumar-24140b279/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-section">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '1152px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}
        >
          <h2 className="font-heading">
            Turning ideas into <span style={{ color: 'var(--accent)' }}>beautiful reality</span>
          </h2>

          <p style={{ fontSize: '1.25rem', lineHeight: '2', color: '#d1d5db', maxWidth: '64rem', margin: '2rem auto 0' }}>
            Hi, I'm Anjali — a passionate full-stack developer from Chennai. I love crafting performant web apps, experimenting with AI tools, and writing clean, maintainable code.
          </p>

          <p style={{ fontSize: '1.25rem', lineHeight: '2', color: '#d1d5db', maxWidth: '64rem', margin: '2rem auto 0' }}>
            My focus: MERN stack, responsive design, secure APIs, intelligent features and delightful user experiences.
          </p>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-title">
            <span className="badge">TOOLKIT</span>
            <h2 className="font-heading" style={{ marginTop: '1.5rem' }}>
              Technologies I Work With
            </h2>
          </div>

          <div className="skill-grid">
            {[
              { icon: '🌐', name: 'MERN Stack' },
              { icon: '🟢', name: 'MongoDB' },
              { icon: '🚂', name: 'Express' },
              { icon: '⚛️', name: 'React' },
              { icon: '☕', name: 'Java' },
              { icon: '🔧', name: 'C++' },
              { icon: '🟨', name: 'JavaScript' },
              { icon: '🐙', name: 'Git & GitHub' },
              { icon: '🗄️', name: 'SQL' },
              { icon: '🎨', name: 'Tailwind CSS' },
              { icon: '📬', name: 'Postman' },
              { icon: '🖥️', name: 'HTML & CSS' },
            ].map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="skill-card"
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3 className="skill-name">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-section">
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="section-title">
            <span className="badge">PORTFOLIO</span>
            <h2 className="font-heading" style={{ marginTop: '1.5rem' }}>
              Featured Work
            </h2>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="project-card"
              >
                <div className="project-img-container">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="project-img"
                  />
                </div>
                <div className="project-content">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
                  >
                    View on GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div style={{ maxWidth: '768px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading"
            style={{ fontSize: '3.75rem', marginBottom: '1.5rem' }}
          >
            Let's build something <span style={{ color: 'var(--accent)' }}>amazing</span>
          </motion.h2>

          <p style={{ fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '3rem' }}>
            Have an idea or just want to say hi? Drop me a message!
          </p>

          <form className="glass">
            <div className="form-grid">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Anjali Kumari" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="hello@anjali.dev" required />
              </div>
            </div>

            <div>
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="Hi Anjali, I really liked your AI Code Reviewer project..."
              />
            </div>

            <button type="submit" className="submit-btn">
              Send Message
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>

          <p style={{ marginTop: '2.5rem', color: '#71717a' }}>
            Or email directly:{' '}
            <a
              href="mailto:anjalikshayap@gmail.com"
              style={{ color: 'var(--accent)', textDecoration: 'none' }}
            >
             anjalikshayap@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="social-footer">
            <a href="https://github.com/Anjalikashyap19" target="_blank"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/anjali-kumar-24140b279/" target="_blank"><i className="fab fa-linkedin"></i></a>
          </div>
          <p>© {new Date().getFullYear()} Anjali Kumari • Built with React & passion</p>
        </div>
      </footer>
    </div>
  );
}

export default App;