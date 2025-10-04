# HALFMANN Logistics Design Guidelines

## Brand Identity & Color System

### Primary Colors (from Logo)
- `--hlf-blue-900`: #1D3A8C (Headers, Footer, Headlines)
- `--hlf-blue-700`: #1868B0
- `--hlf-blue-500`: #1078C0 (Secondary CTA Outlines)
- `--hlf-blue-400`: #00AEEF

### Neutral Colors
- `--hlf-gray-900`: #1F2937 (Body text)
- `--hlf-gray-600`: #4B5563
- `--hlf-gray-100`: #F5F7FA (Alternating sections)
- `--hlf-white`: #FFFFFF

### Brand Gradient
`linear-gradient(90deg, #1D3A8C 0%, #1078C0 55%, #00AEEF 100%)`

### Color Application Rules
- **Primary CTA**: Filled with gradient background, white text, hover adds subtle shadow and brightness
- **Secondary CTA**: Outline style using `--hlf-blue-500` on white background
- **Section Alternation**: Alternate between white and `--hlf-gray-100` backgrounds
- **Text**: `--hlf-gray-900` for body copy (ensure WCAG AA contrast)
- **Headers/Footer**: `--hlf-blue-900`

## Typography System

### Font Family
System-sans or Inter

### Type Scale
- **H1**: 36px / 44px line-height
- **H2**: 28px / 36px line-height
- **H3**: 22px / 30px line-height
- **Body**: 16px / 26px line-height
- **Buttons**: 16px / 24px line-height, bold weight

### Spacing & Readability
- Maximum line width: 70-80 characters
- Generous line-height for readability
- Sections: 64-96px vertical spacing for airy layout
- Clear heading hierarchy throughout

## Layout System

### Mobile-First Approach
- Sticky bottom bar on mobile with two CTAs:
  - Left: "Call Now" (`tel:` link)
  - Right: "Request Quote"
- Large touch targets (minimum 44x44px)
- Off-canvas navigation with burger menu

### Desktop Navigation
- Clean top navigation bar
- Smooth underline animation on hover
- Persistent header with brand consistency

### Section Structure
Alternating white and light gray (`--hlf-gray-100`) backgrounds for visual rhythm

## Component Library

### Hero Section
- Full-width gradient background using brand gradient
- Large headline (H1)
- Compelling subline
- Two CTAs (primary gradient-filled, secondary outline)
- Scroll indicator
- Trust indicators/proof points below fold

### FeatureCard
- Icon at top (from lucide-react)
- Clear title
- 2-3 bullet points
- Clean, card-based layout

### Timeline Component
- Years/dates on left
- Content on right
- Animated dots/connectors
- Responsive stacking on mobile

### LogoWall
- Grayscale logos at rest
- Color/brighten on hover
- Grid layout, responsive columns

### Steps/Process Component
- 3-4 numbered steps
- Icons for each step
- Animated progress indicator
- Horizontal on desktop, vertical on mobile

### Accordion FAQ
- Clean expand/collapse interaction
- Accessible keyboard navigation
- Clear visual states (open/closed)

### Testimonial Cards
- Quote text
- Author attribution
- Optional photo
- Card-based layout

### ContactTeaser
- Prominent phone number
- Quick quote request CTA
- Sticky on mobile for easy access

### Forms
- Zod validation
- Clear error states with ARIA-live announcements
- Loading, success, and error toast notifications
- Large, accessible input fields

## Page Structure

### Home
1. Hero with gradient, headline, dual CTAs
2. Proof points (">25,000 transports/year", "Europe-wide network", etc.)
3. Services overview (FeatureCards)
4. Why HALFMANN section
5. References/LogoWall
6. Process Steps (3-4 step component)
7. FAQ (Accordion)
8. Final CTA section with gradient background

### Leistungen (Services)
- Detailed service sections
- Accordion FAQ specific to services

### Referenzen (References)
- Case study cards
- Client logos
- Testimonial quotes

### Über uns (About)
- Mission statement
- Timeline component (company milestones)
- Certifications display

### Jobs
- Job listing cards
- Application form with validation

### Kontakt (Contact)
- Contact form
- Map integration
- Contact details (phone, email, address)
- Business hours

### Rechtliches (Legal)
- Impressum (Imprint)
- Datenschutz (Privacy Policy)

## Design Pattern References

Inspired by industry leaders (patterns only, not direct copies):
- **tgc-gmbh.com**: Clean typography scale, generous spacing
- **spedition-yilmaz.de**: Bold hero with color block, contact promo box
- **ars-altmann.de**: Visual timeline, logo wall with hover effects
- **jvg-autologistik.de**: Process steps with icons, strong CTA sections

## Images

### Hero Section
Large, high-impact hero image showing:
- Professional vehicle transport/logistics operation
- Modern trucks or transport scenarios
- Should convey trust, professionalism, and scale
- Overlaid with gradient for text readability

### Section Imagery
- Services: Icons from lucide-react (no photos needed)
- References: Client logos (grayscale treatment)
- About: Timeline can use icon markers instead of photos
- Process: Icon-based visualization

## Accessibility Requirements

- WCAG AA compliant (minimum)
- Visible focus rings on all interactive elements
- Skip link to main content
- Semantic HTML landmarks (header, nav, main, footer)
- ARIA labels for icon-only buttons
- Descriptive alt text for all images
- Meaningful link text (no "click here")
- Form error messages with ARIA-live regions
- Keyboard navigation support throughout

## Performance Targets

### Lighthouse Scores (Mobile)
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

### Optimization Strategy
- Responsive images with srcset
- AVIF format with JPG/PNG fallback
- Lazy loading for below-fold images
- Code splitting via Vite
- Tree-shaken Tailwind (purged unused styles)

## SEO Implementation

- Proper meta tags (Title, Description)
- Open Graph tags
- Twitter Card tags
- Schema.org markup: Organization + LocalBusiness
- Proper heading hierarchy (single H1 per page)
- Semantic HTML structure