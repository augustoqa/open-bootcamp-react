import { ErrorMessage, Formik, Form, Field } from 'formik'
import { LEVELS } from '../../../models/levels.enum'
import { Task } from '../../../models/task.class'
import * as Yup from 'yup'

const TaskFormik = ({ add, length }) => {
  const initialValues = {
    name: '',
    description: '',
    level: LEVELS.NORMAL,
  }

  const taskSchema = Yup.object().shape({
    name: Yup.string()
      .min(6, 'Name too short')
      .max(15, 'Name too long')
      .required('Name is required'),
    description: Yup.string()
      .min(7, 'Description too short')
      .max(15, 'Description too long')
      .required('Description is required'),
    level: Yup.string()
      .oneOf(
        [LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],
        'You must select a valid level'
      )
      .required('Level is required'),
  })

  async function addTask(values) {
    add(new Task(values.name, values.description, false, values.level))
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={taskSchema}
      onSubmit={addTask}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className='form-outline flex-fill'>
            <Field
              type='text'
              name='name'
              className='form-control form-control-lg'
              placeholder='Task Name'
            />
            <ErrorMessage name='name' />
            <Field
              type='text'
              name='description'
              className='form-control form-control-lg'
              placeholder='Task description'
            />
            <ErrorMessage name='description' />
            <select name='level'>
              <option value={LEVELS.NORMAL}>Normal</option>
              <option value={LEVELS.URGENT}>Urgent</option>
              <option value={LEVELS.BLOCKING}>Blocking</option>
            </select>
            <ErrorMessage name='level' />
            <button className='btn btn-success block-btn btn-lg ms-2'>
              {length > 0 ? 'Add New Task' : 'Create Your First Task'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default TaskFormik
