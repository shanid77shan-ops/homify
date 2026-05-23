import {
  Layers,
  Palette,
  Shield,
  Leaf,
  Heart,
  Award,
} from 'lucide-react'
import { whyChooseUs } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'

const iconMap = {
  layers: Layers,
  palette: Palette,
  shield: Shield,
  leaf: Leaf,
  heart: Heart,
  award: Award,
}

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-warm-gray">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Built on trust, crafted with precision"
          description="What sets Team HOMEFY apart — a commitment to quality, sustainability, and an exceptional customer experience at every touchpoint."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <MotionWrapper key={item.title} delay={index * 0.08}>
                <div className="group h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-charcoal/5 md:p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange-light text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                    <Icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-charcoal">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{item.description}</p>
                </div>
              </MotionWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
