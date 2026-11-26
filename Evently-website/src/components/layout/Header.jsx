import { useEffect, useRef, useState } from 'react'
import { menuLinks } from '../../data/navigation.js'
import Logo from '../ui/Logo.jsx'
import MenuButton from '../ui/MenuButton.jsx'

// Barre du haut, commune à toutes les pages : logo + menu déroulant.
// Le menu se ferme avec Échap, au clic en dehors ou au clic sur un lien.
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    const closeOnOutsideClick = (event) => {
      if (!navRef.current.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('keydown', closeOnEscape)
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.removeEventListener('pointerdown', closeOnOutsideClick)
    }
  }, [isOpen])

  return (
    <header className="relative z-20 flex items-center justify-between bg-background px-6 py-6 lg:px-10">
      <a
        href="/"
        className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <Logo />
      </a>

      <nav ref={navRef} aria-label="Menu principal">
        <MenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} controls="main-menu" />
        <ul
          id="main-menu"
          className={`${isOpen ? 'flex' : 'hidden'} absolute top-full right-6 min-w-48 flex-col border border-foreground/20 bg-background py-2 lg:right-10`}
        >
          {menuLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="label block px-5 py-2 text-sm transition-colors hover:text-accent focus-visible:text-accent focus-visible:outline-none"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
