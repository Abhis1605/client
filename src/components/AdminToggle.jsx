function AdminToggle({ view, setView }) {
  return (
    <div className="flex gap-4 mb-6">

      <button
        onClick={() => setView("users")}
        className={`px-4 py-2 rounded ${
          view === "users"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        Users
      </button>

      <button
        onClick={() => setView("tasks")}
        className={`px-4 py-2 rounded ${
          view === "tasks"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        Tasks
      </button>

    </div>
  )
}

export default AdminToggle