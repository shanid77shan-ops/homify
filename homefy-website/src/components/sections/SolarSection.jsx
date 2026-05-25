import { Check, Zap, ArrowUpRight } from 'lucide-react'
import { businessDisplayName, getWhatsAppUrl, solarSlides } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'
import ImageCarousel from '../ui/ImageCarousel'
import Button from '../ui/Button'

const powerSegment = {
  title: 'HOMEFY POWER PROJECTS',
  subtitle: 'Smart Power, Better Living',
  features: [
    'Solar power installations',
    'Inverters & battery systems',
    'Security systems (CCTV & Automation)',
    'Water purifiers & energy monitoring',
  ],
}

export default function SolarSection() {
  const solarWhatsApp = getWhatsAppUrl(
    `Hi ${businessDisplayName}, I'd like to know more about solar power installation.`,
  )

  return (
    <section id="solar" className="section-padding bg-gradient-to-b from-sky-50/80 via-white to-warm-gray">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Solar Solutions"
          title="Switch to clean, reliable solar power"
          description="See how Team HOMEFY delivers professional solar installations — from rooftop surveys to final handover and ongoing support across Kerala."
        />

        <MotionWrapper delay={0.1}>
          <ImageCarousel slides={solarSlides} className="mb-10 shadow-2xl shadow-sky-900/10 md:mb-14" />
        </MotionWrapper>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper delay={0.15}>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-600">
                <Zap size={24} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
                  {powerSegment.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-charcoal">{powerSegment.title}</h3>
              </div>
            </div>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Reduce electricity costs and power your home sustainably with systems designed,
              installed, and maintained by our experienced team.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {powerSegment.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"
                >
                  <Check className="mt-0.5 shrink-0 text-brand-orange" size={18} strokeWidth={2.5} />
                  <span className="text-sm font-medium text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              href={solarWhatsApp}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6"
            >
              Get Solar Consultation
              <ArrowUpRight size={16} />
            </Button>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
