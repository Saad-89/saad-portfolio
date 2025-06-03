import React, { useState, useEffect, useRef } from 'react';
import styles from './ContactSection.module.css';

const ContactSection = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasAnimated && isInView()) {
        setHasAnimated(true);
      }
    };

    const isInView = () => {
      if (!sectionRef.current) return false;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const screenHeight = window.innerHeight;
      
      return rect.top < screenHeight * 0.8 && 
             rect.top > -rect.height * 0.3;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  // Simple input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter your email';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.subject.trim()) {
      errors.subject = 'Please enter a subject';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please enter your message';
    } else if (formData.message.length < 10) {
      errors.message = 'Message should be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const handleSocialClick = (platform) => {
    const urls = {
      linkedin: 'https://linkedin.com/in/yourprofile',
      github: 'https://github.com/yourusername',
      twitter: 'https://twitter.com/yourusername'
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.contactSection} ${hasAnimated ? styles.animated : ''}`}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.decorativeLine}></div>
          <h2 className={styles.title}>LET'S WORK TOGETHER</h2>
          <p className={styles.subtitle}>
            Have a project in mind? Let's discuss how we can bring your ideas to life. 
            I'm always open to new opportunities and collaborations.
          </p>
          <div className={styles.decorativeElements}>
            <div className={styles.decorator}></div>
            <div className={styles.dot}></div>
            <div className={styles.decorator}></div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact Information</h3>
            <p className={styles.contactDescription}>
              Feel free to reach out through any of these channels. 
              I typically respond within 24 hours.
            </p>

            <div className={styles.contactItems}>
              <div 
                className={`${styles.contactItem} ${styles.clickable}`}
                onClick={() => handleEmailClick('your.email@example.com')}
              >
                <div className={styles.contactItemIcon}>
                  <i className="fas fa-envelope"></i>
                </div>
                <div className={styles.contactItemContent}>
                  <h4>Email</h4>
                  <p>your.email@example.com</p>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
              
              <div 
                className={`${styles.contactItem} ${styles.clickable}`}
                onClick={() => handlePhoneClick('+15551234567')}
              >
                <div className={styles.contactItemIcon}>
                  <i className="fas fa-phone"></i>
                </div>
                <div className={styles.contactItemContent}>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
                <i className="fas fa-chevron-right"></i>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.contactItemIcon}>
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className={styles.contactItemContent}>
                  <h4>Location</h4>
                  <p>San Francisco, CA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className={styles.socialSection}>
              <h4>Follow Me</h4>
              <div className={styles.socialButtons}>
                <button 
                  className={styles.socialButton} 
                  onClick={() => handleSocialClick('linkedin')}
                >
                  <i className="fab fa-linkedin-in"></i>
                  <span>LinkedIn</span>
                </button>
                <button 
                  className={styles.socialButton} 
                  onClick={() => handleSocialClick('github')}
                >
                  <i className="fab fa-github"></i>
                  <span>GitHub</span>
                </button>
                <button 
                  className={styles.socialButton} 
                  onClick={() => handleSocialClick('twitter')}
                >
                  <i className="fab fa-twitter"></i>
                  <span>Twitter</span>
                </button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              <h3>Send Message</h3>
              
              {/* Name Field */}
              <div className={styles.formField}>
                <label htmlFor="name">Full Name</label>
                <div className={styles.inputWrapper}>
                  <i className="fas fa-user"></i>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={formErrors.name ? styles.error : ''}
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.name && (
                  <span className={styles.errorText}>{formErrors.name}</span>
                )}
              </div>
              
              {/* Email Field */}
              <div className={styles.formField}>
                <label htmlFor="email">Email Address</label>
                <div className={styles.inputWrapper}>
                  <i className="fas fa-envelope"></i>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={formErrors.email ? styles.error : ''}
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.email && (
                  <span className={styles.errorText}>{formErrors.email}</span>
                )}
              </div>
              
              {/* Subject Field */}
              <div className={styles.formField}>
                <label htmlFor="subject">Subject</label>
                <div className={styles.inputWrapper}>
                  <i className="fas fa-tag"></i>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this about?"
                    className={formErrors.subject ? styles.error : ''}
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.subject && (
                  <span className={styles.errorText}>{formErrors.subject}</span>
                )}
              </div>
              
              {/* Message Field */}
              <div className={styles.formField}>
                <label htmlFor="message">Message</label>
                <div className={styles.inputWrapper}>
                  <i className="fas fa-comment-alt"></i>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className={formErrors.message ? styles.error : ''}
                    disabled={isSubmitting}
                  />
                </div>
                {formErrors.message && (
                  <span className={styles.errorText}>{formErrors.message}</span>
                )}
              </div>

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className={styles.spinner}></div>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;