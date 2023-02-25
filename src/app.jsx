import React, { useState } from "react"
import api from "../src/api"
import Users from "./components/users"

const App = () => {
  const initialState = api.users.fetchAll()
  const [users, setUsers] = useState(initialState)

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.map((user) => {
        return user._id === userId
          ? {
            ...user,
            bookmark: !user.bookmark
          }
          : user
      })
    )
  }

  return (
    <div>
      {users && (
        <Users
          users={users}
          onDelete={handleDelete}
          onToggleBookMark={handleToggleBookMark}
        />
      )}
    </div>
  )
}

export default App
