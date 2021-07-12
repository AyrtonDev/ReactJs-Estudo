import React from 'react'
import { useHistory } from 'react-router'
import {useSelector, useDispatch} from 'react-redux'

function Home () {
   const name = useSelector(state => state.usuario.name)
   const contador = useSelector(state=> state.usuario.contador)

   const dispatch = useDispatch()

   const history = useHistory()

   function handleButton () {
      setTimeout(()=>{
         history.replace("/sobre")
      },2000)
   }

   const handleAyrton = ()=>{
      dispatch({
         type:'SET_NAME',
         payload: ({name: 'Ayrton'})
      })
   }
   const handleNumber = () =>{
      dispatch({
         type:'INCREMENT_CONTADOR'
      })
   }

   return(
      <div>
         <h4>Página HOME</h4>

         NOME: {name}<br/>
         CONTADOR: {contador}<br/><br/>

         <button onClick={handleAyrton}>Setar nome para Ayrton</button>
         <button onClick={handleNumber}>Adicionar mais 1</button>

         <br/><br/>
         <button onClick={handleButton}>Ir para a página SOBRE</button>
      </div>
   )
}

export default Home