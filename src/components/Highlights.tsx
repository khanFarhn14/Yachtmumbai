import image_a7c2d7e74cbbe797edd68a18e0b6ab8328ba7c46 from 'figma:asset/a7c2d7e74cbbe797edd68a18e0b6ab8328ba7c46.png';
import speedBoatImage from 'figma:asset/04d5baf095a593d0b3013531a7e8b36807e689fa.png';
import { Calendar, PartyPopper, Tag, Sunrise, Users, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";

const featuredTrips = [
  {
    id: 1,
    title: "Sunset Cruise",
    description: "Watch the sun set over the Arabian Sea from our premium yacht. Includes refreshments and music.",
    image: image_a7c2d7e74cbbe797edd68a18e0b6ab8328ba7c46,
    icon: Sunrise
  },
  {
    id: 2,
    title: "Speed Boat Adventure",
    description: "Experience the thrill of high-speed boating with our state-of-the-art speed boats.",
    image: speedBoatImage,
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
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = (trip) => {
    setSelectedTrip(trip);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setSelectedTrip(null);
    setIsOpen(false);
  };

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
                onClick={() => openDialog(trip)}
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
                      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.3) 40%, transparent 70%)'
                    }}
                  />
                  
                  {/* Content overlay - Only Title and Icon */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <h4 className="m-0" style={{ color: 'white', letterSpacing: '-0.01em' }}>{trip.title}</h4>
                      <Icon size={20} style={{ color: 'var(--primary-400)' }} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dialog */}
        <Dialog open={isOpen} onOpenChange={closeDialog}>
          <DialogContent className="max-w-2xl">
            {selectedTrip && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-3">
                    {(() => {
                      const Icon = selectedTrip.icon;
                      return <Icon size={28} style={{ color: 'var(--primary-500)' }} />;
                    })()}
                    <DialogTitle style={{ fontSize: '24px', margin: 0 }}>
                      {selectedTrip.title}
                    </DialogTitle>
                  </div>
                  <DialogDescription className="sr-only">
                    {selectedTrip.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4">
                  <div className="relative rounded-xl overflow-hidden mb-6" style={{ aspectRatio: '16/9' }}>
                    <ImageWithFallback
                      src={selectedTrip.image}
                      alt={selectedTrip.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <p style={{ fontSize: '16px', color: 'var(--neutral-600)', lineHeight: '1.7', marginBottom: '24px' }}>
                    {selectedTrip.description}
                  </p>
                  
                  <motion.button
                    onClick={() => {
                      const phoneNumber = '917666689265';
                      const message = encodeURIComponent(`Hi! I'd like to enquire about ${selectedTrip.title}.\nPlease share availability, pricing, and package details.`);
                      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
                      window.open(whatsappURL, '_blank');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full px-8 py-4 rounded-lg"
                    style={{
                      backgroundColor: 'var(--primary-500)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-600)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--primary-500)';
                    }}
                  >
                    Book Now via WhatsApp
                  </motion.button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}