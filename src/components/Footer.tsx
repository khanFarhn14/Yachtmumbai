import { Anchor, Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";
import { BRAND_NAME, BRAND_EMAIL, BRAND_PHONE_PRIMARY } from "../config/brand";

export function Footer() {
  return (
    <footer className="py-16" style={{ backgroundColor: 'var(--neutral-900)', color: 'white' }}>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Anchor size={32} />
              <h4 className="m-0" style={{ color: 'white' }}>{BRAND_NAME}</h4>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', lineHeight: '1.6' }}>
              Experience luxury on the Arabian Sea with Mumbai's premier yacht and speed boat charter service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="mb-4" style={{ color: 'white' }}>Quick Links</h5>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li>
                <a href="#home" className="transition-colors duration-150 hover:text-[var(--primary-500)]" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '14px' }}>
                  Home
                </a>
              </li>
              <li>
                <a href="#fleet" className="transition-colors duration-150 hover:text-[var(--primary-500)]" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '14px' }}>
                  Our Fleet
                </a>
              </li>
              <li>
                <a href="#experiences" className="transition-colors duration-150 hover:text-[var(--primary-500)]" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '14px' }}>
                  Experiences
                </a>
              </li>
              <li>
                <a href="#safety" className="transition-colors duration-150 hover:text-[var(--primary-500)]" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '14px' }}>
                  Safety
                </a>
              </li>
              <li>
                <a href="#contact" className="transition-colors duration-150 hover:text-[var(--primary-500)]" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', fontSize: '14px' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="mb-4" style={{ color: 'white' }}>Services</h5>
            <ul className="space-y-2" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Luxury Yacht Charters</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Speed Boat Rentals</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Sunset Cruises</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Corporate Events</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Private Celebrations</li>
              <li style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Wedding Proposals</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h5 className="mb-4" style={{ color: 'white' }}>Connect With Us</h5>
            <div className="mb-4">
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px', marginBottom: '8px' }}>
                {BRAND_EMAIL}
              </p>
              <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>
                {BRAND_PHONE_PRIMARY}
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-150"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', margin: 0 }}>
              © 2024 {BRAND_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="transition-colors duration-150 hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', textDecoration: 'none' }}>
                Privacy Policy
              </a>
              <a href="#terms" className="transition-colors duration-150 hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', textDecoration: 'none' }}>
                Terms of Service
              </a>
              <a href="#safety" className="transition-colors duration-150 hover:text-white" style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '14px', textDecoration: 'none' }}>
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}