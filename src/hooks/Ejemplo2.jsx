/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */

import React, { useState, useRef, useEffect } from 'react'

export const Ejemplo2 = () => {
  const [contador1, setContador1] = useState(0)
  const [contador2, setContador2] = useState(0)

  const miRef = useRef()

  function incrementar1() {
    setContador1(contador1 + 1)
  }

  function incrementar2() {
    setContador2(contador2 + 1)
  }

  // Ejecutar siempre snipped de codigo
  // useEffect(() => {
  //   console.log('CAMBIO EN EL ESTAO DEL COMPONENTE')
  //   console.log('Mostrando Referencia a elemento del DOM:')
  //   console.log(miRef)
  // })

  // Ejecutar cuando cambie contador1
  useEffect(() => {
    console.log('Cambio el estado de contador1')
  }, [contador1])

  return (
    <div>
      <h1>Ejemplo de useState(), useRef() y useEffect()</h1>
      <h2>CONTADOR 1: {contador1}</h2>
      <h2>CONTADOR 2: {contador2}</h2>
      <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
      <div>
        <button onClick={incrementar1}>Incrementar contador 1</button>
        <button onClick={incrementar2}>Incrementar contador 2</button>
      </div>
    </div>
  )
}
