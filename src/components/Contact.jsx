import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, Loader2, CheckCircle, AlertCircle, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';
import TextReveal from './TextReveal';
import TiltCard from './TiltCard';
import StaggerContainer from './StaggerContainer';
import GradientOrb from './GradientOrb';
import MagneticButton from './MagneticButton';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey ||
          serviceId === 'your_service_id' ||
          templateId === 'your_template_id' ||
          publicKey === 'your_public_key') {
        throw new Error('EmailJS credentials not configured. Please set up your .env file with valid EmailJS credentials.');
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );
      
      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-indigo-500/20 to-violet-500/20'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Surat, Gujarat, India',
      href: '#',
      color: 'from-violet-500/20 to-pink-500/20'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: `github.com/${personalInfo.github.split('/').pop()}`,
      href: personalInfo.github,
      color: 'from-pink-500/20 to-rose-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: `linkedin.com/in/${personalInfo.linkedin.split('/').pop()}`,
      href: personalInfo.linkedin,
      color: 'from-rose-500/20 to-orange-500/20'
    }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-40 overflow-hidden">
      {/* Section Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
      
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb 
          color="violet" 
          size={400} 
          blur={100} 
          opacity={0.1}
          className="top-1/4 -left-20"
        />
        <GradientOrb 
          color="indigo" 
          size={350} 
          blur={90} 
          opacity={0.08}
          className="bottom-1/4 -right-10"
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header with TextReveal */}
        <div className="text-center mb-20">
          <motion.span 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-violet-400 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </motion.span>
          
          <TextReveal 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-6 font-display"
            splitBy="words"
          >
            Let's Work Together
          </TextReveal>
          
          <TextReveal 
            className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl mx-auto"
            splitBy="words"
            delay={0.2}
          >
            Have a project in mind or want to connect? I'd love to hear from you and discuss opportunities.
          </TextReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="glass-premium rounded-3xl p-8 md:p-10" tiltStrength={3}>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] font-display">Send a Message</h3>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3.5 rounded-xl glass-card border ${errors.name ? 'border-red-500' : 'border-[var(--glass-border)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10`}
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1.5 block">{errors.name}</span>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3.5 rounded-xl glass-card border ${errors.email ? 'border-red-500' : 'border-[var(--glass-border)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10`}
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1.5 block">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Collaboration"
                    className={`w-full px-4 py-3.5 rounded-xl glass-card border ${errors.subject ? 'border-red-500' : 'border-[var(--glass-border)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10`}
                  />
                  {errors.subject && (
                    <span className="text-red-400 text-xs mt-1.5 block">{errors.subject}</span>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-muted)] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3.5 rounded-xl glass-card border ${errors.message ? 'border-red-500' : 'border-[var(--glass-border)]'} text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-500 transition-all duration-300 focus:shadow-lg focus:shadow-indigo-500/10 resize-none`}
                  />
                  {errors.message && (
                    <span className="text-red-400 text-xs mt-1.5 block">{errors.message}</span>
                  )}
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                  >
                    <CheckCircle size={20} />
                    <span className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                  >
                    <AlertCircle size={20} />
                    <span className="text-sm font-medium">Failed to send message. Please try again or email me directly.</span>
                  </motion.div>
                )}

                <MagneticButton strength={0.15}>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 btn-premium rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </MagneticButton>
              </form>
            </TiltCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-display">Contact Information</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                Feel free to reach out through any of these channels. I'm always open to discussing new projects, creative ideas, or opportunities to collaborate.
              </p>
            </div>

            <StaggerContainer 
              className="space-y-4"
              stagger={0.1}
              delay={0.2}
              childSelector=".contact-item"
            >
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="contact-item flex items-center gap-5 p-5 rounded-2xl glass-card group cursor-default"
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-muted)] mb-0.5">{item.label}</div>
                    <div className="text-[var(--text-primary)] font-semibold group-hover:text-indigo-400 transition-colors">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </StaggerContainer>

            {/* Quick Response Promise */}
            <motion.div 
              className="glass-premium rounded-2xl p-6 mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="font-semibold text-[var(--text-primary)] font-display">Quick Response</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                please reach out via email or LinkedIn.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
