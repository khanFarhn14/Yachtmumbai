import image_04d5baf095a593d0b3013531a7e8b36807e689fa from 'figma:asset/04d5baf095a593d0b3013531a7e8b36807e689fa.png';
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { 
  Sailboat, 
  Ship, 
  Zap, 
  Star, 
  Users, 
  Anchor, 
  Wind, 
  Waves,
  ChevronDown,
  Check,
  Calendar,
  Clock,
  MapPin,
  Shield
} from "lucide-react";

const fleetData = [
  {
    id: "sailboats",
    name: "Sail Boats",
    tagline: "Traditional Elegance",
    icon: Sailboat,
    image: "https://images.unsplash.com/photo-1536084970624-b275a6a11673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWlsYm9hdCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: {
      description: "Experience the timeless charm of traditional sailing with our wooden deck sailboats. Perfect for intimate gatherings and peaceful cruising along Mumbai's coastline.",
      highlights: [
        "Classic sailing experience",
        "Intimate atmosphere",
        "Perfect for photography",
        "Eco-friendly option"
      ]
    },
    details: {
      capacity: {
        min: 6,
        max: 8,
        optimal: 6
      },
      specifications: [
        { label: "Length", value: "35-40 feet" },
        { label: "Beam", value: "12 feet" },
        { label: "Draft", value: "5 feet" },
        { label: "Cruising Speed", value: "6-8 knots" }
      ],
      features: [
        "Traditional teak wood decking",
        "Classic sail rigging",
        "Compact seating areas",
        "Basic galley facilities",
        "Safety equipment included",
        "Life jackets for all guests"
      ],
      amenities: [
        "Shaded seating area",
        "Basic refreshment service",
        "Bluetooth audio system",
        "Professional crew"
      ],
      idealFor: [
        "Couples and small groups",
        "Pre-wedding photoshoots",
        "Peaceful sunset cruises",
        "Romantic occasions",
        "Nature photography"
      ],
      pricing: {
        hourly: "₹8,000 - ₹12,000",
        halfDay: "₹35,000 - ₹45,000",
        fullDay: "₹60,000 - ₹75,000"
      }
    }
  },
  {
    id: "sailyachts",
    name: "Sail Yachts",
    tagline: "Sophisticated Luxury",
    icon: Ship,
    image: "https://images.unsplash.com/photo-1622431314984-2680c10607d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGlzb2xhdGVkJTIwY2xlYW58ZW58MXx8fHwxNzYzMDYyOTMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: {
      description: "Elevate your celebration with our spacious luxury sail yachts. Combining traditional sailing with modern amenities for an unforgettable experience.",
      highlights: [
        "Spacious deck areas",
        "Premium interiors",
        "Full catering facilities",
        "Entertainment ready"
      ]
    },
    details: {
      capacity: {
        min: 15,
        max: 35,
        optimal: 25
      },
      specifications: [
        { label: "Length", value: "50-65 feet" },
        { label: "Beam", value: "16 feet" },
        { label: "Draft", value: "6.5 feet" },
        { label: "Cruising Speed", value: "8-10 knots" }
      ],
      features: [
        "Spacious main deck with lounge seating",
        "Luxurious interior cabins",
        "Professional galley kitchen",
        "Multiple bathrooms",
        "Advanced navigation systems",
        "Emergency safety equipment"
      ],
      amenities: [
        "Air-conditioned interior spaces",
        "Premium sound system",
        "LED lighting setup",
        "Catering preparation area",
        "Bar counter",
        "Professional crew (Captain + 2 staff)"
      ],
      idealFor: [
        "Corporate events and team building",
        "Family celebrations",
        "Sunset dinner parties",
        "Wedding proposals",
        "Anniversary celebrations",
        "Birthday parties (mid-size groups)"
      ],
      pricing: {
        hourly: "₹25,000 - ₹35,000",
        halfDay: "₹1,20,000 - ₹1,50,000",
        fullDay: "₹2,20,000 - ₹2,75,000"
      }
    }
  },
  {
    id: "motoryachts",
    name: "Motor Yachts",
    tagline: "Ultimate Prestige",
    icon: Star,
    image: "https://images.unsplash.com/photo-1544962829-e313c26cf3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzA2MjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    overview: {
      description: "Experience the pinnacle of luxury with our modern motor yachts. State-of-the-art amenities, climate control, and opulent interiors for your most prestigious events.",
      highlights: [
        "Modern luxury design",
        "Climate controlled",
        "Premium amenities",
        "VIP experience"
      ]
    },
    details: {
      capacity: {
        min: 15,
        max: 25,
        optimal: 20
      },
      specifications: [
        { label: "Length", value: "55-70 feet" },
        { label: "Beam", value: "18 feet" },
        { label: "Draft", value: "4.5 feet" },
        { label: "Cruising Speed", value: "15-20 knots" }
      ],
      features: [
        "Contemporary interior design",
        "Multiple climate-controlled cabins",
        "Sundeck with lounge furniture",
        "Professional galley with modern appliances",
        "Master suite available",
        "Advanced stabilization systems"
      ],
      amenities: [
        "Full air conditioning throughout",
        "Premium audio-visual system",
        "Smart lighting control",
        "Luxury bathroom facilities",
        "Mini bar and wine cooler",
        "Dining area for formal meals",
        "Professional crew (Captain + 3 staff)",
        "Water sports equipment (on request)"
      ],
      idealFor: [
        "High-end corporate events",
        "Luxury birthday celebrations",
        "VIP client entertainment",
        "Exclusive private dinners",
        "Celebrity events",
        "Milestone celebrations"
      ],
      pricing: {
        hourly: "₹40,000 - ₹55,000",
        halfDay: "₹2,00,000 - ₹2,50,000",
        fullDay: "₹3,75,000 - ₹4,50,000"
      }
    }
  },
  {
    id: "speedboats",
    name: "Speed Boats",
    tagline: "Thrilling Adventure",
    icon: Zap,
    image: image_04d5baf095a593d0b3013531a7e8b36807e689fa,
    overview: {
      description: "Feel the adrenaline rush with our high-performance speed boats. Perfect for adventure seekers and quick coastal tours with style and excitement.",
      highlights: [
        "High-speed thrills",
        "Modern design",
        "Quick tours",
        "Adventure ready"
      ]
    },
    details: {
      capacity: {
        min: 6,
        max: 12,
        optimal: 8
      },
      specifications: [
        { label: "Length", value: "28-35 feet" },
        { label: "Beam", value: "10 feet" },
        { label: "Draft", value: "3 feet" },
        { label: "Top Speed", value: "35-45 knots" }
      ],
      features: [
        "Powerful twin engines",
        "Aerodynamic hull design",
        "Comfortable sport seating",
        "Open and shaded deck options",
        "GPS navigation",
        "Marine radio communication"
      ],
      amenities: [
        "Premium seating with safety harnesses",
        "Waterproof storage compartments",
        "Bluetooth sound system",
        "Safety equipment and life jackets",
        "Experienced captain",
        "Photography-friendly platforms"
      ],
      idealFor: [
        "Adventure enthusiasts",
        "Quick coastal sightseeing",
        "Island hopping tours",
        "Photography expeditions",
        "Small group celebrations",
        "Adrenaline experiences"
      ],
      pricing: {
        hourly: "₹10,000 - ₹15,000",
        halfDay: "₹45,000 - ₹60,000",
        fullDay: "₹85,000 - ₹1,10,000"
      }
    }
  }
];

export function FleetPage() {
  const [selectedBoat, setSelectedBoat] = useState(fleetData[0]);
  const [viewMode, setViewMode] = useState<"overview" | "details">("overview");

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--neutral-0)' }}>
      {/* Hero Section */}
      <section className="py-20 border-b" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--neutral-100)' }}>
              <Waves size={18} style={{ color: 'var(--primary-500)' }} />
              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-700)', letterSpacing: '0.03em' }}>
                PREMIUM FLEET COLLECTION
              </span>
            </div>
            
            <h1 className="mb-6" style={{ letterSpacing: '-0.02em' }}>
              Our Fleet
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--neutral-600)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              From intimate sailboats to luxury motor yachts, discover the perfect vessel for your Mumbai maritime experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Navigation */}
      <section className="py-8 sticky top-0 z-40" style={{ backgroundColor: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderBottom: '1px solid var(--neutral-200)' }}>
        <style>{`
          .fleet-nav-scroll::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="fleet-nav-scroll flex items-center justify-start md:justify-center gap-3 overflow-x-auto pb-2 md:pb-0 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {fleetData.map((boat) => {
              const Icon = boat.icon;
              const isActive = selectedBoat.id === boat.id;
              
              return (
                <motion.button
                  key={boat.id}
                  onClick={() => {
                    setSelectedBoat(boat);
                    setViewMode("overview");
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 md:px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 whitespace-nowrap flex-shrink-0"
                  style={{
                    backgroundColor: isActive ? 'var(--neutral-900)' : 'transparent',
                    color: isActive ? 'white' : 'var(--neutral-700)',
                    border: isActive ? 'none' : '1px solid var(--neutral-300)',
                    fontWeight: isActive ? 600 : 500,
                    fontSize: '14px',
                    cursor: 'pointer'
                  }}
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{boat.name}</span>
                  <span className="sm:hidden">{boat.name.split(' ')[0]}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedBoat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Boat Header */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-[4/3] relative rounded-2xl overflow-hidden" style={{ backgroundColor: 'var(--neutral-50)' }}>
                    <ImageWithFallback
                      src={selectedBoat.image}
                      alt={selectedBoat.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Floating capacity badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-4 -right-4 px-6 py-4 rounded-2xl"
                    style={{ backgroundColor: 'white', boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)' }}
                  >
                    <div className="flex items-center gap-3">
                      <Users size={24} style={{ color: 'var(--primary-500)' }} />
                      <div>
                        <div style={{ fontSize: '12px', color: 'var(--neutral-500)', fontWeight: 500 }}>
                          Capacity
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--neutral-900)' }}>
                          {selectedBoat.details.capacity.min}-{selectedBoat.details.capacity.max} Guests
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Info */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ backgroundColor: 'var(--primary-100)' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-700)', letterSpacing: '0.02em' }}>
                      {selectedBoat.tagline.toUpperCase()}
                    </span>
                  </div>
                  
                  <h2 className="mb-4" style={{ letterSpacing: '-0.02em' }}>
                    {selectedBoat.name}
                  </h2>
                  
                  <p className="mb-8" style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--neutral-600)' }}>
                    {selectedBoat.overview.description}
                  </p>

                  {/* Quick highlights */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {selectedBoat.overview.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                          <Check size={14} style={{ color: 'var(--primary-600)' }} />
                        </div>
                        <span style={{ fontSize: '14px', color: 'var(--neutral-700)', fontWeight: 500 }}>
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => setViewMode("overview")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-lg flex-1"
                      style={{
                        backgroundColor: viewMode === "overview" ? 'var(--neutral-900)' : 'var(--neutral-100)',
                        color: viewMode === "overview" ? 'white' : 'var(--neutral-700)',
                        fontWeight: 600,
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      Quick Overview
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setViewMode("details")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-lg flex-1"
                      style={{
                        backgroundColor: viewMode === "details" ? 'var(--neutral-900)' : 'var(--neutral-100)',
                        color: viewMode === "details" ? 'white' : 'var(--neutral-700)',
                        fontWeight: 600,
                        fontSize: '14px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                    >
                      Full Specifications
                    </motion.button>
                  </div>
                </motion.div>
              </div>

              {/* Detailed Information */}
              <AnimatePresence mode="wait">
                {viewMode === "details" && (
                  <motion.div
                    key="details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-t pt-16"
                    style={{ borderColor: 'var(--neutral-200)' }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                      {/* Specifications */}
                      <div>
                        <h4 className="mb-6 flex items-center gap-2">
                          <Anchor size={20} style={{ color: 'var(--primary-500)' }} />
                          Technical Specifications
                        </h4>
                        
                        <div className="space-y-4">
                          {selectedBoat.details.specifications.map((spec, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex justify-between items-center pb-3"
                              style={{ borderBottom: '1px solid var(--neutral-200)' }}
                            >
                              <span style={{ fontSize: '14px', color: 'var(--neutral-600)', fontWeight: 500 }}>
                                {spec.label}
                              </span>
                              <span style={{ fontSize: '14px', color: 'var(--neutral-900)', fontWeight: 600 }}>
                                {spec.value}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Pricing */}
                        <div className="mt-8 p-6 rounded-xl" style={{ backgroundColor: 'var(--neutral-50)' }}>
                          <h5 className="mb-4 flex items-center gap-2">
                            <Calendar size={18} style={{ color: 'var(--primary-500)' }} />
                            Pricing Guide
                          </h5>
                          
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span style={{ fontSize: '13px', color: 'var(--neutral-600)' }}>Hourly</span>
                              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                                {selectedBoat.details.pricing.hourly}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span style={{ fontSize: '13px', color: 'var(--neutral-600)' }}>Half Day (4-5 hrs)</span>
                              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                                {selectedBoat.details.pricing.halfDay}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span style={{ fontSize: '13px', color: 'var(--neutral-600)' }}>Full Day (8-10 hrs)</span>
                              <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                                {selectedBoat.details.pricing.fullDay}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Features & Amenities */}
                      <div>
                        <h4 className="mb-6 flex items-center gap-2">
                          <Star size={20} style={{ color: 'var(--primary-500)' }} />
                          Features & Amenities
                        </h4>
                        
                        <div className="space-y-6">
                          <div>
                            <h6 className="mb-3" style={{ fontSize: '14px', color: 'var(--neutral-500)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                              Core Features
                            </h6>
                            <div className="space-y-2">
                              {selectedBoat.details.features.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.04 }}
                                  className="flex items-start gap-2"
                                >
                                  <Check size={16} style={{ color: 'var(--primary-500)', marginTop: '2px', flexShrink: 0 }} />
                                  <span style={{ fontSize: '14px', color: 'var(--neutral-700)', lineHeight: '1.5' }}>
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h6 className="mb-3" style={{ fontSize: '14px', color: 'var(--neutral-500)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                              Premium Amenities
                            </h6>
                            <div className="space-y-2">
                              {selectedBoat.details.amenities.map((amenity, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.04 + 0.3 }}
                                  className="flex items-start gap-2"
                                >
                                  <Check size={16} style={{ color: 'var(--success)', marginTop: '2px', flexShrink: 0 }} />
                                  <span style={{ fontSize: '14px', color: 'var(--neutral-700)', lineHeight: '1.5' }}>
                                    {amenity}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Ideal For */}
                      <div>
                        <h4 className="mb-6 flex items-center gap-2">
                          <Shield size={20} style={{ color: 'var(--primary-500)' }} />
                          Perfect For
                        </h4>
                        
                        <div className="space-y-3 mb-8">
                          {selectedBoat.details.idealFor.map((use, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.06 }}
                              className="px-4 py-3 rounded-lg"
                              style={{ backgroundColor: 'var(--neutral-50)', border: '1px solid var(--neutral-200)' }}
                            >
                              <span style={{ fontSize: '14px', color: 'var(--neutral-700)', fontWeight: 500 }}>
                                {use}
                              </span>
                            </motion.div>
                          ))}
                        </div>

                        {/* CTA */}
                        <motion.a
                          href="#contact"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="block text-center px-8 py-4 rounded-lg"
                          style={{
                            backgroundColor: 'var(--primary-500)',
                            color: 'white',
                            fontWeight: 600,
                            fontSize: '15px',
                            textDecoration: 'none',
                            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)',
                            letterSpacing: '0.01em'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
                        >
                          Request This Yacht
                        </motion.a>

                        {/* Info boxes */}
                        <div className="mt-6 space-y-3">
                          <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--neutral-50)' }}>
                            <Clock size={18} style={{ color: 'var(--primary-500)' }} />
                            <div>
                              <div style={{ fontSize: '12px', color: 'var(--neutral-500)', fontWeight: 500 }}>
                                Booking Notice
                              </div>
                              <div style={{ fontSize: '13px', color: 'var(--neutral-900)', fontWeight: 600 }}>
                                48 hours minimum
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: 'var(--neutral-50)' }}>
                            <MapPin size={18} style={{ color: 'var(--primary-500)' }} />
                            <div>
                              <div style={{ fontSize: '12px', color: 'var(--neutral-500)', fontWeight: 500 }}>
                                Departure Point
                              </div>
                              <div style={{ fontSize: '13px', color: 'var(--neutral-900)', fontWeight: 600 }}>
                                Gateway of India
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4" style={{ letterSpacing: '-0.01em' }}>
              Need Help Choosing?
            </h3>
            
            <p className="mb-8 max-w-2xl mx-auto" style={{ fontSize: '17px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              Our experienced team will guide you to the perfect vessel based on your group size, occasion, and preferences
            </p>

            <div className="flex items-center justify-center gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-600)'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-500)'}
              >
                Speak with an Expert
              </motion.a>

              <motion.a
                href="tel:+919136364646"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--neutral-900)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '2px solid var(--neutral-300)',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                }}
              >
                Call Now
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}