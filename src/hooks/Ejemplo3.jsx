/**
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react'

const miContexto = React.createContext(null)
export const Componente1 = () => {
  const state = useContext(miContexto)
  return (
    <div>
      <h1>El Token es: {state.token}</h1>
      <Componente2></Componente2>
    </div>
  )
}

export const Componente2 = () => {
  const state = useContext(miContexto)
  return (
    <div>
      <h2>La sesion es: {state.session}</h2>
    </div>
  )
}

export const MiComponenteConContexto = () => {
  const estadoInicial = {
    token: '1234567',
    session: 1,
  }
  const [sessionData, setSessionData] = useState(estadoInicial)

  function actualizarSesion() {
    setSessionData({
      token: '392093kfdjs',
      session: sessionData.session + 1,
    })
  }
  return (
    <miContexto.Provider value={sessionData}>
      <h1>Ejemplo de useContext()</h1>
      <Componente1></Componente1>
      <button onClick={actualizarSesion}>Actualizar Sesion</button>
    </miContexto.Provider>
  )
}
