import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BRAND_NAME } from "../config/brand";
import { Link } from "./Router";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[var(--neutral-0)] border-b border-[var(--neutral-200)] sticky top-0 z-[200]">
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <h4 className="m-0 cursor-pointer" style={{ color: 'var(--neutral-900)' }}>
                {BRAND_NAME}
              </h4>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="px-2 py-4 transition-colors duration-150 hover:text-[var(--primary-500)] active:text-[var(--primary-500)]"
              style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
            >
              Home
            </Link>
            <Link
              href="/fleet"
              className="px-2 py-4 transition-colors duration-150 hover:text-[var(--primary-500)]"
              style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
            >
              Our Fleet
            </Link>
            <a
              href="#experiences"
              className="px-2 py-4 transition-colors duration-150 hover:text-[var(--primary-500)]"
              style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
            >
              Experiences
            </a>
            <Link
              href="/safety-blog"
              className="px-2 py-4 transition-colors duration-150 hover:text-[var(--primary-500)]"
              style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
            >
              Safety
            </Link>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg transition-colors duration-150"
              style={{
                backgroundColor: 'var(--primary-500)',
                color: 'var(--neutral-0)',
                fontWeight: 500
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} style={{ color: 'var(--neutral-700)' }} />
            ) : (
              <Menu size={24} style={{ color: 'var(--neutral-700)' }} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-2 py-4 transition-colors duration-150"
                style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/fleet"
                className="px-2 py-4 transition-colors duration-150"
                style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Fleet
              </Link>
              <a
                href="#experiences"
                className="px-2 py-4 transition-colors duration-150"
                style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Experiences
              </a>
              <Link
                href="/safety-blog"
                className="px-2 py-4 transition-colors duration-150"
                style={{ color: 'var(--neutral-700)', fontWeight: 500 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Safety
              </Link>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg text-center"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'var(--neutral-0)',
                  fontWeight: 500
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
