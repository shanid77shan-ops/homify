export default function Logo({ className = 'h-10 w-auto', variant = 'default' }) {
  if (variant === 'light') {
    return (
      <img
        src="/homefy-logo.png"
        alt="HOMEFY — Turning Houses into Homes"
        className={`${className} brightness-0 invert`}
      />
    )
  }

  return (
    <img
      src="/homefy-logo.png"
      alt="HOMEFY — Turning Houses into Homes"
      className={className}
    />
  )
}
