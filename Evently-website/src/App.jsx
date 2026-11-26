import Footer from './components/layout/Footer.jsx'
import Header from './components/layout/Header.jsx'

// Composant racine : header et footer communs, le contenu des pages va dans <main>.
export default function App() {
  return (
    <>
      <Header />
      <main className="min-h-[50svh]" />
      <Footer />
    </>
  )
}
