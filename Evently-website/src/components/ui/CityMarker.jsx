// Point d'une ville sur la carte du monde ASCII.
// `x` / `y` = position en % de la carte. Quand `active`, le point brille,
// pulse (sauf mouvement réduit) et affiche le nom de la ville.
// `labelSide="left"` pour les villes au bord droit de la carte (Tokyo, Sydney).
// Les villes sont listées dans src/data/cities.js.
export default function CityMarker({ name, x, y, active = false, labelSide = 'right' }) {
  return (
    <span
      data-active={active || undefined}
      className="group absolute size-1.5 -translate-1/2 rounded-full bg-accent transition-[background-color,box-shadow] duration-500 data-active:bg-foreground data-active:shadow-[0_0_12px_4px_rgb(178_135_222/0.55)] sm:size-2"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className="absolute inset-0 rounded-full bg-accent opacity-0 group-data-active:opacity-75 group-data-active:motion-safe:animate-ping" />
      <span
        className={`absolute top-1/2 -translate-y-1/2 rounded bg-background/85 px-1.5 py-0.5 text-[10px] font-medium tracking-[0.2em] whitespace-nowrap uppercase opacity-0 transition-opacity duration-500 group-data-active:opacity-100 ${labelSide === 'left' ? 'right-3' : 'left-3'}`}
      >
        {name}
      </span>
    </span>
  )
}
