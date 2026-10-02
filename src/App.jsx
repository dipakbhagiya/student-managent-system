import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Students from './pages/Students.jsx'
import AddStudent from './pages/AddStudent.jsx'
import StudentDetails from './pages/StudentDetails.jsx'
import './App.css'

const startingStudents = [
  { id: 1, name: 'Aarav Mehta', email: 'aarav.mehta@example.com', course: 'Computer Science', age: 20 },
  { id: 2, name: 'Diya Shah', email: 'diya.shah@example.com', course: 'Business Studies', age: 19 },
  { id: 3, name: 'Kabir Patel', email: 'kabir.patel@example.com', course: 'Graphic Design', age: 21 },
  { id: 4, name: 'Anaya Joshi', email: 'anaya.joshi@example.com', course: 'Computer Science', age: 20 },
  { id: 5, name: 'Rohan Singh', email: 'rohan.singh@example.com', course: 'Data Analytics', age: 22 },
]

function App() {
  // App owns this shared list so every page sees the same students.
  const [students, setStudents] = useState(startingStudents)

  // Set the browser tab title once when the app first loads.
  useEffect(() => {
    document.title = 'Student Management'
  }, [])

  function addStudent(studentDetails) {
    const newStudent = { ...studentDetails, id: Date.now() }
    setStudents([...students, newStudent])
  }

  function deleteStudent(studentId) {
    const updatedStudents = students.filter((student) => student.id !== studentId)
    setStudents(updatedStudents)
  }

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Sidebar />
        <div className="main-column">
          <Navbar />
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Dashboard students={students} />} />
              <Route
                path="/students"
                element={<Students students={students} onDeleteStudent={deleteStudent} />}
              />
              <Route path="/add-student" element={<AddStudent onAddStudent={addStudent} />} />
              <Route path="/students/:id" element={<StudentDetails students={students} />} />
              <Route path="*" element={<p className="empty-message">Page not found.</p>} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
