import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">SM</span>
        <span>Student Desk</span>
      </div>
      <p className="nav-label">Workspace</p>
      <nav className="nav-links" aria-label="Main navigation">
        <NavLink className="nav-link" to="/" end>
          <span className="nav-symbol" aria-hidden="true">⌂</span>
          <span>Dashboard</span>
        </NavLink>
        <NavLink className="nav-link" to="/students">
          <span className="nav-symbol" aria-hidden="true">◎</span>
          <span>Students</span>
        </NavLink>
        <NavLink className="nav-link" to="/add-student">
          <span className="nav-symbol" aria-hidden="true">+</span>
          <span>Add Student</span>
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar