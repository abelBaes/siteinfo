import React, {useState} from 'react';
import './App.css';
import Formulario from './componentes/Formulario/Formulario';
import AreaSecao from './componentes/AreaSecao/AreaSecao';

function App() {
  const [produtos, setProdutos] = useState([]);

  const adicionaProdutos = (prod) => {
    console.log(prod);

    const listaNova = produtos.slice();
    listaNova.push(prod);
    setProdutos(listaNova);
    console.log(listaNova);
  }

  const secao = [
    {
        nome : "Computadores"
    },
    {
      nome : "Acessórios"
    },
    {
      nome : "Impressoras"
    },
    {
      nome : "Games"
    },
    {
      nome : "Gadgets"
    }
  ]

  const marcas = [
    {
      nome : "HP"
    },
    {
      nome : "Dell"
    },
    {
      nome : "Positivo"
    },
    {
      nome : "Asus"
    },
    {
      nome : "Xing-Ling"
    }
  ]

  const listaSecao = secao.map( sec => sec.nome);
  const listaMarca = marcas.map(marca => marca.nome);

  return (
    <div>
        <Formulario secao={listaSecao} marcas={listaMarca} aoProdutoCadastrado={prod => adicionaProdutos(prod)}/>
        {secao.map(sec => <AreaSecao key={sec.nome}
                                     nome={sec.nome}
                                     produtos={produtos.filter(prod => prod.secao === sec.nome)}/>)}
    </div>
  );
}

export default App;
