import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav/navbar'
import Home from './Components/Home/home';
import Gallery from './Components/Images/galeria';
import Us from './Components/About/about-us';
import PreNav from './Components/Nav/prenav'
import Contact from './Components/Contact/contact';
import SubNav from './Components/SubNav/subnav';

function App() {
  return (
    <div className='app'>
      <PreNav />
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nosotros' element={<Us />} />
        <Route path='/galeria' element={<Gallery />} />
        <Route path='/contacto' element={<Contact />} />
      </Routes>
      <SubNav />
    </div >
  );
}

export default App;
