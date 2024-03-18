import React from 'react';
import Landing from './Componentes/landing_catch';
import Expertise from './Componentes/expertise';
import Navbar from './Componentes/navbar';
import Cards from './Componentes/cards';
import Carousel from './Componentes/carousel';
function App() {
  return (
    <div className=' tracking-wider' >
    <Landing />
    <Expertise />
    <Navbar/>
    <Cards/>
    <Carousel/>
    </div>
  );
}

export default App;
