import './App.css'
import Father from './components/container/father'
import TaskListComponent from './components/container/task_list'
import LoginFormik from './components/pure/forms/loginFormik'
import { Ejemplo1 } from './hooks/Ejemplo1'
import { Ejemplo2 } from './hooks/Ejemplo2'
import { MiComponenteConContexto } from './hooks/Ejemplo3'

function App() {
  return (
    <div className='App'>
      {/* <Father></Father> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
      {/* Ejemplo de uso de Formik y Yup */}
      <LoginFormik></LoginFormik>
    </div>
  )
}

export default App
