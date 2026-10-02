import { useState } from 'react'
import { Link } from 'react-router-dom'
import StudentCard from '../components/StudentCard.jsx'

function Students({ students, onDeleteStudent }) {
  const [searchText, setSearchText] = useState('')
  const matchingStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase()),
  )

  return (
    <>
      <div className="page-heading">
        <h2>Students</h2>
        <p>Search and manage your student records.</p>
      </div>
      <div className="students-toolbar">
        <input
          className="search-input"
          type="search"
          placeholder="Search by student name"
          aria-label="Search by student name"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <span className="student-count">
          {matchingStudents.length} of {students.length} students
        </span>
      </div>
      {matchingStudents.length > 0 ? (
        <div className="student-grid">
          {matchingStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onDeleteStudent={onDeleteStudent}
            />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          No students match that name. <Link className="text-link" to="/add-student">Add a student</Link>
        </div>
      )}
    </>
  )
}

export default Students