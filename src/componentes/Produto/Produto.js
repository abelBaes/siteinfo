import React, {useState} from "react";
import "./Produto.css";

const Produto = (props) => {
    const endereçoImagem = "/imagens/" + props.marca + ".png"
    return(
        <div className="produto">
            <div className="cabecalho">
                <img src={endereçoImagem} alt={"imagem" + props.marca}/>
            </div>
            <div className="rodape">
                <h4>{"Nome: "+props.nome}</h4>
                <h5>{"R$ "+props.preco}</h5>
                <h5>{"Marca: "+props.marca}</h5>
                <h5>{"Estado: "+((props.novo === true) ? "Novo" : "Usado")}</h5>
            </div>
        </div>
    )
}

export default Produto;