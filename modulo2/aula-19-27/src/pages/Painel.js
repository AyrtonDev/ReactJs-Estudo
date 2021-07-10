import React from 'react'
import {useHistory} from 'react-router-dom'

function Painel (){
   let history = useHistory()

   function handleButton(){
      history.replace('/')
   }

   return(
      <div>
         <h4>Bem vindo ao Painel do Cliente</h4>
         <button onClick={handleButton}>Sair</button>
      </div>
   )
}

export default Painel