import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Contagem from './components/contagem'
import SearchBox from './components/searchBox'

function App () {

  const [ searchText, setSearchText ] = useState('')
  const [lista, setLista] = useState([])

  useEffect(()=>{
    setLista([
      {title:'Comprar bolo', done:false},
      {title:'Pegar o cachorro no Petshop', done:true},
      {title:'Gravar aula', done:false}
    ])
  }, [])


  function addAction(texto){
    let newList = [...lista, {title:texto, done: false}]

    setLista(newList)
  }

  function handleToggleDone (index) {
    let newList = [...lista]
    newList[index].done = !newList[index].done

    setLista(newList)
  }

  return(
    <>
      <Contagem/>
      <hr/>
      <SearchBox 
        frasePadrao="Faça sua pesquisa"
        onEnter={addAction}
      />
      <p>Texto procurado: {searchText}</p>
      <hr/>
      <ul >
        {lista.map((item, index)=>{
            return(
              <li key={index} onClick={()=>handleToggleDone(index)}>
                  {item.done && 
                    <del>{item.title}</del>
                  }
                  {!item.done &&
                    item.title
                  }
              </li>
            )
        })}
      </ul>
    </>
  )
}

export default App 