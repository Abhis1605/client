function TaskListAdmin({ tasks }) {
  if (tasks.length === 0) {
    return <p>No tasks found</p>
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="bg-white shadow p-4 rounded"
        >
          <p className="font-bold">{task.title}</p>

          <p className="text-sm text-gray-600">
            {task.description || "No description"}
          </p>

          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Status: {task.status}</span>

            <span>User: {task.username || task.userId}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskListAdmin