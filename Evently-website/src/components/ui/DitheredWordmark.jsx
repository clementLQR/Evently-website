import { useEffect, useRef } from 'react'
import { drawDitheredText } from '../../utils/drawDitheredText.js'

// Les 4 couleurs du thème actif, du fond vers le texte.
const THEME_COLORS = ['--background', '--surface', '--accent', '--foreground']

// Grand mot tramé sur toute la largeur (footer). Redessiné quand la largeur change.
// Décoratif : masqué aux lecteurs d'écran.
//
// <DitheredWordmark text="EVENTLY" />
export default function DitheredWordmark({ text }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const style = getComputedStyle(canvas)
    const font = style.fontFamily
    const colors = THEME_COLORS.map((name) => style.getPropertyValue(name).trim())
    let drawnWidth = 0
    let cancelled = false

    const draw = () => {
      // Ne redessine que si la largeur a changé (la hauteur dépend du dessin).
      if (canvas.clientWidth === drawnWidth) return
      drawnWidth = canvas.clientWidth
      // Points plus fins sur mobile, où le mot est petit.
      const dot = matchMedia('(max-width: 640px)').matches ? 2 : 3
      drawDitheredText(canvas, { text, font, colors, dot })
    }

    const observer = new ResizeObserver(draw)
    // Attend la police des titres, sinon le mot serait dessiné avec la police de secours.
    const start = () => {
      if (!cancelled) observer.observe(canvas)
    }
    document.fonts.load(`700 100px ${font}`).then(start, start)

    return () => {
      cancelled = true
      observer.disconnect()
    }
  }, [text])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="block w-full font-title [image-rendering:pixelated]"
    />
  )
}
