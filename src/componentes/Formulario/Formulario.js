import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import CheckBox from "../CheckBox/CheckBox";

const Formulario = (props) =>{

    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState(0);
    const [marca, setMarca] = useState('HP');
    const [secao, setSecao] = useState('Computadores');
    const [novo, setNovo] = useState(false)

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido =>', nome, preco, marca, secao, novo);
        props.aoProdutoCadastrado({
            "nome" : nome,
            "preco" : preco,
            "marca" : marca,
            "secao" : secao,
            "novo" : novo
        })

    }

    return(
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do Produto</h2>
                <ListaSuspensa 
                    label="Seção" 
                    itens={props.secao}
                    aoAlterado={valor => setSecao(valor)}/>
                <ListaSuspensa 
                    label="Marca" 
                    itens={props.marcas}
                    aoAlterado={valor => setMarca(valor)}/>
                <CampoTexto 
                    label="Nome do Produto" 
                    placeholder="Digite o nome do produto." 
                    type="text"
                    aoAlterado={valor => setNome(valor)}/>
                <CampoTexto 
                    label="Preco do Produto" 
                    placeholder="Digite o preco do produto." 
                    type="text" 
                    min="0" 
                    max=""
                    aoAlterado={valor => setPreco(valor)}/>
                <CheckBox 
                    label="O produto é novo?"
                    aoAlterado={valor => setNovo(valor)}/>    
                <Botao>Inserir Produto</Botao>
            </form>
        </section>
    )
}

export default Formulario;