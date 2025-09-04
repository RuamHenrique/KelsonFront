import React from 'react'

const RenderizandoComFuncoes = () => {
  
    function oQueRenderizar(estado) {
        if (estado === "PB"){
            return <h1>Joao Pessoa</h1>

        } else {
            return <h2>Recife</h2>

        }


    }
  
    return (
    <div>
        {oQueRenderizar("PE")}




    </div>
  )
}

export default RenderizandoComFuncoes