import { Shield, AlertTriangle, Heart, Users, Anchor, LifeBuoy, CheckCircle, Info, Book, ArrowLeft, Award, Briefcase } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const safetyFeatures = [
  {
    id: 1,
    icon: Users,
    title: "Experienced Staff",
    description: "Our crew members are professionally trained in swimming and water safety, ensuring your journey is secure and enjoyable."
  },
  {
    id: 2,
    icon: LifeBuoy,
    title: "Life Jackets for All",
    description: "Coast Guard approved life jackets provided for every passenger, including specially sized jackets for children."
  },
  {
    id: 3,
    icon: LifeBuoy,
    title: "Fiber-Reinforced Safety",
    description: "Premium fiber-reinforced life buoy rings strategically positioned throughout the vessel for emergency response."
  },
  {
    id: 4,
    icon: Anchor,
    title: "Professional Anchoring",
    description: "State-of-the-art ship anchoring systems operated by certified professionals for secure positioning."
  },
  {
    id: 5,
    icon: Briefcase,
    title: "High-End Meeting Facilities",
    description: "Sophisticated onboard meeting facilities equipped with modern amenities for corporate events and business gatherings."
  },
  {
    id: 6,
    icon: Shield,
    title: "Certified & Compliant",
    description: "All vessels are certified by Indian Coast Guard and Maritime Safety Authority with regular inspections."
  }
];

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
    label: "Satisfied Customers",
    icon: Heart
  },
  {
    id: 3,
    number: "100%",
    label: "Safety Record",
    icon: Shield
  }
];

const safetyArticles = [
  {
    id: 1,
    title: "Essential Safety Equipment on Every Yacht",
    category: "Equipment",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMHNhZmV0eSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "Safety is our top priority at Book Sailing Mumbai. Every vessel in our fleet is equipped with comprehensive safety equipment that meets and exceeds maritime safety standards.",
      sections: [
        {
          heading: "Life-Saving Equipment",
          points: [
            "Coast Guard approved life jackets for every passenger, including specially sized jackets for children",
            "Premium fiber-reinforced life buoy rings strategically positioned throughout the vessel",
            "Emergency flares and signaling devices",
            "First aid kits with essential medical supplies"
          ]
        },
        {
          heading: "Communication & Navigation",
          points: [
            "VHF radio for emergency communication",
            "GPS navigation systems",
            "Weather monitoring equipment",
            "Emergency position-indicating radio beacon (EPIRB)"
          ]
        },
        {
          heading: "Fire Safety",
          points: [
            "Fire extinguishers in all key areas",
            "Smoke and carbon monoxide detectors",
            "Fire blankets in galley areas",
            "Emergency evacuation procedures posted throughout"
          ]
        }
      ]
    }
  },
  {
    id: 2,
    title: "Pre-Departure Safety Briefing",
    category: "Procedures",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNyZXclMjBicmllZmluZ3xlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "Before every voyage, our professional crew conducts a comprehensive safety briefing to ensure all passengers are informed and prepared.",
      sections: [
        {
          heading: "What We Cover",
          points: [
            "Location and proper use of life jackets",
            "Emergency assembly points and evacuation procedures",
            "Location of emergency exits and fire extinguishers",
            "Communication protocols and emergency signals",
            "Man overboard procedures"
          ]
        },
        {
          heading: "Passenger Responsibilities",
          points: [
            "Listen carefully to all safety instructions",
            "Know where your life jacket is stored",
            "Familiarize yourself with emergency exits",
            "Keep walkways and exits clear",
            "Report any safety concerns immediately to crew"
          ]
        },
        {
          heading: "Children's Safety",
          points: [
            "Children must wear life jackets at all times on deck",
            "Adult supervision required for children under 12",
            "Special safety zones designated for families",
            "Child-friendly safety demonstrations provided"
          ]
        }
      ]
    }
  },
  {
    id: 3,
    title: "Weather Monitoring & Trip Cancellation Policy",
    category: "Weather Safety",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1527482937786-6608399b5c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWF0aGVyJTIwb2NlYW4lMjBzdG9ybXxlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "Weather conditions are constantly monitored to ensure safe sailing conditions. Your safety is more important than any schedule.",
      sections: [
        {
          heading: "Our Weather Monitoring System",
          points: [
            "Real-time weather updates from Indian Meteorological Department",
            "Professional marine weather forecasting services",
            "Continuous monitoring of wind speed and wave conditions",
            "24-hour advance weather assessment for all bookings"
          ]
        },
        {
          heading: "Trip Cancellation Criteria",
          points: [
            "Wind speeds exceeding 25 knots",
            "Wave heights above 2 meters",
            "Thunderstorm warnings or heavy rainfall",
            "Poor visibility conditions",
            "Any Coast Guard advisories against sailing"
          ]
        },
        {
          heading: "Cancellation Policy",
          points: [
            "Full refund for weather-related cancellations by our team",
            "Option to reschedule at no additional cost",
            "48-hour advance notice for weather concerns",
            "No penalties for safety-related cancellations"
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Our Crew: Training & Certifications",
    category: "Crew Excellence",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGNhcHRhaW4lMjBjcmV3fGVufDF8fHx8MTc2MzA2MjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "Our crew members are the backbone of our safety commitment. Every team member undergoes rigorous training and maintains current certifications.",
      sections: [
        {
          heading: "Captain Qualifications",
          points: [
            "Valid Captain's License from Directorate General of Shipping",
            "Minimum 7 years of maritime experience",
            "Advanced navigation and safety training",
            "Regular skill refresher courses",
            "First aid and CPR certified"
          ]
        },
        {
          heading: "Crew Training",
          points: [
            "Comprehensive water safety certification",
            "Swimming proficiency requirements",
            "Fire safety and emergency response training",
            "Customer service and hospitality training",
            "Annual safety drills and evaluations"
          ]
        },
        {
          heading: "Continuous Education",
          points: [
            "Monthly safety workshops",
            "Quarterly emergency simulation drills",
            "Updated maritime law and regulation training",
            "Guest feedback incorporation into training programs"
          ]
        }
      ]
    }
  },
  {
    id: 5,
    title: "Vessel Maintenance & Inspection Standards",
    category: "Vessel Safety",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMG1haW50ZW5hbmNlfGVufDF8fHx8MTc2MzA2MjkzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "Regular maintenance and thorough inspections ensure that every vessel in our fleet operates at peak safety standards.",
      sections: [
        {
          heading: "Daily Inspections",
          points: [
            "Pre-departure safety equipment check",
            "Engine and mechanical systems inspection",
            "Hull integrity assessment",
            "Communication equipment testing",
            "Fuel and fluid level verification"
          ]
        },
        {
          heading: "Regular Maintenance Schedule",
          points: [
            "Weekly comprehensive vessel inspection",
            "Monthly engine servicing and maintenance",
            "Quarterly hull cleaning and underwater inspection",
            "Annual dry dock and major system overhaul",
            "Immediate repair of any identified issues"
          ]
        },
        {
          heading: "Official Certifications",
          points: [
            "Indian Coast Guard annual vessel certification",
            "Maritime Safety Authority compliance certificates",
            "Environmental compliance documentation",
            "Insurance coverage verification",
            "All safety equipment certification up to date"
          ]
        }
      ]
    }
  },
  {
    id: 6,
    title: "Emergency Procedures & Protocols",
    category: "Emergency Response",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjByZXNwb25zZXxlbnwxfHx8fDE3NjMwNjI5MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: {
      intro: "While emergencies are rare, we are thoroughly prepared with detailed protocols and regular training to handle any situation.",
      sections: [
        {
          heading: "Man Overboard Procedure",
          points: [
            "Immediate crew alert and position marking",
            "Deploy life ring to person in water",
            "Maintain visual contact at all times",
            "Execute controlled turn to return to position",
            "Coordinate with Coast Guard if needed"
          ]
        },
        {
          heading: "Medical Emergencies",
          points: [
            "Crew member trained in first aid always onboard",
            "Comprehensive first aid kit available",
            "Direct communication line to shore-based medical support",
            "Evacuation procedures to nearest medical facility",
            "Emergency helicopter evacuation coordination if required"
          ]
        },
        {
          heading: "Fire Emergency",
          points: [
            "Immediate alert to all passengers and crew",
            "Activation of fire suppression systems",
            "Controlled evacuation to assembly points",
            "Coast Guard notification",
            "Life raft deployment if necessary"
          ]
        },
        {
          heading: "24/7 Support",
          points: [
            "Shore-based emergency operations center",
            "Direct line to Coast Guard operations",
            "GPS tracking of all vessels in real-time",
            "Backup communication systems",
            "Family notification protocols in place"
          ]
        }
      ]
    }
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
              Safety Blog & Guidelines
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--neutral-600)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive information about our safety standards, procedures, and commitment to keeping you safe on the water
            </p>
          </motion.div>
        </div>
      </section>

      {/* Safety Stats */}
      <section className="py-16 border-b" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Safety Features Overview */}
      <section className="py-16 border-b" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Safety First, Adventure Always</h2>
            <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-600)' }}>
              Your safety is our top priority. Here are the key safety features on every vessel
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg"
                  style={{
                    border: '1px solid var(--neutral-200)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'var(--primary-100)' }}>
                    <Icon size={24} style={{ color: 'var(--primary-500)' }} />
                  </div>
                  <h4 className="mb-3">{feature.title}</h4>
                  <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Certification Badge */}
          <div className="mt-12 text-center">
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

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {safetyArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b pb-16 last:border-b-0"
                style={{ borderColor: 'var(--neutral-200)' }}
              >
                {/* Article Header */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                  <div className="lg:col-span-1">
                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden" style={{ backgroundColor: 'var(--neutral-100)' }}>
                      <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1.5 rounded-full" style={{ backgroundColor: 'var(--primary-100)', color: 'var(--primary-700)', fontSize: '13px', fontWeight: 600 }}>
                        {article.category}
                      </span>
                      <span style={{ fontSize: '14px', color: 'var(--neutral-500)' }}>
                        {article.readTime}
                      </span>
                    </div>
                    
                    <h2 className="mb-4" style={{ letterSpacing: '-0.01em' }}>
                      {article.title}
                    </h2>
                    
                    <p style={{ fontSize: '17px', lineHeight: '1.7', color: 'var(--neutral-600)' }}>
                      {article.content.intro}
                    </p>
                  </div>
                </div>

                {/* Article Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {article.content.sections.map((section, sIndex) => (
                    <div key={sIndex}>
                      <h4 className="mb-4 flex items-center gap-2">
                        <CheckCircle size={20} style={{ color: 'var(--primary-500)' }} />
                        {section.heading}
                      </h4>
                      <ul className="space-y-3" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {section.points.map((point, pIndex) => (
                          <li key={pIndex} className="flex items-start gap-2">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--primary-500)' }} />
                            <span style={{ fontSize: '14px', color: 'var(--neutral-700)', lineHeight: '1.6' }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}>
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center"
              style={{ border: '1px solid var(--neutral-200)' }}
            >
              <div className="flex justify-center mb-4">
                <Shield size={48} style={{ color: 'var(--primary-500)' }} />
              </div>
              <h5 className="mb-3">Indian Coast Guard</h5>
              <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                Annual vessel certification and compliance with all Coast Guard safety regulations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center"
              style={{ border: '1px solid var(--neutral-200)' }}
            >
              <div className="flex justify-center mb-4">
                <Anchor size={48} style={{ color: 'var(--primary-500)' }} />
              </div>
              <h5 className="mb-3">Maritime Safety Authority</h5>
              <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                Licensed and inspected vessels meeting all maritime safety standards
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl p-6 text-center"
              style={{ border: '1px solid var(--neutral-200)' }}
            >
              <div className="flex justify-center mb-4">
                <Users size={48} style={{ color: 'var(--primary-500)' }} />
              </div>
              <h5 className="mb-3">Crew Certifications</h5>
              <p style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                All crew members hold valid licenses and certifications from Directorate General of Shipping
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="mb-4" style={{ letterSpacing: '-0.01em' }}>
              Have Safety Questions?
            </h3>
            
            <p className="mb-8 max-w-2xl mx-auto" style={{ fontSize: '17px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              Our safety team is available 24/7 to answer any concerns or questions you may have about our procedures
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
                Contact Safety Team
              </motion.a>

              <motion.a
                href="tel:+919136364646"
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
                Call 24/7 Support
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}