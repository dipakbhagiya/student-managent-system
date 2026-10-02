import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddStudent({ onAddStudent }) {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    course: '',
    age: '',
  })
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  function handleInputChange(event) {
    const inputName = event.target.name
    const inputValue = event.target.value
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (
      !formValues.name.trim() ||
      !formValues.email.trim() ||
      !formValues.course.trim() ||
      !formValues.age
    ) {
      setIsSuccess(false)
      setMessage('Please fill in every field before adding a student.')
      return
    }

    onAddStudent({ ...formValues, age: Number(formValues.age) })
    setFormValues({ name: '', email: '', course: '', age: '' })
    setIsSuccess(true)
    setMessage('Student added. View the updated list on the Students page.')
  }

  return (
    <>
      <div className="page-heading">
        <h2>Add Student</h2>
        <p>Enter the student's details below.</p>
      </div>
      <form className="form-panel" onSubmit={handleSubmit}>
        <div className="form-fields">
          <label className="form-field">
            Name
            <input
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-field">
            Email
            <input
              name="email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-field">
            Course
            <input
              name="course"
              value={formValues.course}
              onChange={handleInputChange}
            />
          </label>
          <label className="form-field">
            Age
            <input
              name="age"
              type="number"
              min="1"
              value={formValues.age}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-actions">
          <button className="button-primary" type="submit">
            Add student
          </button>
          <Link className="text-link" to="/students">
            Cancel
          </Link>
        </div>
        {message && (
          <p className={`form-message${isSuccess ? ' success' : ''}`} role="status">
            {message}
          </p>
        )}
      </form>
    </>
  )
}

export default AddStudent
