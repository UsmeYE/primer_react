import './App.css'
import Saludo from './components/saludo'
import Contenedor from './components/contenedor'
import Contador from './components/contador'

const App = () => {
  return (
    <Contenedor>
      <Saludo nombre="Yamid" idioma="sueco" />
      <Contador />
    </Contenedor>
  )
}

export default App