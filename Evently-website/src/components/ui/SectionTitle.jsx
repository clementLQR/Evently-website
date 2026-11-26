// Grand titre de section, en capitales.
// `id` sert à relier la section : <section aria-labelledby="world-title">.
export default function SectionTitle({ id, children, className = '' }) {
  return (
    <h2
      id={id}
      className={`max-w-3xl text-2xl leading-none font-bold tracking-wide text-balance uppercase sm:text-3xl xl:text-4xl ${className}`}
    >
      {children}
    </h2>
  )
}
