import React from "react";
import "./Add.css";

const Add = () => {

    const Data = require("../Carousel/Data.json"); //se trae la data del .json
    const {id,licencia,ref,name,description,maker,value,discount,careful} = Data[0]; //desestrucuracion de datos
    const [Cuadrado,setCuadrado] = React.useState("S");


    return (
        <>
            <div className='Container-add'>
                <div><h3>{name}</h3></div>
                <div className="container-ref correr-arriba-30px"><h5>{licencia}</h5> <h6 className="correr-izq-ref">{ref}{Cuadrado}</h6></div>
                <div className="correr-izq-ref correr-arriba-30px"><h4>${value}</h4></div>
                <div className="Cuadrado">
                    <button className={`${Cuadrado === "S" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={()=>{setCuadrado("S")}} >S</button>
                    <button className={`${Cuadrado === "M" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={()=>{setCuadrado("M")}} >M</button>
                    <button className={`${Cuadrado === "L" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={()=>{setCuadrado("L")}} >L</button>
                    <button className={`${Cuadrado === "XL" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={()=>{setCuadrado("XL")}} >XL</button>
                </div>
                <div></div>
            </div>
        </>
    )

}

export default Add;