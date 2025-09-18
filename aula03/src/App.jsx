import React from 'react'
import Aluno from './components/Aluno'
import Produto from './components/Produto'


const App = () => {
  return (
    <div>
      {
        [

          {nome: "Trator", preco: "20000", categoria: "maquina", media: 0},
          {nome: "Mouse", preco: "10", categoria: "eletronico", media: 10},
          {nome: "Prato", preco: "20", categoria: "utensilio", media: 6}

        ].map((produto) =>
          <Produto nome={produto.nome} preco={produto.preco} categoria={produto.categoria} media={produto.media}/>
        )

        }
    



    </div>
  )
}

export default App