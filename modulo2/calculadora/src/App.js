import React, { useState } from 'react'

function App () {

  const [ conta, setConta ] = useState(10)
  const [ pct, setPct] = useState(0)

  return(
    <>
      <h1>Calculadora de Gorjeta</h1>
      <p>Quanto deu a conta?</p>
      <input type="number" value={conta} onChange={(e)=>setConta(parseFloat(e.target.value))} />
      <p>Qual a porcetagem da gorjeta?</p>
      <input type="number" value={pct} onChange={(e)=>setPct(parseFloat(e.target.value))} />
      <hr/>
      {conta > 0
      && <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta({pct}%): R$ {conta * pct / 100}</p>
          <p><strong>TOTAL: R${conta + (conta * pct / 100)}</strong></p>
          </>
      }
    </>
  )
}

export default App