// Carte illustrée : image (zoom au survol), titre et texte.
// `width` / `height` = dimensions réelles de l'image, pour réserver la place au chargement.
// La largeur de la carte (carrousel mobile, grille) se règle avec `className`.
//
// import mercury from '../../assets/visuals/painting-mercury-messenger.webp'
// <StoryCard image={mercury} alt="…" width={960} height={886} title="Lancez-vous vite">
//   Le festival <strong>Lumen</strong> a publié son site en une soirée.
// </StoryCard>
export default function StoryCard({ image, alt, width, height, title, children, className = '' }) {
  return (
    <article className={`group ${className}`}>
      <div className="relative aspect-[26/17] overflow-hidden rounded-xl bg-surface/25 md:aspect-auto md:h-[300px]">
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 transition-colors duration-300 group-hover:bg-background/25"
        />
      </div>
      <h3 className="mt-5 text-sm font-bold tracking-widest uppercase">{title}</h3>
      <p className="mt-2 max-w-[65ch] text-xs leading-relaxed text-foreground/75 [&_strong]:font-semibold [&_strong]:text-foreground/90">
        {children}
      </p>
    </article>
  )
}
