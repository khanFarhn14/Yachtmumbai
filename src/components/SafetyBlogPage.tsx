import { Shield, AlertTriangle, Heart, Users, Anchor, LifeBuoy, CheckCircle, Info, Book, ArrowLeft, Award, Briefcase, Ship, Wind, Sun, Utensils, PackageCheck, AlertCircle, Phone, Clock, Activity } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const experienceStats = [
  {
    id: 1,
    number: "7+",
    label: "Years in Business",
    icon: Award
  },
  {
    id: 2,
    number: "2,000+",
    label: "Happy Passengers",
    icon: Heart
  },
  {
    id: 3,
    number: "100%",
    label: "Safety Record",
    icon: Shield
  }
];

const safetyFeatures = [
  {
    id: 1,
    icon: LifeBuoy,
    title: "Life-Saving Equipment",
    description: "Coast Guard approved life jackets for every passenger, including specially sized jackets for children. Premium fiber-reinforced life buoy rings strategically positioned throughout the vessel.",
    image: "https://images.unsplash.com/photo-1758716147082-c2d332b1aed9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWZlJTIwamFja2V0JTIwc2FmZXR5JTIwZXF1aXBtZW50fGVufDF8fHx8MTc2MzE4NjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    icon: Users,
    title: "Expert Crew",
    description: "Our crew members are professionally trained in swimming, water safety, and emergency response. Every captain holds a valid license from the Directorate General of Shipping with years of experience.",
    image: "https://images.unsplash.com/photo-1587728409203-97f284c580fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNhcHRhaW4lMjBjcmV3fGVufDF8fHx8MTc2MzE4NjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    icon: Activity,
    title: "Medical Preparedness",
    description: "Comprehensive first aid kits with essential medical supplies on every vessel. At least one crew member is trained and certified in first aid and CPR on each trip.",
    image: "https://images.unsplash.com/photo-1564144573017-8dc932e0039e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXJzdCUyMGFpZCUyMGtpdCUyMGVtZXJnZW5jeXxlbnwxfHx8fDE3NjMxMTIzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 4,
    icon: Wind,
    title: "Weather Monitoring",
    description: "Real-time weather updates from the Indian Meteorological Department. We never compromise on safety - if conditions aren't perfect, we reschedule at no cost to you.",
    image: "https://images.unsplash.com/photo-1661696005376-337e401d8571?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHNhaWxpbmclMjB3ZWF0aGVyfGVufDF8fHx8MTc2MzE4NjU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    icon: Ship,
    title: "Regular Maintenance",
    description: "Every vessel undergoes daily pre-departure inspections and regular comprehensive maintenance. All vessels are certified by the Indian Coast Guard with current safety certificates.",
    image: "https://images.unsplash.com/photo-1645932647969-6a92e3d6667f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2F0JTIwbWFpbnRlbmFuY2UlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc2MzE4NjU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    icon: Book,
    title: "Safety Briefing",
    description: "Before every departure, our crew conducts a thorough safety briefing covering emergency procedures, life jacket usage, and important dos and don'ts for your journey.",
    image: "https://images.unsplash.com/photo-1634326080825-985cfc816db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjBicmllZmluZyUyMG1lZXRpbmd8ZW58MXx8fHwxNjMxODY1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const customerGuidelines = [
  {
    id: 1,
    category: "Before You Board",
    icon: PackageCheck,
    tips: [
      {
        title: "Arrive Early",
        description: "Please arrive 15 minutes before departure time for check-in and safety briefing"
      },
      {
        title: "Dress Comfortably",
        description: "Wear comfortable, non-slip footwear and bring a light jacket for evening breezes"
      },
      {
        title: "Inform Health Conditions",
        description: "Let our crew know about any medical conditions, allergies, or pregnancy at check-in"
      },
      {
        title: "Check Weather Updates",
        description: "We'll contact you if there are any weather-related changes to your booking"
      }
    ]
  },
  {
    id: 2,
    category: "On Board Behavior",
    icon: Users,
    tips: [
      {
        title: "Stay Seated While Moving",
        description: "Remain seated when the vessel is in motion, especially during acceleration or turns"
      },
      {
        title: "Hold Railings",
        description: "Always use handrails when moving around the vessel, especially in rough waters"
      },
      {
        title: "Avoid Edges",
        description: "Please don't stand at the edge of the vessel or lean over railings, especially with children"
      },
      {
        title: "Follow Crew Instructions",
        description: "Our crew's instructions are for your safety - please follow them promptly and completely"
      },
      {
        title: "Supervise Children",
        description: "Children under 12 must be supervised by an adult at all times. Life jackets are mandatory for kids"
      },
      {
        title: "No Diving or Swimming",
        description: "Swimming is only permitted when the vessel is anchored and with crew supervision"
      }
    ]
  },
  {
    id: 3,
    category: "Dietary Recommendations",
    icon: Utensils,
    tips: [
      {
        title: "Eat Light Before Boarding",
        description: "Have a light meal 1-2 hours before departure. Avoid heavy, greasy, or spicy foods"
      },
      {
        title: "Stay Hydrated",
        description: "Drink plenty of water before and during the trip. Dehydration can worsen seasickness"
      },
      {
        title: "Avoid Strong Odors",
        description: "Skip strong-smelling foods like fish or garlic before sailing - they can trigger nausea"
      },
      {
        title: "Limit Alcohol",
        description: "Excessive alcohol consumption affects balance and can increase seasickness. Drink responsibly"
      },
      {
        title: "Ginger Helps",
        description: "Ginger tea, ginger candy, or ginger tablets can help prevent and reduce seasickness naturally"
      },
      {
        title: "Fresh Air",
        description: "If feeling queasy, stay on deck in fresh air and focus on the horizon. Avoid staying in enclosed spaces"
      }
    ]
  },
  {
    id: 4,
    category: "What to Bring",
    icon: PackageCheck,
    tips: [
      {
        title: "Sun Protection",
        description: "Sunscreen (reef-safe preferred), sunglasses, and a hat - the sun reflects strongly off the water"
      },
      {
        title: "Motion Sickness Remedies",
        description: "Bring seasickness medication if you're prone to motion sickness (take 30 minutes before departure)"
      },
      {
        title: "Personal Medications",
        description: "Bring any personal medications you may need during the trip"
      },
      {
        title: "Waterproof Bag",
        description: "A waterproof pouch or bag for electronics and valuables to protect from water spray"
      },
      {
        title: "Light Jacket",
        description: "Even on warm days, it can get breezy on the water, especially during sunset cruises"
      }
    ]
  }
];

const emergencyProtocols = [
  {
    id: 1,
    icon: AlertCircle,
    title: "Man Overboard",
    description: "Immediate crew alert, life ring deployment, visual contact maintained, controlled vessel return, Coast Guard coordination"
  },
  {
    id: 2,
    icon: Activity,
    title: "Medical Emergency",
    description: "First aid administration, communication with shore medical support, vessel return or emergency evacuation coordination"
  },
  {
    id: 3,
    icon: AlertTriangle,
    title: "Fire Emergency",
    description: "Fire suppression activation, passenger evacuation to assembly points, Coast Guard notification, life raft deployment if needed"
  },
  {
    id: 4,
    icon: Phone,
    title: "24/7 Support",
    description: "Shore-based emergency operations center, direct Coast Guard line, GPS tracking of all vessels, backup communication systems"
  }
];

const certifications = [
  {
    id: 1,
    icon: Shield,
    title: "Indian Coast Guard",
    description: "Annual vessel certification and compliance with all Coast Guard safety regulations and maritime laws"
  },
  {
    id: 2,
    icon: Anchor,
    title: "Maritime Safety Authority",
    description: "Licensed and inspected vessels meeting all maritime safety standards with current compliance certificates"
  },
  {
    id: 3,
    icon: Users,
    title: "Crew Certifications",
    description: "All crew members hold valid licenses and certifications from Directorate General of Shipping"
  }
];

export function SafetyBlogPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--neutral-0)' }}>
      {/* Hero Section */}
      <section className="py-20 border-b" style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <a
              href="#home"
              onClick={() => {
                window.location.hash = '';
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 mb-6 transition-colors duration-200"
              style={{ color: 'var(--primary-500)', textDecoration: 'none', fontWeight: 500 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </a>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                <Shield size={40} style={{ color: 'var(--primary-500)' }} />
              </div>
            </div>
            
            <h1 className="mb-6" style={{ letterSpacing: '-0.02em' }}>
              Your Safety is Our Priority
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              At Book Sailing Mumbai, we believe that memorable experiences begin with peace of mind. Every precaution, every protocol, and every crew member is dedicated to ensuring your journey on the water is safe, comfortable, and truly unforgettable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 border-b flex items-center justify-center" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {experienceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                      <Icon size={32} style={{ color: 'var(--primary-500)' }} />
                    </div>
                  </div>
                  <div className="mb-2" style={{ fontSize: 'clamp(32px, 4vw, 40px)', fontWeight: 700, color: 'var(--neutral-900)', letterSpacing: '-0.02em' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--neutral-600)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety Promise */}
      <section className="py-20" style={{ backgroundColor: 'var(--primary-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'var(--primary-100)' }}>
                  <Heart size={18} style={{ color: 'var(--primary-600)' }} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary-600)' }}>Our Promise to You</span>
                </div>
                
                <h2 className="mb-6" style={{ letterSpacing: '-0.01em' }}>
                  We Care About Your Wellbeing
                </h2>
                
                <p style={{ fontSize: '17px', color: 'var(--neutral-700)', lineHeight: '1.8', marginBottom: '16px' }}>
                  When you step aboard one of our vessels, you're not just a passenger—you're part of our extended family. We understand that you're entrusting us with your safety and your special moments.
                </p>
                
                <p style={{ fontSize: '17px', color: 'var(--neutral-700)', lineHeight: '1.8', marginBottom: '16px' }}>
                  That's why we go above and beyond industry standards. From our rigorously trained crew to our meticulously maintained vessels, from our comprehensive safety protocols to our 24/7 emergency support, every detail is designed with your wellbeing in mind.
                </p>
                
                <p style={{ fontSize: '17px', color: 'var(--neutral-700)', lineHeight: '1.8' }}>
                  Safety isn't just a checklist for us—it's a commitment we honor with every journey, every day.
                </p>
              </div>
              
              <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1693035647158-3b29740d2cbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMHBhc3NlbmdlcnMlMjBlbmpveWluZ3xlbnwxfHx8fDE3NjMxODY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy passengers enjoying their yacht experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Safety Features with Images */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">How We Keep You Safe</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)', fontSize: '17px' }}>
              From state-of-the-art equipment to expert crew training, here's what makes your journey with us secure
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{
                    border: '1px solid var(--neutral-200)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="relative" style={{ aspectRatio: '16/9' }}>
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--primary-100)' }}>
                        <Icon size={20} style={{ color: 'var(--primary-500)' }} />
                      </div>
                      <h4>{feature.title}</h4>
                    </div>
                    <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certification Badge */}
          <div className="mt-16 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
              style={{ backgroundColor: '#10b981', color: 'white' }}
            >
              <Shield size={20} />
              <span style={{ fontWeight: 500, fontSize: '15px' }}>
                All vessels certified by Indian Coast Guard and Maritime Safety Authority
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Safety Guidelines */}
      <section className="py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Your Safety Guidelines</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)', fontSize: '17px' }}>
              Simple tips to help you have a safe and comfortable experience on the water
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {customerGuidelines.map((section, sectionIndex) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                  className="bg-white rounded-xl p-8"
                  style={{
                    border: '1px solid var(--neutral-200)',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                      <Icon size={24} style={{ color: 'var(--primary-500)' }} />
                    </div>
                    <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--neutral-900)' }}>
                      {section.category}
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {section.tips.map((tip, tipIndex) => (
                      <div key={tipIndex} className="flex gap-3">
                        <div className="mt-1">
                          <CheckCircle size={20} style={{ color: 'var(--primary-500)' }} />
                        </div>
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--neutral-900)', marginBottom: '4px' }}>
                            {tip.title}
                          </div>
                          <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                            {tip.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Tips Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 bg-white rounded-xl p-8 text-center"
            style={{
              border: '2px solid var(--primary-200)',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <Info size={32} style={{ color: 'var(--primary-500)' }} />
            </div>
            <h4 className="mb-3">Have Questions About Safety?</h4>
            <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
              Our crew conducts a comprehensive safety briefing before every departure. Feel free to ask any questions—we're here to ensure you feel comfortable and informed throughout your journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Protocols */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Emergency Response</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)', fontSize: '17px' }}>
              While emergencies are rare, we're thoroughly prepared with detailed protocols and trained professionals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {emergencyProtocols.map((protocol, index) => {
              const Icon = protocol.icon;
              return (
                <motion.div
                  key={protocol.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center"
                  style={{
                    border: '1px solid var(--neutral-200)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                      <Icon size={28} style={{ color: 'var(--primary-500)' }} />
                    </div>
                  </div>
                  <h5 className="mb-3">{protocol.title}</h5>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                    {protocol.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="mb-4">Official Certifications & Compliance</h3>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              All our vessels and crew members maintain current certifications from recognized maritime authorities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 text-center"
                  style={{ border: '1px solid var(--neutral-200)' }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={48} style={{ color: 'var(--primary-500)' }} />
                  </div>
                  <h5 className="mb-3">{cert.title}</h5>
                  <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4" style={{ letterSpacing: '-0.01em' }}>
              Ready for a Safe and Memorable Experience?
            </h3>
            
            <p className="mb-8 max-w-2xl mx-auto" style={{ fontSize: '17px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              Book your yacht charter with confidence. Our team is available 24/7 to answer any questions about safety, procedures, or your upcoming voyage.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contact"
                onClick={() => {
                  window.location.hash = '';
                  setTimeout(() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg w-full sm:w-auto text-center"
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
                Book Your Experience
              </motion.a>

              <motion.a
                href="https://wa.me/917666689265?text=Hi%2C%20I%20have%20questions%20about%20safety%20procedures"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-lg w-full sm:w-auto text-center"
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
                Ask Safety Questions
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
