import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import './../../styles/task.scss'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log('Created Task')

    return () => {
      console.log(`Task: ${task.name} is going to unmount`)
    }
  }, [task])

  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-primary'>{task.level}</span>
          </h6>
        )

      case LEVELS.URGENT:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-warning'>{task.level}</span>
          </h6>
        )

      case LEVELS.BLOCKING:
        return (
          <h6 className='mb-0'>
            <span className='badge bg-danger'>{task.level}</span>
          </h6>
        )
    }
  }

  function taskCompleted() {
    return task.completed ? (
      <i
        onClick={() => complete(task)}
        className='bi-toggle-on'
        style={{ color: 'green' }}
      ></i>
    ) : (
      <i
        onClick={() => complete(task)}
        className='bi-toggle-off'
        style={{ color: 'grey' }}
      ></i>
    )
  }

  return (
    <tr className='fw-normal'>
      <td className='ms-2'>
        <span>{task.name}</span>
      </td>
      <td className='align-middle'>
        <span>{task.description}</span>
      </td>
      <td className='align-middle'>{taskLevelBadge()}</td>
      <td className='align-middle'>
        {taskCompleted()}
        <i
          onClick={() => remove(task)}
          className='bi-trash'
          style={{ color: 'tomato' }}
        ></i>
      </td>
    </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
}

export default TaskComponent
