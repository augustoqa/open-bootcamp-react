import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log('CONSTRUCTOR: Cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('WILLMOUNT: Antes de montar el componente')
  }

  componentDidMount() {
    console.log(
      'DidMount: Justo al del montaje del componente, antes de renderizarlo'
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('DidUpdate: Justo despues de actualizar el componente')
  }

  componentWillUnmount() {
    console.log('WillUnmount: Justo antes de desmontar el componente')
  }

  render() {
    return <div>LifeCycleExample</div>
  }
}
