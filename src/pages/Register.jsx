import { useNavigate } from "react-router-dom"
import AuthForm from "../components/AuthForm"
import API from "../utils/api"
import toast from "react-hot-toast"

export default function Register() {
  const navigate = useNavigate()

  const handleRegister = async (formData) => {
    try {
      await API.post("/auth/register", formData)

      toast.success('Registered Successfully')
      navigate("/login")
    } catch (err) {
      toast.error('Registration failed')
    }
  }

  return (
    <AuthForm
      title="Register"
      buttonText="Register"
      onSubmit={handleRegister}
      isLogin={false}
    />
  )
}
