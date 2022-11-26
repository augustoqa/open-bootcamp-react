import React, { useState, useEffect } from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskForm from '../pure/forms/taskForm'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
  const defaultTask1 = new Task(
    'Example 1',
    'Description 1',
    true,
    LEVELS.NORMAL
  )
  const defaultTask2 = new Task(
    'Example 2',
    'Description 2',
    false,
    LEVELS.URGENT
  )
  const defaultTask3 = new Task(
    'Example 3',
    'Description 3',
    false,
    LEVELS.BLOCKING
  )

  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    console.log('Task State has been modified')
    setLoading(false)

    return () => {
      console.log('TaskList component is going to unmount')
    }
  }, [tasks])

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea')
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          <div className='card-header p-3'>
            <h5>Your Tasks</h5>
          </div>
          <div
            className='card-body'
            data-mdb-perfect-scrollbar='true'
            style={{ position: 'relative', height: '400px' }}
          >
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Descripcion</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                {tasks.map((task, index) => (
                  <TaskComponent task={task} key={index}></TaskComponent>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  )
}

export default TaskListComponent
