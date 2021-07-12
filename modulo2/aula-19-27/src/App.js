import React, {useState, useEffect} from 'react'
import Modal from './components/model'
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Categoria from './pages/Categoria'
import Painel from './pages/Painel'
import Login from './pages/Login'

const isLooged = true
const PrivateRoute = ({children, ...rest})=>{
  return(
    <Route {...rest}>
      {isLooged ? {children} : <Redirect to="/login"/>}
    </Route>
  )
}

function App () {

  const [name, setName] = useState(localStorage.getItem('name'))

  useEffect(()=>{
    localStorage.setItem('name', name)    
  },[name])

  const [modalVisible, setModalVisible] = useState(false)

  const handleButtonClick = ()=>{
    setModalVisible(true)
  }

  return (
    <BrowserRouter>
      <header>
        <h1>Bem vindo ao meu Site!</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            {isLooged ? <li><Link to="/painel">Painel</Link></li> : <li><Link to="/login">Login</Link></li>}
            <li><Link to="/quem-somos">Quem Somos</Link></li>
            <li><Link to="/categoria?tipo=esportes">Esportes</Link></li>
            <li><Link to="/categoria?tipo=noticias">Notícias</Link></li>
            <li><Link to="/categoria?tipo=viagem">Viagem</Link></li>
          </ul>
        </nav>
      </header>
      <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
      <hr/>
      <button onClick={handleButtonClick}>Abrir Modal</button>
      <Modal visible={modalVisible} setVisible={setModalVisible}>
        <h1>Testando 1 2 3 ...</h1>
      </Modal>
      <hr/>
      <Switch>
        <Route  exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          <Sobre />
        </Route>
        <Route path='/quem-somos'>
          <Redirect to="/sobre"/>
        </Route>
        <Route path='/categoria'>
          <Categoria />
        </Route>
        <Route path='/categoria'>
          <Categoria />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <PrivateRoute path='/painel'>
          <Painel/>
        </PrivateRoute>
        <Route path="*">
          <h4>Página não encontrada</h4>
        </Route>
      </Switch>
      <hr/>
      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  )
}

export default App;
