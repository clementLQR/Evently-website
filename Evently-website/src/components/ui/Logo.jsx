// Logo texte « EVENTLY » (header et footer).
export default function Logo({ className = '' }) {
  return (
    <span className={`logo text-lg tracking-[0.25em] uppercase ${className}`}>
      Evently
    </span>
  )
}
