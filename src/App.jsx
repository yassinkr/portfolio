import Landing from './Componentes/landing_catch';
import Expertise from './Componentes/expertise';
import Navbar from './Componentes/navbar';
import Cards from './Componentes/cards';
import Carousel from './Componentes/carousel';
import Footer from './Componentes/footer';
function App() {
  return (
    <div className=' tracking-wider' >
    <Landing />
    <Expertise />
    <Navbar/>
    <Cards/>
    <Carousel/>
    <Footer/>
    </div>
  );
}

export default App;
