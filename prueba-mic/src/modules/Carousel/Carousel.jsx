import React from "react"
import "./Carousel.css";
const ImagenesFolder = require.context("../../modules/Carousel/img", true);



const Carousel = () => {
    const Data = require("./Data.json"); //se trae la data del .json
    const imagen = Data.map(data => data.url); 
    const url = imagen[0].map(data => data.url);//se saca el array donde estan los objetos con las urls
    
    const [imagenActual, setImagenActual] = React.useState(0);
    const anteriorImagen = () => { imagenActual === 0 ? setImagenActual(imagenActual) : setImagenActual(imagenActual - 1) }
    const siguienteImagen = () => { imagenActual === 3 ? setImagenActual(imagenActual) : setImagenActual(imagenActual + 1) }
    
    const [imagenActualMitad,setImagenActualMitad] = React.useState(0);
    const anteriorImagenMitad = () => { imagenActualMitad === 0 ? setImagenActualMitad(imagenActualMitad) : setImagenActualMitad(imagenActualMitad - 1) }
    const siguienteImagenMitad = () => { imagenActualMitad === 5 ? setImagenActualMitad(imagenActualMitad) : setImagenActualMitad(imagenActualMitad + 1) }
    
    const cambiar = () =>{ let nume = imagenActual; setImagenActualMitad(nume);}
    const cambiar2 = () =>{ let nume = imagenActual+1; setImagenActualMitad(nume);}
    const cambiar3 = () =>{ let nume = imagenActual+2; setImagenActualMitad(nume);}
    return (
        <>
            <div className="Container-Carousel">
                <div className='Box-10'>
                    <button className="Fecla-center-heigth" onClick={anteriorImagen}>△</button>
                    <img  onClick={cambiar}src={ImagenesFolder(`${url[imagenActual]}`)} className="Tamaño-heigth" alt="Foto" />
                    <img  onClick={cambiar2} src={ImagenesFolder(`${url[imagenActual + 1]}`)} className="Tamaño-heigth" alt="Foto" />
                    <img  onClick={cambiar3}src={ImagenesFolder(`${url[imagenActual + 2]}`)} className="Tamaño-heigth" alt="Foto" />
                    <button className="Fecla-center-heigth" onClick={siguienteImagen}>▽</button>
                </div>

                <div className='Box-56'>
                <button className="Fecla-center-width" onClick={anteriorImagenMitad}>◁</button>
                    <img src={ImagenesFolder(`${url[imagenActualMitad]}`)} className="Tamaño-width" alt="Foto" />
                    <button className="Fecla-center-width" onClick={siguienteImagenMitad}>▷</button>
                </div>
                <div className='Box-34'>
                    VAGÓN-BAR Mucho texto No entendía lo que quería decirme, así que se lo advertí y volvió a intentarlo. Y seguí sin entender. Quizá pensó en un problema de entendederas mías o de explicaderas suyas, pero en realidad ocurría que sus palabras me llegaban como sonidos inarticulados, informes. Me llegaban deformadas e irreconocibles, extenuadas por el esfuerzo de atravesar la tela negra de la mascarilla. Borrosas, diría un amigo propenso a la sinestesia.  Así que renunció a la conversación y la zanjó con un «Mucho texto», que me hizo reír. Significaba que pretendía explicar algo demasiado largo y complejo y que no valía la pena. Estaba muy cansada. Le dije que usaría lo de «Mucho texto», si no le importaba. La honradez intelectual le obligó a aclararme que la expresión no le pertenecía: provenía de un meme de Twitter que se había convertido también en una pegatina (sticker) de WhatsApp. Lo busqué.
                    Consiste en el Yoda de La guerra de las galaxias con sombrero, gafas de sol, anillo, pendiente en el lóbulo de su gigantesca oreja derecha, zapatillas deportivas y otra indumentaria que confieren al venerado maestro verde un aire hípster. La leyenda «Mucho texto» en letras de molde blancas atraviesa la cintura del personaje.  Comprobé que se usa en las redes sociales desde hace un año, más o menos.
                </div>
            </div>

        </>
    )
}

export default Carousel;