function TaskCard({ task, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow p-4 rounded flex flex-col justify-between">
      <div>
        <h2 className="font-bold text-lg">{task.title}</h2>
        <p className="text-gray-600 text-sm mb-2">
          {task.description || "No description"}
        </p>

        <span
          className={`text-xs px-2 py-1 rounded ${
            task.status === "done" ? "bg-green-200" : "bg-gray-200"
          }`}
        >
          {task.status}
        </span>
        
      </div>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => onEdit(task)}
          className="bg-yellow-400 px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
