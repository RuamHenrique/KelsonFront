import React, { useState } from 'react'

const HookMegaSena = () => {
    const [numeroSortedo, setNumeroSorteado] = useState()
    const [numerosSortedos, setNumerosSorteados] = useState([])

    function sortearNumero(){
        if(numerosSortedos.length < 6){
            const novoNumero = Math.floor(Math.random() * 60) + 1
            setNumeroSorteado(novoNumero)
            setNumerosSorteados([...numerosSortedos, novoNumero]);
        }
    }

  return (
    <div>
        <h1>sorteador de mega sena</h1>
        <p>Clique Aqui para sortear</p>
        <button onClick={() => sortearNumero()}>
            Clique


        </button>
        <h2>Numero atual {numeroSortedo}</h2>
        <h2>Os numerosSortedos sao {numerosSortedos.join(" - ")}</h2>




    </div>
  )
}

export default HookMegaSena