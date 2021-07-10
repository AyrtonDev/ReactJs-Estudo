import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Input = styled.input`
   width: 500px;
   height: 50px;
   padding: 5px 10px;
   font-size: 15px
`

function SearchBox (props) {

   const [ texto, setTexto ] = useState('')

   function handleKeyUp (e) {
      if(e.keyCode === 13){
         if(props.onEnter) {
            props.onEnter(texto)
         }
         setTexto('')
      }
   }

   return(
      <>
         <Input 
            type="text"
            value={texto}
            onChange={(e)=>setTexto(e.target.value)}
            onKeyUp={handleKeyUp}
            placeholder={ props.frasePadrao ?? "Digite alguma coisa..."}
         />
      </>
   )
}

export default SearchBox