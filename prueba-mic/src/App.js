//import logo from './logo.svg';
import './App.css';
import Navbar from './modules/Navbar/Navbar.jsx';
import Carousel from './modules/Carousel/Carousel.jsx';
function App() {

  return(
    <>
    <Navbar></Navbar>
    <div className="Box-collaider-navbar"></div>
    <Carousel></Carousel> 
    </>
  )
}

export default App;