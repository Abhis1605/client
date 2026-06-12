import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import API from "../utils/api"
import toast from "react-hot-toast"

function Login() {
  const navigate = useNavigate()

  const handleLogin = async (formData) => {
    try {
      const res = await API.post("/auth/login", formData)

      const token = res.data.token
      localStorage.setItem("token", token)

      const payload = JSON.parse(atob(token.split(".")[1]))

      if (payload.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/dashboard")
      }
    } catch (err) {
      toast.error('Login failed')
    }
  }

  return (
    <AuthForm
      title="Login"
      buttonText="Login"
      onSubmit={handleLogin}
    />
  )
}

export default Login