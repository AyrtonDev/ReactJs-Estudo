import React, { useState } from 'react'
import './App.css'
import styled from 'styled-components'

const Site = styled.div`
  width: 400px;
  height: 400px;
  background-color: #dac;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`

const Input = styled.input`
  width:200px;
  height: 50px;
  font-size: 16px;
  padding: 10px;
`

function App () {

  const [ email, setEmail ] = useState('')
  const [ isLogged, setIsLogged ] = useState(true)

  return(
    <Site>
      <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />

      {email.length > 0 &&
        <p>{email.length} carectere{email.length != 1 ? 's' : ''}</p>
      }

      {isLogged ? <button>Sair</button> : <button>Fazer login</button>}
    </Site>
  ) 
}

export default App