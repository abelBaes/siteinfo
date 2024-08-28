import React, {useState} from "react";
import "./AreaSecao.css"
import Produto from "../Produto/Produto";


const AreaSecao = (props) => {
    return(
        (props.produtos.length > 0) ? <section className="secao">
            <h3>{props.nome}</h3>
            <div className="produtos">
            {props.produtos.map(prod => <Produto key={prod.nome}
                                                 nome={prod.nome}
                                                 preco={prod.preco}
                                                 marca={prod.marca}
                                                 novo={prod.novo}/>)}
            </div>                                                 
        </section> : ""
    )
} 

export default AreaSecao;