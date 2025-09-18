import React from 'react'

const Produto = ({nome, preco, categoria, media}) => {
  return (
    <>
        <p>Nome: {nome}</p>
        <p>Preco: {preco}</p>
        <p>Categoria: {categoria}</p>
        <p>Media: {media}</p>
        <p>Status: {media > 0 ? "DISPONIVEL" : "ESGOTADO" }</p>

    </>
  )
}

export default Produto