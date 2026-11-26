import { legalLinks, siteLinks, socialLinks } from '../../data/navigation.js'
import DitheredWordmark from '../ui/DitheredWordmark.jsx'
import Logo from '../ui/Logo.jsx'
import TextLink from '../ui/TextLink.jsx'

// Année du copyright, calculée une fois au chargement.
const currentYear = new Date().getFullYear()

// Colonne de liens du footer, avec son titre.
function FooterNav({ title, links }) {
  return (
    <nav aria-label={title}>
      <h2 className="label text-xs font-medium">{title}</h2>
      <ul className="mt-4 space-y-3 text-sm text-foreground/60">
        {links.map((link) => (
          <li key={link.label}>
            <TextLink href={link.href}>{link.label}</TextLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

// Footer commun à toutes les pages : grand mot tramé, présentation,
// liens du site et réseaux sociaux, puis mentions légales et sources des œuvres.
export default function Footer() {
  return (
    <footer className="border-t border-foreground/15 px-6 pt-12 pb-8 lg:px-24 xl:px-40">
      <DitheredWordmark text="EVENTLY" />

      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] lg:gap-16">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-foreground/60">
            Le CMS pensé pour l’événementiel. Festivals, marathons, séminaires : créez le site de
            votre événement à partir de modules prêts à l’emploi.
          </p>
        </div>
        <FooterNav title="Le site" links={siteLinks} />
        <FooterNav title="Suivre Evently" links={socialLinks} />
      </div>

      <div className="mt-14 flex flex-col gap-4 border-t border-foreground/15 pt-6 text-xs text-foreground/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} Evently</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legalLinks.map((link) => (
            <li key={link.label}>
              <TextLink href={link.href}>{link.label}</TextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
