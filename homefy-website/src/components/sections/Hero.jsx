import { motion } from 'framer-motion'
import { ArrowRight, Sun } from 'lucide-react'
import Button from '../ui/Button'
import HeroVisual from '../ui/HeroVisual'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-warm-gray via-white to-white pt-24"
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-orange/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />

      <div className="section-padding container-wide">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-brand-orange-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-orange"
            >
              Kerala&apos;s Trusted Home Partner
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-charcoal md:text-5xl lg:text-6xl"
            >
              Turning Houses into{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-brand-orange">Homes</span>
                <span className="absolute -bottom-1 left-0 h-3 w-full bg-brand-orange/20 md:h-4" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-base leading-relaxed text-slate-500 md:text-lg"
            >
              Team HOMEFY LLP is a diversified home solutions company committed to redefining
              modern living across Kerala through design, technology, and service excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#segments" variant="primary" className="group">
                Explore Interiors
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Button>
              <Button href="#segments" variant="outline" className="group">
                <Sun size={16} className="text-brand-orange" />
                Switch to Solar
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8 border-t border-slate-100 pt-8"
            >
              {[
                { value: '3', label: 'Business Wings' },
                { value: '360°', label: 'Home Solutions' },
                { value: 'Kerala', label: 'Wide Coverage' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-charcoal">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
