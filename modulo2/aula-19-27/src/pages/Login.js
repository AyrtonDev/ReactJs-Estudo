import React from 'react'
import {useHistory} from 'react-router-dom'

function Login (){
   let history = useHistory()

   function handleButton(){
      history.replace('/')
   }

   return(
      <div>
         <h4>Página de Login</h4>
         <button onClick={handleButton}>Voltar ao Home</button>
      </div>
   )
}

export default Login