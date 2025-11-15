import { Anchor, Ship, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { BRAND_TAGLINE } from "../config/brand";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1638791031609-ebe420711534?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyME11bWJhaSUyMG9jZWFufGVufDF8fHx8MTc2Mjg2MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury yacht in Mumbai waters"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <Anchor size={48} className="text-white" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mb-6" 
          style={{ color: 'white', fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: '1.2' }}
        >
          {BRAND_TAGLINE}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mb-12 max-w-2xl mx-auto" 
          style={{ color: 'white', fontSize: 'clamp(16px, 2vw, 18px)', lineHeight: '1.6' }}
        >
          Experience the Arabian Sea like never before. Premium yacht charters, sunset cruises, and unforgettable celebrations on Mumbai's pristine waters.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#experiences"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{
              backgroundColor: 'var(--primary-500)',
              color: 'var(--neutral-0)',
              fontWeight: 500,
              boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-600)';
              e.currentTarget.style.boxShadow = '0 20px 25px rgba(0, 0, 0, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-500)';
              e.currentTarget.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
            }}
          >
            <Ship size={20} />
            Book a Trip
          </motion.a>
          
          <motion.a
            href="#yachts"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: 500,
              border: '1px solid white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            Explore Yachts
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-lg transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            style={{
              backgroundColor: 'transparent',
              color: 'white',
              fontWeight: 500,
              border: '1px solid white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Phone size={20} />
            Contact Us
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}