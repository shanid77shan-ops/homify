import { Home, Zap, ShoppingBag, ArrowUpRight, Check } from 'lucide-react'
import { businessSegments } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

const iconMap = {
  home: Home,
  zap: Zap,
  shopping: ShoppingBag,
}

export default function BusinessSegments() {
  return (
    <section id="segments" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Business Segments"
          title="Three wings. One unified home ecosystem."
          description="Explore our core business divisions — each designed to elevate a different dimension of modern living."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {businessSegments.map((segment, index) => {
            const Icon = iconMap[segment.icon]
            return (
              <MotionWrapper key={segment.id} delay={index * 0.1}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-warm-gray ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
                  <div
                    className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${segment.accent}`}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <Icon className="text-brand-orange" size={36} strokeWidth={1.5} />
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_60%)]" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-8">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-brand-orange">
                      {segment.subtitle}
                    </p>
                    <h3 className="mb-4 text-xl font-bold text-charcoal">{segment.title}</h3>

                    <ul className="mb-6 flex-1 space-y-3">
                      {segment.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5">
                          <Check
                            className="mt-0.5 shrink-0 text-brand-orange"
                            size={16}
                            strokeWidth={2.5}
                          />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {segment.id === 'shop' ? (
                      <a
                        href="https://shophomefy.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange transition-colors hover:text-brand-orange-dark"
                      >
                        Visit shophomefy.com
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <Button
                        href="#contact"
                        variant="ghost"
                        className="self-start px-0 text-brand-orange hover:bg-transparent hover:text-brand-orange-dark"
                      >
                        Learn More
                        <ArrowUpRight size={14} />
                      </Button>
                    )}
                  </div>
                </article>
              </MotionWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
