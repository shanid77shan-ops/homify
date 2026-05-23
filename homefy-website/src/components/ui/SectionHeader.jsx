import MotionWrapper from './MotionWrapper'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center mx-auto'

  return (
    <MotionWrapper className={`mb-14 flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-charcoal md:text-4xl lg:text-[2.75rem] lg:leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-slate-500 md:text-lg">{description}</p>
      )}
    </MotionWrapper>
  )
}
