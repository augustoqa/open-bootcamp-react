/**
 * Ejemplo de uso del Hook useState
 *
 * Crear un componente tipo funcion y acceder a su estado
 * privado a traves de un hook y, ademas, poder modificarlo
 */

import { useState } from 'react'

import React from 'react'

export const Ejemplo1 = () => {
  const valorInicial = 0

  const personaInicial = {
    nombre: 'Martin',
    email: 'margin@mail.com',
  }

  const [contador, setContador] = useState(valorInicial)
  const [persona, setPersona] = useState(personaInicial)

  function incrementarContador() {
    setContador(contador + 1)
  }

  function actualizarPersona() {
    setPersona({
      nombre: 'Pepe',
      email: 'pepe@mail.com',
    })
  }
  return (
    <div>
      <h1>Ejemplo de useState()</h1>
      <h2>CONTADOR: {contador}</h2>
      <h2>DATOS DE LA PERSONA:</h2>
      <h3>NOMBRE: {persona.nombre}</h3>
      <h3>EMAIL: {persona.email}</h3>
      <button onClick={incrementarContador}>Incrementar Contador</button>
      <button onClick={actualizarPersona}>Actualizar persona</button>
    </div>
  )
}
