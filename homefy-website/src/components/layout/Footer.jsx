import { Phone, MapPin, ArrowUpRight } from 'lucide-react'
import {
  companyAddress,
  companyLegalName,
  contactPhones,
  mapsLink,
  navLinks,
  websiteUrl,
} from '../../data/content'
import Logo from '../ui/Logo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-white">
      <div className="section-padding container-wide">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <Logo className="mb-4 h-12 w-12" variant="light" />
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-400">
              {companyLegalName}
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
              <div>
                <p className="text-sm leading-relaxed text-slate-400">{companyAddress}</p>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-brand-orange transition-colors hover:text-orange-300"
                >
                  Get directions
                  <ArrowUpRight size={12} />
                </a>
              </div>
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
            © {new Date().getFullYear()} {companyLegalName}. All rights reserved.
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
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-brand-orange"
            >
              homefy.in
              <ArrowUpRight size={12} />
            </a>
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
