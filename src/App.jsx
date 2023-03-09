import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Services from './pages/Services.jsx'
import Gallery from './pages/Gallery.jsx'
import Quote from './pages/Quote.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App flex flex-col h-screen bg-gray-800">
      <Navbar />
      <div className="flex-grow min-h">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer className="h-16" />
    </div>
  )
}

export default App
