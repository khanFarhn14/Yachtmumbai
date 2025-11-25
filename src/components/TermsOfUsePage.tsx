import { FileText, ArrowLeft, AlertCircle, Calendar, CreditCard, Shield, Users, Anchor, Ban, Scale, Phone } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME, BRAND_EMAIL, BRAND_PHONE_PRIMARY } from "../config/brand";
import { Link } from "./Router";

const sections = [
  {
    id: 1,
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      {
        text: "By accessing our website, booking a yacht charter, or using any of our services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our services. These terms constitute a legally binding agreement between you and " + BRAND_NAME + "."
      },
      {
        text: "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the modified terms. It is your responsibility to review these terms periodically."
      }
    ]
  },
  {
    id: 2,
    icon: Calendar,
    title: "Booking and Reservations",
    content: [
      {
        subtitle: "Booking Process",
        text: "All bookings are subject to availability and confirmation. A booking is confirmed only when you receive written confirmation from us via email or WhatsApp. We reserve the right to decline any booking at our discretion."
      },
      {
        subtitle: "Booking Requirements",
        text: "You must be at least 18 years old to make a booking. You are responsible for providing accurate information including passenger count, dates, and contact details. You must disclose any relevant medical conditions or special requirements at the time of booking."
      },
      {
        subtitle: "Group Bookings",
        text: "For group bookings, the person making the reservation is responsible for all passengers in their party and agrees to these terms on their behalf. The booking party leader must ensure all passengers comply with safety regulations and crew instructions."
      }
    ]
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Payment Terms",
    content: [
      {
        subtitle: "Payment Methods",
        text: "We accept payments via bank transfer, credit/debit cards, UPI, and other specified payment methods. All prices are quoted in Indian Rupees (INR) unless otherwise stated."
      },
      {
        subtitle: "Payment Schedule",
        text: "A deposit may be required to confirm your booking. Full payment must be received before the charter date as specified in your booking confirmation. Failure to complete payment may result in cancellation of your booking."
      },
      {
        subtitle: "Price Changes",
        text: "Prices are subject to change until booking is confirmed. Once confirmed and paid, your price is guaranteed unless you request modifications to your booking that affect the cost."
      },
      {
        subtitle: "Taxes and Fees",
        text: "All applicable taxes, fuel surcharges, and government fees are included in the quoted price unless explicitly stated otherwise. Additional services requested during the charter may incur extra charges."
      }
    ]
  },
  {
    id: 4,
    icon: Ban,
    title: "Cancellation and Refund Policy",
    content: [
      {
        subtitle: "Customer Cancellations",
        text: "Cancellations made more than 7 days before the charter date: Full refund minus 10% processing fee. Cancellations made 3-7 days before: 50% refund. Cancellations made less than 3 days before: No refund. Cancellations must be made in writing via email."
      },
      {
        subtitle: "Weather-Related Cancellations",
        text: "If we cancel your charter due to unsafe weather conditions or maritime advisories, you will receive a full refund or the option to reschedule at no additional cost. This decision is at the sole discretion of the captain and is final."
      },
      {
        subtitle: "No-Shows",
        text: "If you fail to arrive for your scheduled charter without prior notice, no refund will be provided. We recommend arriving 15 minutes before departure time."
      },
      {
        subtitle: "Rescheduling",
        text: "Requests to reschedule must be made at least 48 hours before your charter date, subject to availability. One complimentary reschedule is permitted; subsequent changes may incur a fee."
      }
    ]
  },
  {
    id: 5,
    icon: Shield,
    title: "Safety and Conduct",
    content: [
      {
        subtitle: "Passenger Obligations",
        text: "All passengers must attend the pre-departure safety briefing and follow all crew instructions throughout the charter. You must wear provided life jackets when required. Reckless or dangerous behavior may result in immediate termination of the charter without refund."
      },
      {
        subtitle: "Health and Fitness",
        text: "You must be in reasonable physical health to participate. Passengers with heart conditions, pregnancy, recent surgery, or other medical concerns should consult a physician before booking. We reserve the right to refuse boarding to anyone deemed unfit to sail."
      },
      {
        subtitle: "Alcohol and Substances",
        text: "Moderate alcohol consumption may be permitted on certain charters, but intoxication is strictly prohibited. Illegal substances are absolutely forbidden. The captain reserves the right to refuse boarding to or disembark intoxicated passengers."
      },
      {
        subtitle: "Children",
        text: "Children under 12 must be supervised by an adult at all times. Life jackets are mandatory for all children while on deck. Parents/guardians are fully responsible for their children's safety and behavior."
      },
      {
        subtitle: "Prohibited Items",
        text: "Weapons, explosives, illegal substances, and any items deemed dangerous by the crew are strictly prohibited. We reserve the right to inspect bags and refuse boarding for non-compliance."
      }
    ]
  },
  {
    id: 6,
    icon: AlertCircle,
    title: "Liability and Insurance",
    content: [
      {
        subtitle: "Our Liability",
        text: "We maintain appropriate insurance coverage for our vessels and operations. However, our liability is limited to the maximum extent permitted by law. We are not liable for delays, itinerary changes, or cancellations due to weather, mechanical issues, or circumstances beyond our control."
      },
      {
        subtitle: "Passenger Liability",
        text: "You are responsible for any damage you cause to the vessel, equipment, or other property. You agree to reimburse us for repair or replacement costs. You are liable for any injuries you cause to other passengers or crew members due to your negligence or misconduct."
      },
      {
        subtitle: "Personal Belongings",
        text: "We are not responsible for loss, theft, or damage to your personal belongings. We recommend not bringing valuable items and securing electronics in waterproof containers."
      },
      {
        subtitle: "Travel Insurance",
        text: "We strongly recommend purchasing travel insurance to cover trip cancellation, medical emergencies, and personal belongings. Your travel insurance should include coverage for water-based activities."
      },
      {
        subtitle: "Assumption of Risk",
        text: "You acknowledge that yacht charters involve inherent risks including but not limited to weather conditions, sea state, and marine hazards. You voluntarily assume all risks associated with participation in our services."
      }
    ]
  },
  {
    id: 7,
    icon: Anchor,
    title: "Vessel and Itinerary",
    content: [
      {
        subtitle: "Vessel Substitution",
        text: "We reserve the right to substitute a vessel of similar or superior quality if necessary due to mechanical issues, maintenance requirements, or unforeseen circumstances. You will be notified as soon as possible of any such changes."
      },
      {
        subtitle: "Itinerary Changes",
        text: "The captain has absolute discretion to modify the route, duration, or itinerary for safety reasons, weather conditions, or operational requirements. Such changes do not entitle you to a refund or compensation."
      },
      {
        subtitle: "Departure Times",
        text: "Departure times are approximate and may be adjusted for safety, weather, or operational reasons. We will make reasonable efforts to notify you of significant changes in advance."
      }
    ]
  },
  {
    id: 8,
    icon: Users,
    title: "Photography and Media",
    content: [
      {
        subtitle: "Our Photography",
        text: "We may take photographs and videos during your charter for promotional purposes. By participating, you consent to the use of your image in our marketing materials, website, and social media. If you prefer not to be photographed, please inform the crew at the start of your charter."
      },
      {
        subtitle: "Drone Usage",
        text: "Use of drones by passengers is subject to crew approval and must comply with all applicable regulations. We reserve the right to prohibit drone usage at any time."
      }
    ]
  },
  {
    id: 9,
    icon: Scale,
    title: "Governing Law and Disputes",
    content: [
      {
        subtitle: "Jurisdiction",
        text: "These Terms of Use are governed by the laws of India. The courts of Mumbai, Maharashtra have exclusive jurisdiction over any disputes arising from these terms or your use of our services."
      },
      {
        subtitle: "Dispute Resolution",
        text: "In the event of a dispute, we encourage you to contact us first to seek an amicable resolution. If the dispute cannot be resolved informally, both parties agree to attempt mediation before pursuing legal action."
      },
      {
        subtitle: "Severability",
        text: "If any provision of these terms is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect."
      }
    ]
  },
  {
    id: 10,
    icon: FileText,
    title: "Additional Terms",
    content: [
      {
        subtitle: "Force Majeure",
        text: "We are not liable for failure to perform our obligations due to circumstances beyond our control including natural disasters, war, terrorism, strikes, government actions, pandemics, or other force majeure events."
      },
      {
        subtitle: "Entire Agreement",
        text: "These Terms of Use, together with our Privacy Policy and any booking confirmation, constitute the entire agreement between you and " + BRAND_NAME + " regarding your use of our services."
      },
      {
        subtitle: "Waiver",
        text: "Our failure to enforce any right or provision of these terms does not constitute a waiver of such right or provision."
      },
      {
        subtitle: "Assignment",
        text: "You may not transfer or assign your rights or obligations under these terms without our written consent. We may assign our rights and obligations to any third party at our discretion."
      }
    ]
  }
];

export function TermsOfUsePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--neutral-0)' }}>
      {/* Hero Section */}
      <section className="py-20 border-b" style={{ borderColor: 'var(--neutral-200)', backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[1280px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 transition-colors duration-200"
              style={{ color: 'var(--primary-500)', textDecoration: 'none', fontWeight: 500 }}
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                <Scale size={40} style={{ color: 'var(--primary-500)' }} />
              </div>
            </div>
            
            <h1 className="mb-6 text-center" style={{ letterSpacing: '-0.02em' }}>
              Terms of Use
            </h1>
            
            <div className="text-center" style={{ fontSize: '17px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              <p className="mb-4">
                Please read these Terms of Use carefully before booking or using any services provided by {BRAND_NAME}. These terms govern your use of our website and yacht charter services.
              </p>
              <p style={{ fontSize: '14px', color: 'var(--neutral-500)' }}>
                Last Updated: November 15, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="max-w-[900px] mx-auto px-4">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
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
                    <h2 style={{ fontSize: '24px', fontWeight: 700, color: 'var(--neutral-900)' }}>
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.subtitle && (
                          <h4 className="mb-2" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                            {item.subtitle}
                          </h4>
                        )}
                        <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-8"
            style={{
              border: '2px solid var(--primary-200)',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.1)'
            }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                  <AlertCircle size={24} style={{ color: 'var(--primary-500)' }} />
                </div>
              </div>
              <div>
                <h3 className="mb-3">Important Notice</h3>
                <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.7', marginBottom: '16px' }}>
                  By making a booking with {BRAND_NAME}, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you have any questions or concerns about these terms, please contact us before completing your booking.
                </p>
                <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
                  We are committed to providing you with a safe, enjoyable, and memorable yacht charter experience. These terms are designed to protect both you and our company, ensuring a smooth and satisfactory service for all parties.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 border-t" style={{ borderColor: 'var(--neutral-200)' }}>
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="mb-4">Questions About Our Terms?</h3>
            <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.6', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
              If you have any questions, concerns, or need clarification about these Terms of Use, our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${BRAND_EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: 'var(--primary-500)',
                  color: 'white',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none'
                }}
              >
                <Phone size={18} />
                Email Us
              </a>
              <a
                href={`tel:${BRAND_PHONE_PRIMARY.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors duration-200"
                style={{
                  backgroundColor: 'white',
                  color: 'var(--neutral-900)',
                  fontWeight: 600,
                  fontSize: '15px',
                  textDecoration: 'none',
                  border: '2px solid var(--neutral-300)'
                }}
              >
                <Phone size={18} />
                Call {BRAND_PHONE_PRIMARY}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}