import React, { useState } from "react";
import "./Navbar.css";
import IconButton from "./Icon/IconHamb.jsx"
import logo_movies from './Img/logo_movies.png';
import Person from './Img/Person.png';
import Compra from './Img/compra.png';
import Search from './Img/search.png';


function Navbar() {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        //cuando esta en true lo pasa a false y vice versa
        setClicked(!clicked);
    }
    
    return (
        <>
            <div className="NavContainer">
                <div className="Burger">
                    <IconButton clicked={clicked} handleClick={handleClick} />
                </div>
                {/*<h2 className="h2">Navbar <span className="span">Responsive</span></h2>*/}
                <img src={logo_movies} className="logo_movies" alt="logo" />
                <ul className="r-ul">
                <div className={`links ${clicked ? 'active' : 'nav'}`}>
                    <li className="r-Li">
                        <a className="" href="/">MUJER</a>
                        <ul className="">
                            <li className="mujer">MUJER</li>
                            <li><a className="" href="/">Camisas</a></li>
                            <li><a className="" href="/">Pijama</a></li>
                            <li><a className="" href="/">Ropa interiror</a></li>
                            <li><a className="" href="/">Camisas</a></li>
                            <li><a className="" href="/">Chaquetas y Buzos</a></li>
                            <li><a className="" href="/">Joggers</a></li>
                            <li><a className="" href="/">Camisas</a></li>
                            <li><a className="" href="/">pantalones y shorts</a></li>
                            <li><a className="" href="/">Calzado</a></li>
                            <li><a className="" href="/"></a></li>
                        </ul>
                    </li>
                    <li className="r-Li">
                        <a className="" href="/">HOMBRE</a>
                    </li>
                    <li className="r-Li">
                        <a className="" href="/">NEW ARRIBALS</a>
                    </li> 
                    <li className="r-Li"> 
                        <a className="Color-red" href="/">BASICOS</a>
                    </li>
                    <li className="r-Li">
                        <a className="" href="/">OFERTAS</a>
                    </li>
                </div>
                </ul>
                <div className="img-Movies">
                    <img src={Search} className="img-Movies-search" alt="Search" />
                    <img src={Person} className="img-Movies-person" alt="Person" />
                    <img src={Compra} className="img-Movies-compra" alt="Compra" />
                </div>
            </div>
        </>
    );
}

export default Navbar;