import React from "react"
import "./Carousel.css";
const ImagenesFolder = require.context("../../modules/Carousel/img", true);



const Carousel = () => {
    const Data = require("../Database/Data.json"); //se trae la data del .json
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
                <div className='Box-20'>
                    <button className="Fecla-center-heigth" onClick={anteriorImagen}>△</button>
                    <img  onClick={cambiar}src={ImagenesFolder(`${url[imagenActual]}`)} className="Tamaño-heigth" alt="Foto" />
                    <img  onClick={cambiar2} src={ImagenesFolder(`${url[imagenActual + 1]}`)} className="Tamaño-heigth" alt="Foto" />
                    <img  onClick={cambiar3}src={ImagenesFolder(`${url[imagenActual + 2]}`)} className="Tamaño-heigth" alt="Foto" />
                    <button className="Fecla-center-heigth" onClick={siguienteImagen}>▽</button>
                </div>

                <div className='Box-80'>
                <button className="Fecla-center-width" onClick={anteriorImagenMitad}>◁</button>
                    <img src={ImagenesFolder(`${url[imagenActualMitad]}`)} className="Tamaño-width" alt="Foto" />
                    <button className="Fecla-center-width" onClick={siguienteImagenMitad}>▷</button>
                </div>
            </div>

        </>
    )
}

export default Carousel;