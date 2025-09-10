import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import EstaComSono from './components/EstaComSono'

const App = () => {
  return (
    <div>

    <EstouConseguindoAprenderReact estouConseguindo={true} />
    <EstaComSono comSono={false} />
    </div>
  )
}

export default App