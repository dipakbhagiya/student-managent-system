import { Link } from 'react-router-dom'

function StudentCard({ student, onDeleteStudent, showDeleteButton = true }) {
  const initials = student.name
    .split(' ')
    .map((namePart) => namePart[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="student-card">
      <div className="student-card-top">
        <div className="student-avatar" aria-hidden="true">{initials}</div>
        <div>
          <h3>{student.name}</h3>
          <p className="student-course">{student.course}</p>
        </div>
      </div>
      <p className="student-email">{student.email}</p>
      <div className="student-card-actions">
        <Link className="button-link" to={`/students/${student.id}`}>
          View details
        </Link>
        {showDeleteButton && (
          <button
            className="button-danger"
            type="button"
            onClick={() => onDeleteStudent(student.id)}
          >
            Delete
          </button>
        )}
      </div>
    </article>
  )
}

export default StudentCard