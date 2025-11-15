import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "Corporate Event",
    rating: 5,
    text: "We hosted our annual team outing on their yacht and it was absolutely spectacular. The crew was professional, the yacht was pristine, and the views of Mumbai from the sea were breathtaking. Highly recommended!",
    date: "October 2024"
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Birthday Celebration",
    rating: 5,
    text: "Celebrated my husband's 40th birthday on their luxury yacht. The sunset cruise was magical, the catering was excellent, and the entire experience exceeded our expectations. Our guests are still talking about it!",
    date: "September 2024"
  },
  {
    id: 3,
    name: "Arjun Mehta",
    role: "Anniversary Trip",
    rating: 5,
    text: "The speed boat adventure was thrilling! Perfect for adrenaline junkies. The captain was skilled and made sure we had a safe yet exciting experience. Will definitely book again for our next celebration.",
    date: "November 2024"
  },
  {
    id: 4,
    name: "Ananya Desai",
    role: "Wedding Proposal",
    rating: 5,
    text: "I proposed to my girlfriend during a sunset cruise and they helped make it absolutely perfect. The setup, the privacy, the ambiance - everything was magical. She said yes! Thank you for making our special moment unforgettable.",
    date: "August 2024"
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Client Entertainment",
    rating: 5,
    text: "Used their services for entertaining international clients. The professionalism and attention to detail were outstanding. The yacht was immaculate and the crew went above and beyond. Truly a five-star experience.",
    date: "October 2024"
  },
  {
    id: 6,
    name: "Neha Gupta",
    role: "Bachelorette Party",
    rating: 5,
    text: "Best bachelorette party ever! The yacht had everything we needed - music, catering, and plenty of space to dance. The Gateway of India backdrop made for amazing photos. Couldn't have asked for a better experience!",
    date: "September 2024"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24" style={{ backgroundColor: 'var(--neutral-0)' }}>
      <div className="max-w-[1280px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Guests Say</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--neutral-500)' }}>
            Don't just take our word for it - hear from our satisfied customers who've experienced the magic of Mumbai waters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-6 transition-all duration-300 hover:shadow-lg relative"
              style={{
                border: '1px solid var(--neutral-200)',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} style={{ color: 'var(--primary-500)' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill="var(--warning)"
                    style={{ color: 'var(--warning)' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="mb-6 relative z-10" style={{ color: 'var(--neutral-700)', lineHeight: '1.6' }}>
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="border-t pt-4" style={{ borderColor: 'var(--neutral-200)' }}>
                <p className="m-0" style={{ fontWeight: 600, color: 'var(--neutral-900)' }}>
                  {testimonial.name}
                </p>
                <p className="m-0" style={{ fontSize: '14px', color: 'var(--neutral-500)' }}>
                  {testimonial.role}
                </p>
                <p className="m-0 mt-1" style={{ fontSize: '12px', color: 'var(--neutral-400)' }}>
                  {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--primary-500)', lineHeight: '1.2' }}>
              500+
            </div>
            <p style={{ color: 'var(--neutral-500)', marginTop: '8px' }}>
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--primary-500)', lineHeight: '1.2' }}>
              12
            </div>
            <p style={{ color: 'var(--neutral-500)', marginTop: '8px' }}>
              Luxury Yachts
            </p>
          </div>
          <div className="text-center">
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--primary-500)', lineHeight: '1.2' }}>
              5
            </div>
            <p style={{ color: 'var(--neutral-500)', marginTop: '8px' }}>
              Years Experience
            </p>
          </div>
          <div className="text-center">
            <div style={{ fontSize: '48px', fontWeight: 700, color: 'var(--primary-500)', lineHeight: '1.2' }}>
              4.9
            </div>
            <p style={{ color: 'var(--neutral-500)', marginTop: '8px' }}>
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
