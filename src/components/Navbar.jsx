import { useNavigate } from "react-router-dom"

export default function Navbar({ onLogout }) {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    let role = ''

    if (token){
        try {
            const payload = JSON.parse(atob(token.split(".")[1]))
      role = payload.role
        } catch (error) {
            role = ""
        }
    }

    // Basic Logout by removing token and navigate to login
     const handleLogout = () => {
    localStorage.removeItem("token")
    window.dispatchEvent(new Event("auth-changed"))
    onLogout?.()
    navigate("/login", { replace: true })
  }
  return (
    <div className="bg-blue-600 text-white">

  {/* Container */}
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <div className="text-lg font-bold">
      Task Manager
    </div>

    <div className="flex items-center gap-4">
      
      {role && (
        <span className="text-sm bg-blue-500 px-2 py-1 rounded">
          {role}
        </span>
      )}

      <button
        onClick={handleLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>

  </div>
</div>
  )
}
