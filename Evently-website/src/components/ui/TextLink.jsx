// Lien texte discret qui s'éclaircit au survol (footer, listes de liens).
// La couleur au repos vient du parent (ex. text-foreground/60 sur la liste).
export default function TextLink({ href, children, className = '', ...props }) {
  return (
    <a
      href={href}
      className={`transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
      {...props}
    >
      {children}
    </a>
  )
}
