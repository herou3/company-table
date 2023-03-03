import React from "react"
import PropTypes from "prop-types"
import User from "./user"
import TableHeader from "./tableHeader"

const UserTable = ({
  users,
  onSort,
  currentSort,
  onDelete,
  onToggleBookMark
}) => {
  console.log(typeof users)
  const handleToggleBookMark = (id) => {
    onToggleBookMark(id)
  }
  const handleDelete = (id) => {
    onDelete(id)
  }

  return (
    <table className="table">
      <tbody>
        {users.map((user) => {
          return (
            <User
              key={String(user._id)}
              user={user}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
            />
          )
        })}
      </tbody>
    </table>
  )
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  currentSort: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
}

export default UserTable
