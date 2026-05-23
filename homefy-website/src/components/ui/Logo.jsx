export default function Logo({ className = 'h-20 w-20' }) {
  const imgClass = `${className} object-contain`

  return (
    <img
      src="/homefy-logo.png"
      alt="HOMEFY — Turning Houses into Homes"
      className={imgClass}
    />
  )
}
