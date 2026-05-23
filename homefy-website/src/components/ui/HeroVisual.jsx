function InteriorPanel() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="interiorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef3c7" />
          <stop offset="100%" stopColor="#fde68a" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#interiorGrad)" />
      <rect x="0" y="380" width="400" height="120" fill="#d6d3d1" />
      <rect x="40" y="200" width="140" height="180" fill="#78716c" rx="4" />
      <rect x="200" y="160" width="160" height="220" fill="#a8a29e" rx="4" />
      <rect x="60" y="80" width="280" height="8" fill="#57534e" rx="2" />
      <circle cx="320" cy="100" r="30" fill="#f97316" opacity="0.8" />
      <rect x="220" y="280" width="80" height="60" fill="#44403c" rx="2" />
      <rect x="50" y="320" width="60" height="40" fill="#57534e" rx="2" />
    </svg>
  )
}

function SolarPanel() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#bae6fd" />
          <stop offset="100%" stopColor="#e0f2fe" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#skyGrad)" />
      <polygon points="200,60 380,200 20,200" fill="#fef08a" opacity="0.9" />
      <rect x="80" y="220" width="240" height="160" fill="#fefce8" rx="4" />
      <rect x="90" y="230" width="100" height="60" fill="#1e3a5f" rx="2" />
      <rect x="200" y="230" width="100" height="60" fill="#1e3a5f" rx="2" />
      <rect x="90" y="300" width="100" height="60" fill="#1e3a5f" rx="2" />
      <rect x="200" y="300" width="100" height="60" fill="#1e3a5f" rx="2" />
      <line x1="140" y1="230" x2="140" y2="360" stroke="#334155" strokeWidth="1" />
      <line x1="250" y1="230" x2="250" y2="360" stroke="#334155" strokeWidth="1" />
      <line x1="90" y1="290" x2="300" y2="290" stroke="#334155" strokeWidth="1" />
      <rect x="160" y="400" width="80" height="60" fill="#78716c" rx="2" />
    </svg>
  )
}

export default function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-2xl shadow-charcoal/10 ring-1 ring-black/5 md:aspect-square lg:aspect-[4/5]">
      <div className="absolute inset-0 grid grid-cols-2">
        <div className="overflow-hidden">
          <InteriorPanel />
        </div>
        <div className="overflow-hidden">
          <SolarPanel />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-4 backdrop-blur-md">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-orange">
            Integrated Solutions
          </p>
          <p className="text-sm font-medium text-charcoal">Interiors + Solar + Lifestyle</p>
        </div>
        <div className="flex -space-x-2">
          {['#f97316', '#0ea5e9', '#10b981'].map((color) => (
            <span
              key={color}
              className="h-8 w-8 rounded-full border-2 border-white"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
