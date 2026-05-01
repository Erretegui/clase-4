import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Titulo } from './components/Titulo'
import Childrentest from './components/Childrentest'
import Producto from './components/Producto'

function App() {


  const productos = [
    { id: 1, nombre: "Laptop Dell", precio: 799.99, img:"imagedell.png" },
    { id: 2, nombre: "Mouse Logitech", precio: 29.99, img:"imagelogitech.png" },
    { id: 3, nombre: "Teclado Mecánico", precio: 129.99, img:"imageteclado.png" },
  ]

  return (
    <>
  {
    productos.map(({id, nombre, precio, img}) => {
      return(
        <Producto key={id} nombre={nombre} precio={precio} img={img} />
      )
    }
      )
  }
   
      <Titulo srcImg="image1.png">la piedra</Titulo>
      <Titulo  srcImg="image2.png">abel pitos</Titulo>
      <Titulo  srcImg="image3.png">rodrigo el potrillo</Titulo>
    </>
  )
}

export default App
