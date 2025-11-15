import { Calendar, PartyPopper, Tag, Sunrise, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";

const featuredTrips = [
  {
    id: 1,
    title: "Sunset Cruise",
    description: "Watch the sun set over the Arabian Sea from our premium yacht. Includes refreshments and music.",
    image: "https://images.unsplash.com/photo-1642266351423-efa1b7ffe527?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMHN1bnNldCUyMG9jZWFufGVufDF8fHx8MTc2Mjg2MjkyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Sunrise
  },
  {
    id: 2,
    title: "Speed Boat Adventure",
    description: "Experience the thrill of high-speed boating with our state-of-the-art speed boats.",
    image: "https://images.unsplash.com/photo-1591115134458-d2ff7636b640?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlZCUyMGJvYXQlMjB3YXRlcnxlbnwxfHx8fDE3NjI4NjI5MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Award
  },
  {
    id: 3,
    title: "Private Party Yacht",
    description: "Celebrate your special moments with a fully customizable private yacht experience.",
    image: "https://images.unsplash.com/photo-1675686771689-b86e95c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMHBhcnR5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYyODYyOTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: PartyPopper
  },
  {
    id: 4,
    title: "Corporate Meetings & Events",
    description: "Host high-end business meetings and corporate events on our luxury yacht with state-of-the-art facilities for 2-100 people.",
    image: "https://images.unsplash.com/photo-1607144415124-701c6f774006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGJ1c2luZXNzJTIwbWVldGluZ3xlbnwxfHx8fDE3NjMwNTk1ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users
  },
  {
    id: 5,
    title: "Event Celebrations",
    description: "Make your special events unforgettable with our premium yacht celebration packages. Perfect for birthdays, milestones, and grand celebrations.",
    image: "https://images.unsplash.com/photo-1655791382989-f29fc44d88ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNlbGVicmF0aW9uJTIwcGFydHl8ZW58MXx8fHwxNzYzMDU5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: PartyPopper
  },
  {
    id: 6,
    title: "Anniversary Celebrations",
    description: "Celebrate your love story with a romantic anniversary cruise. Create intimate moments on the serene waters of Mumbai.",
    image: "https://images.unsplash.com/photo-1675686771689-b86e95c3d67a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGFubml2ZXJzYXJ5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzYzMDU5NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Sunrise
  }
];

export function Highlights() {
  return (
    <section id="experiences" className="py-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Featured Trips */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="mb-4">Featured Experiences</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-500)' }}>
            Choose from our curated selection of premium yacht and speed boat experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredTrips.map((trip, index) => {
            const Icon = trip.icon;
            return (
              <motion.div
                key={trip.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
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
                <div className="relative h-96">
                  <ImageWithFallback
                    src={trip.image}
                    alt={trip.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Dark gradient overlay */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 40%, transparent 70%)'
                    }}
                  />
                  
                  {/* Content overlay */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="m-0" style={{ color: 'white', letterSpacing: '-0.01em' }}>{trip.title}</h4>
                      <Icon size={20} style={{ color: 'var(--primary-400)' }} />
                    </div>
                    
                    <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '14px', letterSpacing: '0.01em' }}>
                      {trip.description}
                    </p>
                    
                    <motion.button
                      onClick={() => {
                        const phoneNumber = '917666689265';
                        const message = encodeURIComponent(`Hi! I'd like to enquire about ${trip.title}.\nPlease share availability, pricing, and package details.`);
                        const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                        window.open(whatsappURL, '_blank');
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 py-2.5 rounded-full"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '14px',
                        letterSpacing: '0.02em',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                        cursor: 'pointer'
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
                      Book Now +
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}