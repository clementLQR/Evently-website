import arrowRight from '../../assets/icons/arrow-right.svg'
import Icon from './Icon.jsx'

const buttonStyles =
  'label inline-flex w-fit cursor-pointer items-center gap-10 border border-foreground px-6 py-4 text-xs font-medium transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

// Bouton à bordure avec une longue flèche (« Télécharger », « Créer ma page »).
// Avec `href`, il devient un lien <a> ; sinon c'est un <button>.
//
// <Button href="/documentation">Créer ma page</Button>
// <Button onClick={download}>Télécharger</Button>
export default function Button({ href, children, className = '', ...props }) {
  const content = (
    <>
      {children}
      <Icon src={arrowRight} className="h-3 w-20" />
    </>
  )

  if (href) {
    return (
      <a href={href} className={`${buttonStyles} ${className}`} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={`${buttonStyles} ${className}`} {...props}>
      {content}
    </button>
  )
}
