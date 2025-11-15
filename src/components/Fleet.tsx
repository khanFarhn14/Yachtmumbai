import { Sailboat, Ship, Zap, Users, Waves, Star, Anchor } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import primePickIcon from "figma:asset/3260f55d7c5905dcacf2b7870e4a8f4431157f54.png";

const boats = [
  {
    id: 1,
    name: "Sail Boats",
    capacity: "6-8",
    capacityLabel: "Guests",
    icon: Sailboat,
    featured: false,
    stats: [
      { label: "Traditional sailing", icon: Sailboat },
      { label: "Wooden decks", icon: Anchor }
    ],
    idealFor: "Couples, small groups, peaceful cruising, pre-wedding photoshoots",
    image: "https://images.unsplash.com/photo-1605472074915-e1406eda66bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWlsYm9hdCUyMHdvb2RlbiUyMGRlY2t8ZW58MXx8fHwxNzYzMDU5MTYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    name: "Sail Yachts",
    capacity: "15-35",
    capacityLabel: "Guests",
    icon: Ship,
    featured: true,
    stats: [
      { label: "Luxury interiors", icon: Star },
      { label: "Gourmet kitchens", icon: Anchor }
    ],
    idealFor: "Corporate parties, sunset dinners, family gatherings, special occasions",
    image: "https://images.unsplash.com/photo-1676210092147-364983b3eae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWlsaW5nJTIweWFjaHR8ZW58MXx8fHwxNzYzMDU5MTYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    name: "Motor Yachts",
    capacity: "15-25",
    capacityLabel: "Guests",
    icon: Star,
    featured: true,
    stats: [
      { label: "Air-conditioned", icon: Star },
      { label: "Multiple rooms", icon: Anchor }
    ],
    idealFor: "Birthday parties, high-end private dinners, luxury events",
    image: "https://images.unsplash.com/photo-1734410308581-f6d5d5ed7286?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwbHV4dXJ5fGVufDF8fHx8MTc2MzA1OTE2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    name: "Speed Boats",
    capacity: "6-12",
    capacityLabel: "Guests",
    icon: Zap,
    featured: false,
    stats: [
      { label: "Fast & thrilling", icon: Zap },
      { label: "Open deck", icon: Anchor }
    ],
    idealFor: "Adventure seekers, short sea rides, quick city coastal tours",
    image: "https://images.unsplash.com/photo-1701238403993-a5f8ffe10446?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMGJvYXQlMjBvY2VhbnxlbnwxfHx8fDE3NjMwNDIwOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Fleet() {
  return (
    <section id="fleet" className="py-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="mb-4" style={{ fontSize: '36px', fontWeight: 700, lineHeight: '1.3', color: 'var(--neutral-900)' }}>Our Fleet</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-500)' }}>
            Choose from our diverse collection of vessels, each designed for unique experiences on Mumbai's beautiful waters
          </p>
        </motion.div>

        {/* Boats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {boats.map((boat, index) => {
            const Icon = boat.icon;
            return (
              <motion.div
                key={boat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  willChange: 'transform'
                }}
              >
                <div className="relative h-[500px]">
                  <ImageWithFallback
                    src={boat.image}
                    alt={boat.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark gradient overlay with progressive blur */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 35%, transparent 65%)',
                      backdropFilter: 'blur(0px)',
                      WebkitBackdropFilter: 'blur(0px)'
                    }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, transparent 100%)',
                      backdropFilter: 'blur(2px) saturate(1.2)',
                      WebkitBackdropFilter: 'blur(2px) saturate(1.2)',
                      maskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 70%)',
                      WebkitMaskImage: 'linear-gradient(to top, black 0%, black 40%, transparent 70%)'
                    }}
                  />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="m-0 mb-2" style={{ color: 'white', letterSpacing: '-0.02em' }}>
                      {boat.name}
                    </h3>
                    
                    <div className="mb-3">
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)', fontWeight: 500 }}>
                        Capacity: {boat.capacity} {boat.capacityLabel}
                      </span>
                    </div>
                    
                    <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '13px', lineHeight: '1.5' }}>
                      {boat.idealFor}
                    </p>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-6 mb-5">
                      {boat.stats.map((stat, idx) => {
                        const StatIcon = stat.icon;
                        return (
                          <div key={idx} className="flex items-center gap-2">
                            <StatIcon size={16} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
                            <span style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                              {stat.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    {/* Book Now Button */}
                    <motion.button
                      onClick={() => {
                        const phoneNumber = '919920088515';
                        let message = '';
                        
                        // Customize message based on boat type
                        if (boat.name === 'Sail Boats') {
                          message = encodeURIComponent(`Hi! I'd like to enquire about booking a Sail Boat (Capacity: 6–8 guests).\nPlease share availability, pricing, and timings.`);
                        } else if (boat.name === 'Sail Yachts') {
                          message = encodeURIComponent(`Hi! I'd like details for the Sail Yacht (Capacity: 15–35 guests).\nI'm planning a corporate/sunset/family event.\nKindly send availability, pricing, and package options.`);
                        } else if (boat.name === 'Motor Yachts') {
                          message = encodeURIComponent(`Hi! I want to book a Motor Yacht (Capacity: 15–25 guests).\nPlease share available dates, pricing, and inclusions.`);
                        } else if (boat.name === 'Speed Boats') {
                          message = encodeURIComponent(`Hi! I'm interested in booking a Speed Boat (Capacity: 6–12 guests).\nPlease send pricing and available time slots.`);
                        } else {
                          message = encodeURIComponent(`Hi, I wanted to enquire about ${boat.name}`);
                        }
                        
                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(whatsappURL, '_blank');
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="inline-block px-6 py-3 rounded-lg cursor-pointer border-0"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '14px',
                        textDecoration: 'none',
                        letterSpacing: '0.01em',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      }}
                    >
                      Book Now
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center p-8 rounded-xl relative overflow-hidden" 
          style={{ border: '1px solid var(--neutral-200)' }}
        >
          {/* Background with blur */}
          <div 
            className="absolute inset-0" 
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
          />
          
          {/* Content */}
          <div className="relative z-10">
            <h4 className="mb-3" style={{ color: 'var(--neutral-900)' }}>
              Not Sure Which Boat to Choose?
            </h4>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--neutral-500)' }}>
              Our team will help you select the perfect vessel based on your group size, occasion, and preferences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-block px-8 py-3 rounded-lg w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'var(--neutral-0)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  boxShadow: '0 2px 8px rgba(99, 102, 241, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
              >
                Get Expert Advice
              </motion.a>

              <motion.a
                href="#fleet-gallery"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-block px-8 py-3 rounded-lg w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--neutral-900)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  border: '2px solid var(--neutral-300)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.borderColor = 'var(--neutral-400)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                  e.currentTarget.style.borderColor = 'var(--neutral-300)';
                }}
              >
                View Complete Fleet Gallery
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}