import { Link } from 'react-router-dom'

function StudentDetails({ students }) {
  // The route matches /students/:id, so the final URL part is the student ID.
  const studentId = Number(window.location.pathname.split('/').pop())
  const student = students.find((currentStudent) => currentStudent.id === studentId)

  if (!student) {
    return (
      <>
        <div className="page-heading">
          <h2>Student not found</h2>
          <p>There is no student with that ID.</p>
        </div>
        <Link className="button-secondary" to="/students">Back to students</Link>
      </>
    )
  }

  const initials = student.name.split(' ').map((namePart) => namePart[0]).slice(0, 2).join('')

  return (
    <>
      <div className="page-heading">
        <h2>Student Details</h2>
        <p>Full information for this student.</p>
      </div>
      <section className="detail-panel">
        <div className="detail-title">
          <div className="student-avatar" aria-hidden="true">{initials}</div>
          <h3>{student.name}</h3>
        </div>
        <dl className="detail-list">
          <dt>Email</dt><dd>{student.email}</dd>
          <dt>Course</dt><dd>{student.course}</dd>
          <dt>Age</dt><dd>{student.age}</dd>
        </dl>
        <Link className="button-secondary" to="/students">Back to students</Link>
      </section>
    </>
  )
}

export default StudentDetails