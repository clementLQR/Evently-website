import menuIcon from '../../assets/icons/menu.svg'
import Icon from './Icon.jsx'

// Bouton « Menu » du header. L'état ouvert/fermé est géré par le parent.
// `controls` = id de la liste du menu (accessibilité).
//
// <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} controls="menu" />
export default function MenuButton({ isOpen, onClick, controls }) {
  return (
    <button
      type="button"
      aria-expanded={isOpen}
      aria-controls={controls}
      onClick={onClick}
      className="label flex cursor-pointer items-center gap-3 text-xs font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
    >
      Menu
      <Icon src={menuIcon} className="h-3 w-5" />
    </button>
  )
}
