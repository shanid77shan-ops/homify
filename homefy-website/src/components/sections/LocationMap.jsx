import { MapPin, ExternalLink, Clock, Globe } from 'lucide-react'
import { companyAddress, mapEmbedUrl, mapsLink, websiteUrl, businessHours } from '../../data/content'
import MotionWrapper from '../ui/MotionWrapper'
import SectionHeader from '../ui/SectionHeader'
import Button from '../ui/Button'

export default function LocationMap() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Find Us"
          title="Visit our showroom in Chelari"
          description="Drop by our office at Mahima Tower — we'd love to walk you through interiors, solar solutions, and more in person."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <MotionWrapper className="lg:col-span-3" delay={0.1}>
            <div className="overflow-hidden rounded-2xl shadow-xl shadow-charcoal/10 ring-1 ring-black/5">
              <iframe
                title="TEAM HOMEFY LLP location on Google Maps"
                src={mapEmbedUrl}
                className="aspect-[4/3] w-full border-0 md:aspect-video"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </MotionWrapper>

          <MotionWrapper className="lg:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col justify-center rounded-2xl bg-warm-gray p-6 md:p-8">
              <div className="mb-6 flex gap-3">
                <MapPin className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                <div>
                  <h3 className="mb-1 font-bold text-charcoal">Office Address</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{companyAddress}</p>
                </div>
              </div>

              <div className="mb-6 flex gap-3">
                <Clock className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                <div>
                  <h3 className="mb-1 font-bold text-charcoal">Business Hours</h3>
                  <p className="text-sm text-slate-600">{businessHours}</p>
                </div>
              </div>

              <div className="mb-8 flex gap-3">
                <Globe className="mt-0.5 shrink-0 text-brand-orange" size={20} />
                <div>
                  <h3 className="mb-1 font-bold text-charcoal">Website</h3>
                  <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-brand-orange transition-colors hover:text-brand-orange-dark"
                  >
                    homefy.in
                  </a>
                </div>
              </div>

              <Button
                href={mapsLink}
                variant="primary"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Google Maps
                <ExternalLink size={16} />
              </Button>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
