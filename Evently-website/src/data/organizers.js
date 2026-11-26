// Organisateurs affichés dans le bandeau « Ils créent avec Evently ».
// `nameClassName` donne à chaque marque son propre style de nom.
import grandHuit from '../assets/icons/organizers/grand-huit.svg'
import laTraversee from '../assets/icons/organizers/la-traversee.svg'
import lesEclats from '../assets/icons/organizers/les-eclats.svg'
import lumen from '../assets/icons/organizers/lumen.svg'
import papierLibre from '../assets/icons/organizers/papier-libre.svg'
import riveGauche from '../assets/icons/organizers/rive-gauche.svg'
import studioNord from '../assets/icons/organizers/studio-nord.svg'

export const organizers = [
  { name: 'Lumen', icon: lumen, nameClassName: 'font-extrabold tracking-[0.25em]' },
  { name: 'Rive Gauche', icon: riveGauche, nameClassName: 'font-light tracking-[0.3em]' },
  { name: 'La Traversée', icon: laTraversee, nameClassName: 'font-semibold italic tracking-[0.2em]' },
  { name: 'Studio Nord', icon: studioNord, nameClassName: 'font-extrabold tracking-[0.15em]' },
  { name: 'Les Éclats', icon: lesEclats, nameClassName: 'font-semibold tracking-[0.35em]' },
  { name: 'Grand Huit', icon: grandHuit, nameClassName: 'font-light tracking-[0.25em]' },
  { name: 'Papier Libre', icon: papierLibre, nameClassName: 'font-bold tracking-[0.2em]' },
]
