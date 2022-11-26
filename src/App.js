import './App.css'
import TaskListComponent from './components/container/task_list'
import { Ejemplo1 } from './hooks/Ejemplo1'
import { Ejemplo2 } from './hooks/Ejemplo2'
import { MiComponenteConContexto } from './hooks/Ejemplo3'

function App() {
  return (
    <div className='App'>
      <TaskListComponent></TaskListComponent>
      {/* <Ejemplo1></Ejemplo1> */}
      {/* <Ejemplo2></Ejemplo2> */}
      {/* <MiComponenteConContexto></MiComponenteConContexto> */}
    </div>
  )
}

export default App
