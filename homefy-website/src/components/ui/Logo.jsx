export default function Logo({ className = 'h-16 w-16', variant = 'default' }) {
  const imgClass =
    variant === 'light'
      ? `${className} object-contain brightness-0 invert`
      : `${className} object-contain`

  return (
    <img
      src="/homefy-logo.png"
      alt="HOMEFY — Turning Houses into Homes"
      className={imgClass}
    />
  )
}
