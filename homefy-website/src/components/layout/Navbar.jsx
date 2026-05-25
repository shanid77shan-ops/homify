import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { businessDisplayName, navLinks, getWhatsAppUrl } from '../../data/content'
import Button from '../ui/Button'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between px-5 py-4 md:px-8 lg:px-12">
        <a
          href="#home"
          className="group transition-opacity hover:opacity-90"
          onClick={handleNavClick}
        >
          <Logo className="h-20 w-20 md:h-24 md:w-24" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-brand-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button
            href={getWhatsAppUrl(`Hi ${businessDisplayName}, I'd like to get a free consultation.`)}
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get a Free Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white/80 text-charcoal lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-brand-orange-light hover:text-brand-orange"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button
                href={getWhatsAppUrl(`Hi ${businessDisplayName}, I'd like to get a free consultation.`)}
                variant="primary"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
              >
                Get a Free Consultation
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
