import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* Outlet -- renders the child routes */}
      <Outlet /> 
    </div>
  )
}
