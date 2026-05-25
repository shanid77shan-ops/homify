import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function ImageCarousel({ slides, autoPlayMs = 5000, className = '' }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (count <= 1 || !autoPlayMs) return
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % count)
    }, autoPlayMs)
    return () => clearInterval(timer)
  }, [count, autoPlayMs])

  if (!count) return null

  const slide = slides[index]

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-charcoal ring-1 ring-black/10 ${className}`}>
      <div className="relative aspect-[16/10] w-full md:aspect-[21/9]">
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <p className="absolute bottom-4 left-4 right-14 text-sm font-medium text-white md:bottom-6 md:left-6 md:text-base">
          {slide.caption}
        </p>
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg transition-all hover:bg-white hover:scale-105"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-charcoal shadow-lg transition-all hover:bg-white hover:scale-105"
            aria-label="Next slide"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-3 right-4 flex gap-2 md:bottom-5">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-brand-orange' : 'w-2 bg-white/60 hover:bg-white'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
