import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { heroSlides } from '../../data/content'

const themeColors = ['#f97316', '#0ea5e9', '#10b981']

export default function HeroVisual() {
  const [index, setIndex] = useState(0)
  const count = heroSlides.length

  const next = useCallback(() => setIndex((prev) => (prev + 1) % count), [count])
  const prev = useCallback(() => setIndex((prev) => (prev - 1 + count) % count), [count])

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % count), 4500)
    return () => clearInterval(timer)
  }, [count])

  const slide = heroSlides[index]

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-charcoal/10 ring-1 ring-black/5 md:aspect-square lg:aspect-[4/5]">
      <div className="absolute inset-0 bg-charcoal">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent" />

      <button
        type="button"
        onClick={prev}
        className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition hover:bg-white"
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-md transition hover:bg-white"
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
            Integrated Solutions
          </p>
          <p className="text-sm font-medium text-charcoal">Interiors + Solar + Lifestyle</p>
        </div>
        <div className="flex items-center gap-2">
          {heroSlides.map((item, i) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setIndex(i)}
              className="flex flex-col items-center gap-1"
              aria-label={`Show ${item.label}`}
            >
              <span
                className={`h-8 w-8 rounded-full border-2 border-white transition-transform ${
                  i === index ? 'scale-110 ring-2 ring-brand-orange/40' : 'opacity-70'
                }`}
                style={{ backgroundColor: themeColors[i] }}
              />
              <span
                className={`text-[10px] font-semibold uppercase ${
                  i === index ? 'text-brand-orange' : 'text-slate-400'
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
