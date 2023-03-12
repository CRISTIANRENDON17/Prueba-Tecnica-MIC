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
                            <div className="Hello"><a>¡HOLA!</a></div>
                            <hr className="definition" ></hr>
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
                                <li><a className="" href="/">Pantalones y shorts</a></li>
                                <li><a className="" href="/">Calzado</a></li>
                                <li><a className="" href="/"></a></li>
                            </ul>
                        </li>
                        <li className="r-Li">
                            <a className="" href="/">HOMBRE</a>
                        </li>
                        <li className="r-Li">
                            <a className="" href="/">NEW ARRIVALS</a>
                        </li>
                        <li className="r-Li">
                            <a className="Color-red" href="/">BASICOS</a>
                        </li>
                        <li className="r-Li">
                            <a className="" href="/">OFERTAS</a>
                        </li>
                        <hr className="definition" ></hr>
                    </div>
                </ul>
                <div className="img-Movies">
                    <img src={Search} className="img-Movies-search" alt="Search" />
                    <img src={Person} className="img-Movies-person" alt="Person" />
                    <img src={Compra} className="img-Movies-compra" alt="Compra" />
                </div>
            </div>
            {/**
             * contenido de prueba para ver el deslize asi abajo
            <div className="contenido">
                VAGÓN-BAR Mucho texto No entendía lo que quería decirme, así que se lo advertí y volvió a intentarlo. Y seguí sin entender. Quizá pensó en un problema de entendederas mías o de explicaderas suyas, pero en realidad ocurría que sus palabras me llegaban como sonidos inarticulados, informes. Me llegaban deformadas e irreconocibles, extenuadas por el esfuerzo de atravesar la tela negra de la mascarilla. Borrosas, diría un amigo propenso a la sinestesia.  Así que renunció a la conversación y la zanjó con un «Mucho texto», que me hizo reír. Significaba que pretendía explicar algo demasiado largo y complejo y que no valía la pena. Estaba muy cansada. Le dije que usaría lo de «Mucho texto», si no le importaba. La honradez intelectual le obligó a aclararme que la expresión no le pertenecía: provenía de un meme de Twitter que se había convertido también en una pegatina (sticker) de WhatsApp. Lo busqué. 
                Consiste en el Yoda de La guerra de las galaxias con sombrero, gafas de sol, anillo, pendiente en el lóbulo de su gigantesca oreja derecha, zapatillas deportivas y otra indumentaria que confieren al venerado maestro verde un aire hípster. La leyenda «Mucho texto» en letras de molde blancas atraviesa la cintura del personaje.  Comprobé que se usa en las redes sociales desde hace un año, más o menos.
                Por ejemplo, para responder a un mensaje o a un hilo de mensajes que no interesan o aburren, se puede recurrir rápidamente a un «Mucho texto» que ahorra el desgaste de neuronas necesario para contraargumentar con razones. Se despacha al contrincante sin esfuerzo, con gracia y eficazmente. A veces para zanjar una discusión, quizá larga, en la que se ve imposible el acuerdo por la sinrazón de una o varias de las personas participantes: una manera de quedarse con la última palabra.
                En contextos más amables puede querer decir que alguien está siendo demasiado prolijo o enrevesado: un equivalente al «Te estás enrollando» que ha perdurado a través de varias generaciones adolescentes. Con este valor, carece casi siempre de maldad. Remite bien al concepto literal, como cuando de niños decíamos que un tebeo tenía mucha letra. Algo que a los de mi época nunca se nos ocurrió repetir de mayores, porque proyectaríamos una imagen de perezosos o de intelectualmente incapaces. Pero la expresión de nuestra infancia se refería a algo objetivo, factual: el tebeo presentaba más texto del deseable para que pudiera disfrutarlo un niño.
                He leído usos en los que «Mucho texto» equivale a «Es complicado», también en el sentido que se le atribuye a esta expresión en los perfiles de algunas redes sociales para describir la situación familiar o «de relaciones».
                Incluso puede funcionar como un «No me cuentes tu vida», cercano al concepto que manejaba la chica del primer párrafo. O al que despachaba Ricardo F. Colmenero cuando, en nuestra etapa navarra, veía que se estaba alargando demasiado en alguna excusa como alumno o como amigo. Entonces, se interrumpía abruptamente para declarar y declamar: «¡Y por eso llegué tarde a clase, señorita!». Una manera de hacerme reír y, a la vez, de ahorrarme y ahorrarse la discusión del asunto.
                Total, que descarto el recurso a ese meme, aunque quizá alguna vez echaré mano de él para embromar a un amigo. Pero por el camino descubrí que su novedad no consiste en lo que significa, sino en su polivalencia, en el carácter comodín y comodón que se deriva de tantas aplicaciones posibles. Y en que hace patente la pérdida de prestigio de la letra frente a la imagen, eso que José Luis Orihuela combate con su «Más reading y menos streaming». Como se trata de un fenómeno de las redes, de un meme, que para algunos es un medio de expresión característico de la generación Z, conviene resistir la tentación de darle categoría metafórica. Aunque sé que esto no bastará para que quienes me lean me aticen con la imagen de un Yoda que dice desde detrás de sus gafas oscuras: «Mucho texto».
                Paco Sánchez [Com 81 PhD 87] es periodista y profesor titular de la Universidade da Coruña.
            </div>
             */}
         
        </>
    );
}

export default Navbar;