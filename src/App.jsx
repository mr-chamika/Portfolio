import './App.css'
import { Route, Routes, BrowserRouter, useLocation } from 'react-router-dom'
import Navbar from './Components/Navbar';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Landing from './Pages/Landing';
import Home from './Pages/Home';
import Post from './Components/Post';

function App() {

  return (

    <BrowserRouter>

      <AppWrapper />

    </BrowserRouter>

  )
}

const AppWrapper = () => {

  const location = useLocation();

  return (
    <>

      {!(location.pathname == '/') && <Navbar />}

      <Routes>

        <Route path='/' element={<Landing />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/learnet' element={<Post />} />

      </Routes>
    </>
  );

}

export default App
