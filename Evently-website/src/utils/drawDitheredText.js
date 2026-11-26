// Dessine un mot tramé dans un canvas, comme l'image du hero.
// Le mot est dessiné en basse résolution sur toute la largeur du canvas, éclairé par
// un dégradé vertical, puis converti en 4 couleurs par une trame de Bayer 4 × 4.

// Seuils de la trame de Bayer 4 × 4
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5]
// Luminosité en haut et en bas du mot (0 → 1) : le bas se fond dans le fond.
const LIGHT_TOP = 0.95
const LIGHT_BOTTOM = 0.05

// Couleur CSS → [r, g, b]. Le canvas renvoie les couleurs opaques en "#rrggbb".
function toRgb(context, color) {
  context.fillStyle = color
  const hex = parseInt(context.fillStyle.slice(1), 16)
  return [(hex >> 16) & 255, (hex >> 8) & 255, hex & 255]
}

/**
 * @param {HTMLCanvasElement} canvas
 * @param {object} options
 * @param {string} options.text     Mot à dessiner
 * @param {string} options.font     Famille de police (ex. getComputedStyle(el).fontFamily)
 * @param {string[]} options.colors 4 couleurs CSS, de la plus sombre (fond) à la plus claire
 * @param {number} options.dot      Taille d'un point de trame, en pixels CSS
 */
export function drawDitheredText(canvas, { text, font, colors, dot }) {
  const columns = Math.max(Math.floor(canvas.clientWidth / dot), 1)
  const context = canvas.getContext('2d', { willReadFrequently: true })
  const palette = colors.map((color) => toRgb(context, color))

  // Taille de police pour que les lettres dessinées (sans les marges internes de la
  // police) occupent exactement toute la largeur : le mot est ainsi centré.
  context.font = `700 100px ${font}`
  const metrics = context.measureText(text)
  const inkWidth = metrics.actualBoundingBoxLeft + metrics.actualBoundingBoxRight
  const scale = columns / inkWidth
  const ascent = metrics.actualBoundingBoxAscent * scale
  const descent = metrics.actualBoundingBoxDescent * scale
  const rows = Math.max(Math.ceil(ascent + descent), 1)

  canvas.width = columns
  canvas.height = rows
  canvas.style.height = `${rows * dot}px`
  context.font = `700 ${100 * scale}px ${font}`
  context.textBaseline = 'alphabetic'
  context.fillStyle = '#fff'
  // Décale le texte pour que le bord gauche de la première lettre tombe sur x = 0.
  context.fillText(text, metrics.actualBoundingBoxLeft * scale, ascent)

  const image = context.getImageData(0, 0, columns, rows)
  const pixels = image.data
  for (let y = 0; y < rows; y++) {
    const light = LIGHT_TOP + ((LIGHT_BOTTOM - LIGHT_TOP) * y) / Math.max(rows - 1, 1)
    for (let x = 0; x < columns; x++) {
      const i = (y * columns + x) * 4
      // Hors des lettres : transparent.
      if (pixels[i + 3] < 128) {
        pixels[i + 3] = 0
        continue
      }
      const threshold = (BAYER[(y % 4) * 4 + (x % 4)] + 0.5) / 16
      const level = light * 3
      const index = Math.min(Math.floor(level) + (level % 1 > threshold ? 1 : 0), 3)
      ;[pixels[i], pixels[i + 1], pixels[i + 2]] = palette[index]
      pixels[i + 3] = 255
    }
  }
  context.putImageData(image, 0, 0)
}
