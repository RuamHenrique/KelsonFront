import React, { useEffect } from 'react'

const ListaDeAlunos = () => {


    const [alunos, setAlunos] = useState([])


    useEffect(() => {

        
        async function fetchData(){
            const response = await fetch("http://localhost:3030/alunos")
            const data = await response.json()
            setAlunos(data)


        }

        fetchData()


    }, [])




  return (
    <div>ListaDeAlunos</div>
  )
}

export default ListaDeAlunos