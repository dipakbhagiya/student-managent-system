import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// React DOM connects the app to the root element in index.html.
createRoot(document.getElementById('root')).render(<App />)
