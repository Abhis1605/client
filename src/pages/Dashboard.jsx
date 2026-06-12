import { useEffect, useState } from "react"
import API from "../utils/api"
import TaskGrid from "../components/TaskGrid"
import TaskModal from "../components/TaskModal"
import toast from "react-hot-toast"

function Dashboard() {
  const [tasks, setTasks] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  // fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks")
      setTasks(res.data.userTasks)
    } catch {
      toast.error("Failed to fetch tasks")
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // delete
  const handleDelete = async (id) => {
    try {
      await toast.promise(
        API.delete(`/tasks/${id}`),
        {
          loading: "Deleting...",
          success: "Deleted",
          error: "Delete failed"
        }
      )
      fetchTasks()
    } catch {}
  }

  // open edit modal
  const handleEdit = (task) => {
    setSelectedTask(task)
    setIsOpen(true)
  }

  // add + update combined
  const handleSubmitTask = async (data) => {
    try {
      if (selectedTask) {
        // UPDATE
        await toast.promise(
          API.patch(`/tasks/${selectedTask.id}`, data),
          {
            loading: "Updating...",
            success: "Task updated",
            error: "Update failed"
          }
        )
      } else {
        // CREATE
        await toast.promise(
          API.post("/tasks", data),
          {
            loading: "Adding...",
            success: "Task added",
            error: "Add failed"
          }
        )
      }

      setIsOpen(false)
      setSelectedTask(null)
      fetchTasks()

    } catch {}
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        
        <h1 className="text-2xl font-bold">My Tasks</h1>

        <button
          onClick={() => {
            setSelectedTask(null) 
            setIsOpen(true)
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Task
        </button>

      </div>

      {/* Tasks */}
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">
          No tasks yet, create one!
        </p>
      ) : (
        <TaskGrid
          tasks={tasks}
          onDelete={handleDelete}
          onEdit={handleEdit}  
        />
      )}

      {/* Modal */}
      {isOpen && (
        <TaskModal
          onClose={() => {
            setIsOpen(false)
            setSelectedTask(null)
          }}
          onSubmit={handleSubmitTask}  
          initialData={selectedTask}    
        />
      )}

    </div>
  )
}

export default Dashboard