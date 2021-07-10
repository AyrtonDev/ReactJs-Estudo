import React, {useState, useEffect} from 'react'


function Lista (props) {

   
   let texto = props.texto
   const [lista, setLista] = useState([])

   useEffect(()=>{
      setLista([
         {title:'Comprar bolo', done:false},
         {title:'Pegar o cachorro no Petshop', done:true},
         {title:'Gravar aula', done:false}
      ])
   },[])

   return(
      <>
         <ul >
            {lista.map((item, index)=>{
               return(
                  <li key={index}>
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

export default Lista