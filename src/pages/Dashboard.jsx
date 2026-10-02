import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard.jsx'

function Dashboard({ students }) {
  const recentStudents = students.slice(0, 3)

  return (
    <>
      <section className="welcome-panel">
        <div>
          <h2>Welcome to your dashboard</h2>
          <p>Keep track of your students and their course details in one place.</p>
        </div>
        <div className="welcome-count">
          <strong>{students.length}</strong>
          <span>students</span>
        </div>
      </section>
      <div className="section-heading">
        <h3>Student summaries</h3>
        <Link className="text-link" to="/students">View all students</Link>
      </div>
      {recentStudents.length > 0 ? (
        <div className="student-grid">
          {recentStudents.map((student) => (
            <StudentCard key={student.id} student={student} showDeleteButton={false} />
          ))}
        </div>
      ) : (
        <p className="empty-message">No students yet. Add a student to get started.</p>
      )}
    </>
  )
}

export default Dashboard