import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Link } from "./Router";
import { Sailboat, Ship, Star, Zap, Users, MapPin } from "lucide-react";
import image_209caba74bc25783951bf8ae2f719d50bfa393f9 from 'figma:asset/209caba74bc25783951bf8ae2f719d50bfa393f9.png';
import image_04d5baf095a593d0b3013531a7e8b36807e689fa from 'figma:asset/04d5baf095a593d0b3013531a7e8b36807e689fa.png';

const boats = [
  {
    id: 1,
    name: "Sail Boats",
    tagline: "Traditional Elegance",
    description: "Experience the timeless charm of traditional sailing. Perfect for intimate gatherings and peaceful cruising along Mumbai's coastline.",
    capacity: "6-8 Guests",
    icon: Sailboat,
    image: "https://images.unsplash.com/photo-1536084970624-b275a6a11673?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzYWlsYm9hdCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Classic sailing experience",
      "Intimate atmosphere",
      "Perfect for photography"
    ]
  },
  {
    id: 2,
    name: "Sail Yachts",
    tagline: "Sophisticated Luxury",
    description: "Elevate your celebration with our spacious luxury sail yachts. Combining traditional sailing with modern amenities for an unforgettable experience.",
    capacity: "15-35 Guests",
    icon: Ship,
    image: image_209caba74bc25783951bf8ae2f719d50bfa393f9,
    highlights: [
      "Spacious deck areas",
      "Premium interiors",
      "Full catering facilities"
    ]
  },
  {
    id: 3,
    name: "Motor Yachts",
    tagline: "Ultimate Prestige",
    description: "Experience the pinnacle of luxury with our modern motor yachts. State-of-the-art amenities, climate control, and opulent interiors.",
    capacity: "15-25 Guests",
    icon: Star,
    image: "https://images.unsplash.com/photo-1544962829-e313c26cf3ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvciUyMHlhY2h0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2MzA2MjkzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    highlights: [
      "Modern luxury design",
      "Climate controlled",
      "VIP experience"
    ]
  },
  {
    id: 4,
    name: "Speed Boats",
    tagline: "Thrilling Adventure",
    description: "Feel the adrenaline rush with our high-performance speed boats. Perfect for adventure seekers and quick coastal tours.",
    capacity: "6-12 Guests",
    icon: Zap,
    image: image_04d5baf095a593d0b3013531a7e8b36807e689fa,
    highlights: [
      "High-speed thrills",
      "Modern design",
      "Adventure ready"
    ]
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
                  
                  {/* Gradient Overlay - Bottom to Top */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0) 100%)'
                    }}
                  />
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)', backdropFilter: 'blur(10px)' }}
                      >
                        <Icon size={28} />
                      </div>
                      <div>
                        <h3 className="mb-0" style={{ fontSize: '28px', color: 'white' }}>{boat.name}</h3>
                        <p className="mb-0" style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.8)' }}>{boat.tagline}</p>
                      </div>
                    </div>
                    
                    <p 
                      className="mb-4 line-clamp-2" 
                      style={{ 
                        fontSize: '15px', 
                        lineHeight: '1.6', 
                        color: 'rgba(255, 255, 255, 0.9)',
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {boat.description}
                    </p>

                    <div className="flex items-center gap-2">
                      <Users size={18} style={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                      <span style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.9)', fontWeight: 500 }}>
                        {boat.capacity}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div 
            className="inline-block px-12 py-8 rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%)',
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.25)'
            }}
          >
            <h3 className="mb-3" style={{ color: 'white', fontSize: '24px' }}>
              Ready to Set Sail?
            </h3>
            <p className="mb-6 max-w-xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '15px', lineHeight: '1.6' }}>
              Choose your perfect vessel and create unforgettable memories on Mumbai's stunning waters. Expert crew, luxury amenities, and exceptional service await.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="inline-block px-8 py-3 rounded-lg w-full sm:w-auto text-center"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'white',
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

              <Link href="/fleet">
                <motion.div
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
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                    cursor: 'pointer'
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
                  View Full Fleet Gallery
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}