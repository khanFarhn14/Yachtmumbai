import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";
import { BRAND_EMAIL, BRAND_EMAIL_BOOKINGS, BRAND_PHONE_PRIMARY, BRAND_PHONE_SECONDARY } from "../config/brand";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: "",
      guests: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24" style={{ backgroundColor: 'var(--neutral-0)' }}>
      <div className="max-w-[1280px] mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Get In Touch</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-500)' }}>
            Ready to embark on an unforgettable journey? Contact us to book your luxury yacht experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-11 px-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--neutral-300)',
                    backgroundColor: 'var(--neutral-0)',
                    fontSize: '16px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-500)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--neutral-300)';
                  }}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2"
                    style={{
                      border: '1px solid var(--neutral-300)',
                      backgroundColor: 'var(--neutral-0)',
                      fontSize: '16px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-500)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--neutral-300)';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2"
                    style={{
                      border: '1px solid var(--neutral-300)',
                      backgroundColor: 'var(--neutral-0)',
                      fontSize: '16px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-500)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--neutral-300)';
                    }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="date" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full h-11 px-3 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2"
                    style={{
                      border: '1px solid var(--neutral-300)',
                      backgroundColor: 'var(--neutral-0)',
                      fontSize: '16px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-500)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--neutral-300)';
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="guests" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full h-11 pl-3 pr-12 rounded-lg transition-all duration-150 focus:outline-none focus:ring-2"
                    style={{
                      border: '1px solid var(--neutral-300)',
                      backgroundColor: 'var(--neutral-0)',
                      fontSize: '16px'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--primary-500)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'var(--neutral-300)';
                    }}
                  >
                    <option value="">Select...</option>
                    <option value="1-5">1-5 guests</option>
                    <option value="6-10">6-10 guests</option>
                    <option value="11-15">11-15 guests</option>
                    <option value="16-20">16-20 guests</option>
                    <option value="20+">20+ guests</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2" style={{ fontSize: '14px', fontWeight: 500, color: 'var(--neutral-700)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your ideal yacht experience..."
                  className="w-full px-3 py-3 rounded-lg transition-all duration-150 resize-y focus:outline-none focus:ring-2"
                  style={{
                    border: '1px solid var(--neutral-300)',
                    backgroundColor: 'var(--neutral-0)',
                    fontSize: '16px',
                    minHeight: '120px'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-500)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'var(--neutral-300)';
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg transition-colors duration-150 flex items-center justify-center gap-2"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'var(--neutral-0)',
                  fontWeight: 500
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
              >
                <Send size={20} />
                Send Inquiry
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-br from-[var(--primary-500)] to-[var(--primary-700)] rounded-xl p-8 text-white h-full">
              <h3 className="mb-6" style={{ color: 'white' }}>Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="m-0" style={{ fontWeight: 600, color: 'white' }}>Location</p>
                    <p className="m-0 mt-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Gateway of India,<br />
                      Apollo Bandar, Colaba,<br />
                      Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="m-0" style={{ fontWeight: 600, color: 'white' }}>Phone</p>
                    <p className="m-0 mt-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {BRAND_PHONE_PRIMARY}<br />
                      {BRAND_PHONE_SECONDARY}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="m-0" style={{ fontWeight: 600, color: 'white' }}>Email</p>
                    <p className="m-0 mt-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      {BRAND_EMAIL}<br />
                      {BRAND_EMAIL_BOOKINGS}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="m-0" style={{ fontWeight: 600, color: 'white' }}>Operating Hours</p>
                    <p className="m-0 mt-1" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                      Monday - Sunday: 7:00 AM - 10:00 PM<br />
                      24/7 Emergency Support
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}>
                <p className="m-0" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  We respond to all inquiries within 24 hours. For urgent bookings, please call us directly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}