import { Shield, ArrowLeft, Lock, Eye, Database, UserCheck, Mail, Phone, FileText } from "lucide-react";
import { motion } from "motion/react";
import { BRAND_NAME, BRAND_EMAIL } from "../config/brand";
import { Link } from "./Router";

const sections = [
  {
    id: 1,
    icon: Database,
    title: "Information We Collect",
    content: [
      {
        subtitle: "Personal Information",
        text: "When you book a yacht charter or contact us, we may collect personal information including your name, email address, phone number, date of birth, and payment information. For group bookings, we may also collect information about other passengers in your party."
      },
      {
        subtitle: "Booking Information",
        text: "We collect details about your booking preferences, selected vessels, dates, special requests, and any dietary requirements or medical conditions you choose to share with us for safety purposes."
      },
      {
        subtitle: "Automatically Collected Information",
        text: "Our website may automatically collect certain information including your IP address, browser type, device information, and browsing behavior through cookies and similar technologies to improve your experience."
      }
    ]
  },
  {
    id: 2,
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      {
        subtitle: "Service Delivery",
        text: "We use your information to process bookings, arrange your yacht charter experience, communicate with you about your reservation, and provide customer support before, during, and after your trip."
      },
      {
        subtitle: "Safety and Compliance",
        text: "Your information helps us ensure passenger safety, comply with maritime regulations, maintain insurance requirements, and meet legal obligations imposed by the Indian Coast Guard and Maritime Safety Authority."
      },
      {
        subtitle: "Communication",
        text: "We may use your contact information to send booking confirmations, weather updates, safety information, and promotional offers (you can opt-out of marketing communications at any time)."
      },
      {
        subtitle: "Service Improvement",
        text: "We analyze booking patterns and customer feedback to improve our services, vessel offerings, and overall customer experience."
      }
    ]
  },
  {
    id: 3,
    icon: Lock,
    title: "Information Security",
    content: [
      {
        subtitle: "Data Protection Measures",
        text: "We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. This includes secure data encryption, access controls, and regular security audits."
      },
      {
        subtitle: "Payment Security",
        text: "All payment transactions are processed through secure, PCI-compliant payment gateways. We do not store complete credit card information on our servers."
      },
      {
        subtitle: "Employee Access",
        text: "Access to personal information is restricted to authorized employees who require it to perform their job functions. All staff members are trained in data protection and confidentiality."
      }
    ]
  },
  {
    id: 4,
    icon: UserCheck,
    title: "Information Sharing",
    content: [
      {
        subtitle: "Third-Party Service Providers",
        text: "We may share your information with trusted third-party service providers who assist us in operating our business, including payment processors, booking systems, and communication platforms. These providers are contractually obligated to protect your information."
      },
      {
        subtitle: "Legal Requirements",
        text: "We may disclose your information when required by law, to comply with legal processes, respond to government requests, or protect the rights, property, and safety of our company, customers, or others."
      },
      {
        subtitle: "Maritime Authorities",
        text: "For safety and compliance purposes, we may share passenger information with the Indian Coast Guard, Maritime Safety Authority, and other relevant regulatory bodies as required by law."
      },
      {
        subtitle: "No Sale of Data",
        text: "We do not sell, rent, or trade your personal information to third parties for marketing purposes."
      }
    ]
  },
  {
    id: 5,
    icon: FileText,
    title: "Your Rights and Choices",
    content: [
      {
        subtitle: "Access and Correction",
        text: "You have the right to access, review, and request corrections to your personal information. Contact us if you believe any information we hold is inaccurate or incomplete."
      },
      {
        subtitle: "Data Deletion",
        text: "You may request deletion of your personal information, subject to our legal obligations to retain certain records for regulatory compliance, accounting, and dispute resolution purposes."
      },
      {
        subtitle: "Marketing Opt-Out",
        text: "You can opt-out of receiving promotional communications at any time by clicking the unsubscribe link in our emails or contacting us directly. Please note that you will still receive essential booking and safety-related communications."
      },
      {
        subtitle: "Cookie Management",
        text: "You can control cookie settings through your browser preferences. Note that disabling cookies may affect website functionality and your user experience."
      }
    ]
  },
  {
    id: 6,
    icon: Database,
    title: "Data Retention",
    content: [
      {
        subtitle: "Retention Period",
        text: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Booking records are typically retained for 7 years in accordance with Indian accounting and maritime regulations."
      },
      {
        subtitle: "Deletion Procedures",
        text: "When personal information is no longer needed, we securely delete or anonymize it in accordance with our data retention schedule and applicable laws."
      }
    ]
  }
];

const additionalInfo = [
  {
    id: 1,
    icon: Mail,
    title: "Children's Privacy",
    description: "Our services are not directed to children under 13 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately."
  },
  {
    id: 2,
    icon: Phone,
    title: "Third-Party Links",
    description: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information."
  },
  {
    id: 3,
    icon: Shield,
    title: "Changes to This Policy",
    description: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of significant changes by posting a notice on our website or sending you an email."
  }
];

export function PrivacyPolicyPage() {
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
                <Lock size={40} style={{ color: 'var(--primary-500)' }} />
              </div>
            </div>
            
            <h1 className="mb-6 text-center" style={{ letterSpacing: '-0.02em' }}>
              Privacy Policy
            </h1>
            
            <div className="text-center" style={{ fontSize: '17px', color: 'var(--neutral-600)', lineHeight: '1.7' }}>
              <p className="mb-4">
                At {BRAND_NAME}, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, share, and protect your information when you use our yacht charter services.
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        <h4 className="mb-2" style={{ fontSize: '17px', fontWeight: 600, color: 'var(--neutral-900)' }}>
                          {item.subtitle}
                        </h4>
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

      {/* Additional Information */}
      <section className="py-16" style={{ backgroundColor: 'var(--neutral-50)' }}>
        <div className="max-w-[900px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6"
                  style={{
                    border: '1px solid var(--neutral-200)',
                    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
                  }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary-100)' }}>
                      <Icon size={24} style={{ color: 'var(--primary-500)' }} />
                    </div>
                  </div>
                  <h4 className="mb-3 text-center">{info.title}</h4>
                  <p className="text-center" style={{ fontSize: '14px', color: 'var(--neutral-600)', lineHeight: '1.6' }}>
                    {info.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
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
            className="bg-white rounded-xl p-8 text-center"
            style={{
              border: '2px solid var(--primary-200)',
              boxShadow: '0 4px 16px rgba(99, 102, 241, 0.1)'
            }}
          >
            <div className="flex justify-center mb-4">
              <Mail size={32} style={{ color: 'var(--primary-500)' }} />
            </div>
            <h3 className="mb-4">Questions About Your Privacy?</h3>
            <p style={{ fontSize: '15px', color: 'var(--neutral-600)', lineHeight: '1.6', marginBottom: '24px' }}>
              If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal information, please don't hesitate to contact us.
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
                <Mail size={18} />
                {BRAND_EMAIL}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}