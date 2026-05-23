import { useState } from 'react'
import { Eye, Target, CheckCircle2 } from 'lucide-react'
import { missionPoints } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'

const tabs = [
  {
    id: 'vision',
    label: 'Our Vision',
    icon: Eye,
    content:
      'To be a trusted leader in integrated home solutions by delivering superior quality, innovative design, and sustainable technologies.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    icon: Target,
    content: null,
  },
]

export default function About() {
  const [activeTab, setActiveTab] = useState('vision')

  return (
    <section id="about" className="section-padding bg-warm-gray">
      <div className="container-wide">
        <SectionHeader
          eyebrow="About Us"
          title="Deliver quality. Build trust. Enhance everyday living."
          description="Team HOMEFY LLP unifies interiors, smart power, and lifestyle commerce under one philosophy — making modern home living accessible, sustainable, and beautifully crafted."
        />

        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionWrapper delay={0.1}>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-slate-600 md:text-lg">
                From bespoke furniture and turnkey interiors to solar installations and
                doorstep-delivered essentials, we bring every facet of home living together
                under one trusted brand.
              </p>
              <p className="text-base leading-relaxed text-slate-600">
                Our team combines design expertise, technical precision, and a customer-first
                mindset to deliver solutions that are as functional as they are beautiful —
                built to enhance the way you live, every single day.
              </p>
              <blockquote className="border-l-4 border-brand-orange pl-5 italic text-slate-500">
                &ldquo;We don&apos;t just build spaces — we craft experiences that turn houses
                into homes.&rdquo;
              </blockquote>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-charcoal/5 ring-1 ring-black/5">
              <div className="flex border-b border-slate-100">
                {tabs.map((tab) => {
                  const Icon = tab.icon
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex flex-1 items-center justify-center gap-2 px-4 py-4 text-sm font-semibold transition-all ${
                        isActive
                          ? 'border-b-2 border-brand-orange bg-brand-orange-light/30 text-brand-orange'
                          : 'text-slate-500 hover:bg-slate-50 hover:text-charcoal'
                      }`}
                    >
                      <Icon size={16} />
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              <div className="p-6 md:p-8">
                {activeTab === 'vision' ? (
                  <p className="text-base leading-relaxed text-slate-600">
                    {tabs[0].content}
                  </p>
                ) : (
                  <ul className="space-y-4">
                    {missionPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <CheckCircle2
                          className="mt-0.5 shrink-0 text-brand-orange"
                          size={18}
                        />
                        <span className="text-sm leading-relaxed text-slate-600 md:text-base">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
