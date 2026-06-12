function UserList({ users }) {
  if (users.length === 0) {
    return <p>No users found</p>
  }

  return (
    <div className="space-y-3">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-white shadow p-4 rounded flex justify-between"
        >
          <div>
            <p className="font-bold">{user.username}</p>
            <p className="text-sm text-gray-500">{user.role}</p>
          </div>

          <span className="text-xs text-gray-400">
            {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>
      ))}
    </div>
  )
}

export default UserList