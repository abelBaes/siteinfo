import React, {useState} from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return(
        <div className="campo-texto"> 
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} onChange={aoDigitar} required/>
        </div>
    )

}

export default CampoTexto;