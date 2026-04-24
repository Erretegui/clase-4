import React from 'react'

export default function Saludo({nombre, curso, apellido}) {
  return (
    <>
    <p className='frase'>hola soy {nombre} {apellido} y estoy en el curso {curso}</p>
    
    </>
  )
}
