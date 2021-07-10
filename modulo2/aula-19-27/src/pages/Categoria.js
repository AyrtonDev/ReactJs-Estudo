import React from 'react'
import {useLocation} from 'react-router-dom'

function useQuery() {
   return new URLSearchParams( useLocation().search )
}

function Categoria(){
   let query = useQuery()

   let cat = query.get('tipo')
   let subtipo = query.get('subtipo')

   return(
      <>
         <h4>Página de Categoria</h4>
         Exibindo Itens da categoria: {cat} - {subtipo}
      </>
   )
}

export default Categoria