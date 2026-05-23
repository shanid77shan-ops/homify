const variants = {
  primary:
    'bg-brand-orange text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-brand-orange/30 hover:-translate-y-0.5',
  outline:
    'border-2 border-charcoal/15 bg-transparent text-charcoal hover:border-brand-orange hover:text-brand-orange hover:bg-brand-orange-light/50',
  ghost:
    'bg-transparent text-charcoal hover:bg-warm-gray-100',
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange'

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
