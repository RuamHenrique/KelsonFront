import React from 'react'
import Exercicio from './components/exercicio'
import Exercicio2 from './components/Exercicio2'
import Campanha from './components/Campanha'

const App = () => {
  return (
    <div>
      
      <Exercicio/>
      <Exercicio2/>
      <Campanha mes="setembro"/>

    </div>
  )
}

export default App