import React, { useEffect, useState } from "react"
import api from "../src/api"
import Users from "./components/users"

const App = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    console.log("Send request")
    api.users.fetchAll()
    api.users
      .fetchAll()
      .then((data) =>
        setUsers(
          Object.assign(data)
        )
      )
  }, [])

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
