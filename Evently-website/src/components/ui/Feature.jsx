// Atout d'Evently : petit titre + texte court (Design, Personnalisation…).
//
// <Feature title="Design">Créez n'importe quel site web…</Feature>
export default function Feature({ title, children }) {
  return (
    <div>
      <h2 className="mb-3 text-sm font-bold tracking-widest uppercase">{title}</h2>
      <p className="max-w-xs text-xs leading-relaxed text-foreground/75">{children}</p>
    </div>
  )
}
