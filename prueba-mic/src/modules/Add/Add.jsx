import React from "react";
import "./Add.css";

const Add = () => {

    const Data = require("../Database/Data.json"); //se trae la data del .json
    const { id, licencia, ref, name, description, maker, value, discount, careful,discover_more,composition } = Data[0]; //desestrucuracion de datos
    const [Cuadrado, setCuadrado] = React.useState("S");
    const [Cantidad,setCantidad] = React.useState(1);
    const [AlertaAña, setAlertaAña] = React.useState(false);
    const [Abrir_1,setAbrir_1] = React.useState(false);
    const [Abrir_2,setAbrir_2] = React.useState(false);
    const [Abrir_3,setAbrir_3] = React.useState(false);
    const [Abrir_4,setAbrir_4] = React.useState(false);
    const [Abrir_5,setAbrir_5] = React.useState(false);
    const alertaAñadir = () =>{ 
        setAlertaAña(true);
        setTimeout(() => {
            setAlertaAña(false);
        }, 3000);
    }
    return (
        <>
            <div className='Container-add'>
                <div><h3>{name}</h3></div>
                <div className="container-ref correr-arriba-30px"><h5>{licencia}</h5> <h6 className="correr-izq-ref">{ref}{Cuadrado}</h6></div>
                <div className="correr-izq-ref correr-arriba-30px"><h3 className="tachar">${value}</h3><h3 className="no-tachar">${value*discount}</h3></div>
                <div className="Cuadrado">
                    <button className={`${Cuadrado === "S" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={() => { setCuadrado("S") }} >S</button>
                    <button className={`${Cuadrado === "M" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={() => { setCuadrado("M") }} >M</button>
                    <button className={`${Cuadrado === "L" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={() => { setCuadrado("L") }} >L</button>
                    <button className={`${Cuadrado === "XL" ? 'Cuadado-pintado' : 'Cuadado-NO-Pintado'}`} onClick={() => { setCuadrado("XL") }} >XL</button>
                </div>
                <div className="box-general-añadir">
                    <div className="box-sumar-añadir">
                        <button  onClick={() => { Cantidad === 1 ? setCantidad(1) :setCantidad(Cantidad-1) }}><h5>-</h5></button >
                        <h5>{Cantidad}</h5>
                        <button  onClick={() => {Cantidad === 10 ? setCantidad(10) :setCantidad(Cantidad+1) }}><h5>+</h5></button>
                    </div>
                    <div className="box-button-añadir">
                        <button onClick={alertaAñadir}><h4>AGREGAR A MI BOLSA</h4></button>
                        <div className={`${AlertaAña === true ? 'Alerta-box-true' : 'Alerta-box-false'}`}>Ítem agregado al carrito</div>
                    </div>
                </div>
                
                <div className="descripcion-producto">
                    <hr className="line-hr" ></hr> {/** Solo crea una linea xd */}
                    <div className="sub-box-general-producto">
                        <button onClick={()=>{setAbrir_1(!Abrir_1)}}><h3>Descripcion del Producto</h3></button>
                        <h4 className={`${Abrir_1 === true ? 'Texto-Abierto' : 'Texto-Oculto'}`} >{description}</h4>
                    </div>
                    <hr className="line-hr" ></hr> 
                    <div className="sub-box-general-producto">
                        <button onClick={()=>{setAbrir_2(!Abrir_2)}}><h3>Especificaciones</h3></button>
                        <h4 className={`${Abrir_2 === true ? 'Texto-Abierto' : 'Texto-Oculto'}`} >{maker}</h4>
                    </div>
                    <hr className="line-hr" ></hr> 
                    <div className="sub-box-general-producto">
                        <button onClick={()=>{setAbrir_3(!Abrir_3)}}><h3>Composicion</h3></button>
                        <h4 className={`${Abrir_3 === true ? 'Texto-Abierto' : 'Texto-Oculto'}`} >{composition}</h4>
                    </div>
                    <hr className="line-hr" ></hr> 
                    <div className="sub-box-general-producto">
                        <button onClick={()=>{setAbrir_4(!Abrir_4)}}><h3>Cuidados</h3></button>
                        <h4 className={`${Abrir_4 === true ? 'Texto-Abierto' : 'Texto-Oculto'}`} >{careful}</h4>
                    </div>
                    <hr className="line-hr" ></hr> 
                    <div className="sub-box-general-producto">
                        <button onClick={()=>{setAbrir_5(!Abrir_5)}}><h3>Descubre mas</h3></button>
                        <h4 className={`${Abrir_5 === true ? 'Texto-Abierto' : 'Texto-Oculto'}`} >{discover_more}</h4>
                    </div>
                    <hr className="line-hr" ></hr> 

                </div>
            </div>
        </>
    )

}

export default Add;