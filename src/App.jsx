import { BrowserRouter, Route, Routes} from 'react-router-dom'
import { About, Contact, Landing, Services } from './pages'
import { Footer, Navbar } from './components'

function App() {
 
  return (
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Landing />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<About />} />
    </Routes>
    <Footer />
    </BrowserRouter>
       
    
  )
}

export default App
