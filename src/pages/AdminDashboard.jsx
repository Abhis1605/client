import { useEffect, useState } from "react"
import API from "../utils/api"
import AdminToggle from "../components/AdminToggle"
import UserList from "../components/UserList"
import TaskListAdmin from "../components/TaskListAdmin"
import toast from "react-hot-toast"

function AdminDashboard() {
  const [view, setView] = useState("users") // default
  const [users, setUsers] = useState([])
  const [tasks, setTasks] = useState([])

  const fetchUsers = async () => {
    try {
      const res = await API.get("/admin/users")
      setUsers(res.data.users)
    } catch {
      toast.error("Failed to fetch users")
    }
  }

  const fetchTasks = async () => {
    try {
      const res = await API.get("/admin/tasks")
      setTasks(res.data.tasks)
    } catch {
      toast.error("Failed to fetch tasks")
    }
  }

  useEffect(() => {
    if (view === "users") fetchUsers()
    else fetchTasks()
  }, [view])

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">

      <AdminToggle view={view} setView={setView} />

      {view === "users" ? (
        <UserList users={users} />
      ) : (
        <TaskListAdmin tasks={tasks} />
      )}

    </div>
  )
}

export default AdminDashboard