//import logo from './logo.svg';
import './App.css';
import Navbar from './modules/Navbar/Navbar.jsx';
import Carousel from './modules/Carousel/Carousel.jsx';
import Add from './modules/Add/Add.jsx';
import Footer from './modules/Footer/Footer.jsx';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="Box-collaider-navbar"></div>
      <div className='Container'>
        <div className='container-width-60'><Carousel></Carousel> </div>
        <div className='container-width-40'><Add></Add></div>
      </div>
      <div className='container-footer'>
        <Footer></Footer>
      </div>


      {/*funcionalidad add car esta en Carousel en un contenedor  */}
    </>
  )
}

export default App;