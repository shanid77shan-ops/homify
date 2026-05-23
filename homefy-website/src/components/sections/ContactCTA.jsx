import { Phone, MessageCircle } from 'lucide-react'
import { contactPhones } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import Button from '../ui/Button'

export default function ContactCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-orange to-brand-orange-dark">
      <div className="container-wide">
        <MotionWrapper>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to transform your space?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-orange-100 md:text-lg">
              Get a free consultation with our experts. Whether it&apos;s interiors, solar, or
              home essentials — we&apos;re here to help you every step of the way.
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              {contactPhones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-all hover:bg-white/25"
                >
                  <Phone size={16} />
                  +91 {phone}
                </a>
              ))}
            </div>

            <Button
              href="#contact"
              variant="outline"
              className="border-white/30 bg-white text-brand-orange hover:border-white hover:bg-orange-50 hover:text-brand-orange-dark"
            >
              <MessageCircle size={16} />
              Get a Free Consultation
            </Button>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
