import { useState } from "react"
import { Link } from "react-router-dom"

function AuthForm({ title, buttonText, onSubmit, isLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow w-full max-w-md"
      >
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 mb-3"
        />

        <button className="w-full bg-blue-500 text-white p-2 rounded mb-3">
          {buttonText}
        </button>

        <p className="text-sm text-center">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <Link to="/register" className="text-blue-600 font-medium">
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-medium">
                Login
              </Link>
            </>
          )}
        </p>

      </form>
    </div>
  )
}

export default AuthForm