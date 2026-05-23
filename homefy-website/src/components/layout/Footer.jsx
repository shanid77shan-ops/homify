import { Phone, MapPin, ArrowUpRight } from 'lucide-react'
import { companyAddress, contactPhones, navLinks } from '../../data/content'

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-sm font-bold">
                H
              </span>
              <span className="text-xl font-bold">
                TEAM <span className="text-brand-orange">HOMEFY</span>
              </span>
            </div>
            <p className="mb-2 text-sm font-medium text-brand-orange">
              Turning Houses into Homes
            </p>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              A diversified home solutions company committed to redefining modern living
              across Kerala through design, technology, and service excellence.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Visit Us
            </h3>
            <div className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-brand-orange" size={18} />
              <p className="text-sm leading-relaxed text-slate-400">{companyAddress}</p>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-300">
              Quick Contact
            </h3>
            <ul className="space-y-3">
              {contactPhones.map((phone) => (
                <li key={phone}>
                  <a
                    href={`tel:+91${phone}`}
                    className="group flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-brand-orange"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 transition-colors group-hover:bg-brand-orange/20">
                      <Phone size={14} />
                    </span>
                    +91 {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} TEAM HOMEFY LLP. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://shophomefy.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-brand-orange"
            >
              shophomefy.com
              <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
