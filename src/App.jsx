import './App.css'
import Nuevo from './Nuevo.jsx'
import {Sindefault, Otro  } from './Sindefault.jsx'
import Saludo from './Saludo.jsx'
import Celular from './Celular.jsx'


function App() {
  const nombre = 'burgos'
  const curso = '7mo  grado'
  const datos = {marca: "samsung", modelo: "a52", color: "negro"}


  return (
    <>
      <h1 className='algo'>Bienvenido a React</h1>
      <h1>tomas {nombre}</h1>
      <h2>{curso}</h2>
      < Titulo/>
      <Nuevo/>
      <Sindefault/>
      <Otro/>
      <Saludo  nombre={"ariel"} curso={"7mo 5ta"} apellido={"erretegui"}></Saludo>
      <Celular celular={datos}></Celular>
      


    </>
  )
}
 
function Titulo() {
  return(
     <>
    <h2>tomi barber</h2>
  </>
  )

 
}


export default App
