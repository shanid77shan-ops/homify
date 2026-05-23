import { useState } from 'react'
import { processSteps } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Our Process"
          title="How we work — from vision to reality"
          description="A structured, transparent six-step journey designed to deliver exceptional results with zero surprises."
        />

        <div className="hidden lg:block">
          <div className="relative mb-12">
            <div className="absolute left-0 right-0 top-5 h-0.5 bg-slate-100" />
            <div
              className="absolute left-0 top-5 h-0.5 bg-brand-orange transition-all duration-500"
              style={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 100}%` }}
            />
            <div className="relative flex justify-between">
              {processSteps.map((step) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStep(step.step)}
                  className="group flex flex-col items-center"
                  aria-label={`Step ${step.step}: ${step.title}`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                      activeStep >= step.step
                        ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                        : 'bg-white text-slate-400 ring-2 ring-slate-100 group-hover:ring-brand-orange/30'
                    }`}
                  >
                    {step.step}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <MotionWrapper key={activeStep}>
            <div className="rounded-2xl bg-warm-gray p-8 md:p-10">
              <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
                Step {activeStep} of {processSteps.length}
              </span>
              <h3 className="mt-2 mb-3 text-2xl font-bold text-charcoal">
                {processSteps[activeStep - 1].title}
              </h3>
              <p className="max-w-2xl text-base leading-relaxed text-slate-600">
                {processSteps[activeStep - 1].description}
              </p>
            </div>
          </MotionWrapper>
        </div>

        <div className="space-y-4 lg:hidden">
          {processSteps.map((step, index) => (
            <MotionWrapper key={step.step} delay={index * 0.06}>
              <div className="flex gap-4 rounded-xl bg-warm-gray p-5 ring-1 ring-black/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {step.step}
                </span>
                <div>
                  <h3 className="mb-1 font-bold text-charcoal">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500">{step.description}</p>
                </div>
              </div>
            </MotionWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
