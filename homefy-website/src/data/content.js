export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Business Segments', href: '#segments' },
  { label: 'Our Process', href: '#process' },
  { label: 'Contact Us', href: '#contact' },
]

export const missionPoints = [
  'End-to-end home & lifestyle solutions with consistent quality.',
  'Functional aesthetics through expert interior design and customized execution.',
  'Advanced solar power and energy management systems for sustainable living.',
  'A seamless digital e-commerce ecosystem (shophomefy.com).',
]

export const businessSegments = [
  {
    id: 'homes',
    title: 'HOMEFY HOMES',
    subtitle: 'Furniture, Interiors & Décor',
    features: [
      'Modular kitchens & wardrobes',
      'Custom furniture manufacturing',
      'Full turnkey home interiors',
      'Space planning and 3D design',
    ],
    accent: 'from-amber-500/20 to-orange-500/10',
    icon: 'home',
  },
  {
    id: 'power',
    title: 'HOMEFY POWER PROJECTS',
    subtitle: 'Smart Power, Better Living',
    features: [
      'Solar power installations',
      'Inverters & battery systems',
      'Security systems (CCTV & Automation)',
      'Water purifiers & energy monitoring',
    ],
    accent: 'from-sky-500/20 to-blue-500/10',
    icon: 'zap',
  },
  {
    id: 'shop',
    title: 'ShopHomefy',
    subtitle: 'Online Store — shophomefy.com',
    features: [
      'Home essentials & lifestyle products',
      'Daily utility items',
      'Curated décor collections',
      'Doorstep delivery across Kerala',
    ],
    accent: 'from-emerald-500/20 to-teal-500/10',
    icon: 'shopping',
  },
]

export const whyChooseUs = [
  {
    title: 'Integrated Home Ecosystem',
    description:
      'Interiors, solar, and e-commerce under one trusted brand — a single partner for your entire home journey.',
    icon: 'layers',
  },
  {
    title: 'Design-Led Craftsmanship',
    description:
      'Thoughtful design and precise workmanship that transforms spaces into functional, beautiful living environments.',
    icon: 'palette',
  },
  {
    title: 'Assured Quality & Reliability',
    description:
      'Strict quality standards and durable materials built to last, backed by structured inspection processes.',
    icon: 'shield',
  },
  {
    title: 'Sustainable Power Solutions',
    description:
      'Cleaner, smarter, and efficient energy alternatives that reduce costs and environmental impact.',
    icon: 'leaf',
  },
  {
    title: 'Customer-First Experience',
    description:
      'Clear communication, timely delivery, and dedicated after-service support at every stage.',
    icon: 'heart',
  },
  {
    title: 'Professional & Ethical Commitment',
    description:
      'Skilled team, structured processes, and transparent business practices you can rely on.',
    icon: 'award',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Understanding Your Needs',
    description: 'Listening and assessing requirements to build a clear project foundation.',
  },
  {
    step: 2,
    title: 'Thoughtful Planning & Design',
    description: 'Translating ideas into practical 3D designs and detailed evaluations.',
  },
  {
    step: 3,
    title: 'Transparent Proposals',
    description: 'Clear estimates, timelines, and scope — no hidden costs or surprises.',
  },
  {
    step: 4,
    title: 'Expert Execution',
    description: 'Manufacturing, setup, and order fulfillment by skilled, dedicated teams.',
  },
  {
    step: 5,
    title: 'Quality Checks & Handover',
    description: 'Strict inspection and quality assurance before final handover.',
  },
  {
    step: 6,
    title: 'Seamless Delivery & Support',
    description: 'Smooth delivery, installation, and guided onboarding with ongoing support.',
  },
]

export const contactPhones = ['8891778801', '8891778802', '8891776601']

export const companyAddress =
  '1st Floor, Mahima Tower, Chettippadi Road, Chelari, Malappuram, Kerala 676317'

export const companyLegalName = 'TEAM HOMEFY LLP'

export const websiteUrl = 'https://homefy.in'

export const businessHours = 'Mon – Sat: 9:00 AM – 6:00 PM · Sunday: Closed'

export const mapsLink =
  'https://www.google.com/maps/search/?api=1&query=1st+floor+Mahima+Tower+Chettippadi+road+Chelari+Kerala+676317'

export const mapEmbedUrl =
  'https://maps.google.com/maps?q=1st+floor+Mahima+Tower+Chettippadi+road+Chelari+Kerala+676317&z=16&output=embed'

// Test WhatsApp number — update to production number when going live
export const whatsappNumber = '918848133032'

export const businessDisplayName = 'Team HOMEFY'

export const chatAutoReply = `Thanks for reaching out to ${businessDisplayName}. We have received your message and will connect you with a team member shortly.`

export function getWhatsAppUrl(message) {
  const defaultMessage = `Hi ${businessDisplayName}, I'd like to get a free consultation.`
  const text = message?.trim() || defaultMessage
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}
