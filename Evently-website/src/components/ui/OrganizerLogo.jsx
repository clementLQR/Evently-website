import Icon from './Icon.jsx'

// Logo d'un organisateur (icône + nom), atténué, qui s'allume au survol.
// Chaque marque a son style de nom : `nameClassName` (graisse, espacement, italique).
// Les organisateurs sont listés dans src/data/organizers.js.
export default function OrganizerLogo({ icon, name, nameClassName = 'font-bold tracking-[0.2em]' }) {
  return (
    <div className="group/logo flex items-center gap-3 whitespace-nowrap">
      <Icon
        src={icon}
        className="size-5 text-accent/55 transition-colors duration-300 group-hover/logo:text-accent"
      />
      <span
        className={`text-sm text-foreground/55 uppercase transition-colors duration-300 group-hover/logo:text-foreground ${nameClassName}`}
      >
        {name}
      </span>
    </div>
  )
}
