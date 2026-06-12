import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({ onLogout }) {
  return (
    <div>
      <Navbar onLogout={onLogout} />
      {/* Outlet -- renders the child routes */}
      <Outlet /> 
    </div>
  )
}
