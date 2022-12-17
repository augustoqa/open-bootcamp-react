import React from 'react'

function pressButton() {
  alert(`Default Text`)
}

function pressButtonParams(text) {
  alert(`Text: ${text}`)
}
function Child() {
  return (
    <div>
      <p onMouseOver={() => console.log('On Mouse Over')}>Child Component</p>
      <button onClick={() => console.log('Boton 1 pulsado')}>Button 1</button>
      <button onClick={pressButton}>Botton 2</button>
      <button onClick={() => pressButtonParams('Hello')}>Botton 3</button>
    </div>
  )
}

export default Child
