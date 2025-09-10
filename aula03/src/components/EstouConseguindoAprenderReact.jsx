import React from 'react'

const EstouConseguindoAprenderReact = (props) => {
  return (
    <div>
        {props.estouConseguindo ? <h1>Estou indo bem...</h1> : <h1>precisoEstudarMais</h1>}


    </div>
  )
}

export default EstouConseguindoAprenderReact