// Icône SVG qui prend la couleur du texte (comme currentColor).
// Le fichier SVG sert de masque : sa forme découpe un aplat de la couleur du texte.
// La taille se règle avec les classes Tailwind (h-*, w-*, size-*).
//
// import arrowRight from '../../assets/icons/arrow-right.svg'
// <Icon src={arrowRight} className="h-3 w-20 text-accent" />
export default function Icon({ src, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block shrink-0 bg-current ${className}`}
      style={{
        maskImage: `url("${src}")`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
      }}
    />
  )
}
