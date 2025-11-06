import Hero from './components/Hero'
import Schedule from './components/Schedule'
import Location from './components/Location'
import Accounts from './components/Accounts'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-100 via-amber-50 to-white text-stone-800">
      <Hero />
      <Schedule />
      <Location />
      <Accounts />
      <Gallery />

      <footer className="py-10 text-center text-stone-500">
        <p>
          Terima kasih atas doa dan kehadiran Bapak/Ibu/Saudara/i. Sampai
          bertemu di hari bahagia kami.
        </p>
      </footer>
    </div>
  )
}

export default App
