# Book Sailing Mumbai - Website Sitemap

## Clean URL Structure

All pages are now accessible via clean, SEO-friendly URLs without hash (#) symbols.

---

## Pages

### 1. Homepage
**URL:** `/`  
**Route:** Root  
**Title:** Book Sailing Mumbai | Luxury Sail & Speed Boat Experiences from Gateway of India  
**Description:** Book Sailing Mumbai offers luxury yacht charters and speed boat experiences from Gateway of India. Book your premium sailing experience in Mumbai today.  
**Sections:**
- Hero Banner with CTA buttons
- Highlights / Why Choose Us
- Fleet Overview (4 boat types)
- Contact Form

---

### 2. Fleet Gallery / Boats Page
**URL:** `/fleet`  
**Route:** /fleet  
**Title:** Our Fleet | Book Sailing Mumbai  
**Description:** Explore our exclusive fleet of luxury yachts and speed boats. From elegant sailboats to high-speed cruisers, find the perfect vessel for your Mumbai sailing experience.  
**Content:**
- Detailed fleet information
- Specifications for each vessel:
  - Sail Boats (6-8 guests)
  - Sail Yachts (15-35 guests)
  - Motor Yachts (15-25 guests)
  - Speed Boats (6-12 guests)
- Pricing and booking options
- Back to Home navigation

---

### 3. Safety Blog / Safety Guidelines
**URL:** `/safety-blog`  
**Route:** /safety-blog  
**Title:** Safety Guidelines | Book Sailing Mumbai  
**Description:** Your safety is our priority. Learn about our comprehensive safety measures, expert crew training, and maritime safety protocols for a secure sailing experience.  
**Content:**
- Safety statistics and track record
- Safety features and equipment
- Customer safety guidelines:
  - Before You Board
  - On Board Behavior
  - Dietary Recommendations
  - What to Bring
- Emergency protocols
- Official certifications & compliance
- Back to Home navigation

---

### 4. Privacy Policy
**URL:** `/privacy-policy`  
**Route:** /privacy-policy  
**Title:** Privacy Policy | Book Sailing Mumbai  
**Description:** Read our privacy policy to understand how we collect, use, and protect your personal information when you book yacht charters with Book Sailing Mumbai.  
**Content:**
- Information collection practices
- Data usage and protection
- Information sharing policies
- User rights and choices
- Data retention policies
- Contact information for privacy concerns
- Back to Home navigation

---

### 5. Terms of Use
**URL:** `/terms-of-use`  
**Route:** /terms-of-use  
**Title:** Terms of Use | Book Sailing Mumbai  
**Description:** Review our terms of use and booking conditions for yacht charter services. Understand your rights and responsibilities when booking with Book Sailing Mumbai.  
**Content:**
- Booking and reservation terms
- Payment terms
- Cancellation and refund policy
- Safety and conduct requirements
- Liability and insurance information
- Legal jurisdiction and dispute resolution
- Back to Home navigation

---

## Navigation Structure

### Main Navigation (Desktop & Mobile)
- Home → `/`
- Our Fleet → `/fleet`
- Experiences → `#experiences` (homepage anchor)
- Safety → `/safety-blog`
- Contact Us → `#contact` (homepage anchor)

### Footer Navigation

**Quick Links:**
- Home → `/`
- Our Fleet → `/fleet`
- Experiences → `#experiences`
- Safety → `/safety-blog`
- Contact → `#contact`

**Legal Links:**
- Privacy Policy → `/privacy-policy`
- Terms of Use → `/terms-of-use`
- Safety Guidelines → `/safety-blog`

---

## Internal Linking Strategy

1. **Homepage to Other Pages:**
   - "View Full Fleet Gallery" button → `/fleet`
   - "Safety" nav link → `/safety-blog`
   - Footer links to all legal pages

2. **All Subpages to Homepage:**
   - "Back to Home" link at top of page → `/`
   - Logo in navigation → `/`
   - Footer "Home" link → `/`

3. **Cross-linking:**
   - Privacy Policy references Terms of Use
   - Terms of Use references Privacy Policy
   - Safety Blog encourages booking (links back to homepage)

---

## SEO Optimization Benefits

### Clean URLs (No Hash Routing)
✅ **Before:** `example.com/#fleet-gallery`  
✅ **After:** `example.com/fleet`

### Benefits:
1. **Search Engine Crawlability:** All pages are now individually indexable
2. **Page-Level Metadata:** Each page has unique title, description, and OG tags
3. **Better Link Sharing:** Clean URLs are more shareable on social media
4. **Improved Analytics:** Track individual page performance
5. **User-Friendly:** Cleaner, more professional appearance
6. **Bookmark-Friendly:** Users can bookmark specific pages
7. **Browser History:** Proper back/forward navigation support

---

## Technical Implementation

### Routing System
- Custom router component (`/components/Router.tsx`)
- Clean URL navigation using HTML5 History API
- Custom Link component for internal navigation
- Automatic meta tag updates based on current route
- Scroll-to-top on page navigation

### Metadata Management
Each route automatically sets:
- `<title>` tag
- `<meta name="description">` tag
- `<meta property="og:title">` tag
- `<meta property="og:description">` tag
- `<meta property="og:url">` tag

---

## Anchor Links (Same-Page Navigation)

The following sections use anchor links for smooth scrolling within the homepage:

- `#home` → Hero section
- `#fleet` → Fleet section overview
- `#experiences` → Experiences/Highlights section
- `#contact` → Contact form section

These anchor links remain functional for homepage navigation while maintaining SEO-friendly main page routes.

---

## WhatsApp Integration

All "Enquire Now" and "Book Now" buttons redirect to WhatsApp with pre-filled messages:
- **Phone Number:** +91 76666 89265
- **Format:** `https://wa.me/917666689265?text=<encoded_message>`
- **Customized Messages:** Each boat type has a unique inquiry message

---

## Brand Information

- **Brand Name:** Book Sailing Mumbai
- **Tagline:** Luxury Sail & Speed Boat Experiences from Gateway of India
- **Email:** info@booksailingmumbai.com
- **Bookings Email:** bookings@booksailingmumbai.com
- **Phone:** +91 76666 89265

---

## Future Expansion Possibilities

Potential pages to add:
- `/about` - About Us page
- `/gallery` - Photo gallery
- `/testimonials` - Customer reviews
- `/blog` - Blog posts and sailing tips
- `/packages` - Pre-designed packages
- `/corporate` - Corporate event services
- `/faq` - Frequently Asked Questions

---

**Last Updated:** November 25, 2025  
**Website Version:** 2.0 (Clean URL Migration)
