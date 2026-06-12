import { useState, useEffect } from "react"

function TaskModal({ onClose, onSubmit, initialData }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  
  useEffect(() => {
  if (initialData) {
    setTitle(initialData.title)
    setDescription(initialData.description || "")
  } else {
    setTitle("")
    setDescription("")
  }
}, [initialData])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title.trim()) return

    onSubmit({
      title,
      description
    })
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">

      <div className="bg-white p-6 rounded w-full max-w-md">

        <h2 className="text-xl font-bold mb-4">
          {initialData ? "Edit Task" : "Add Task"}
        </h2>

        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 mb-3"
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border p-2 mb-3"
          />

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-1 border rounded"
            >
              Cancel
            </button>

            <button className="bg-blue-600 text-white px-4 py-1 rounded">
              {initialData ? "Update" : "Add"}
            </button>
          </div>

        </form>
      </div>

    </div>
  )
}

export default TaskModal