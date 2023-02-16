import React, { useState } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import User from "./user"

const Users = ({ users, onDelete, onToggleBookMark }) => {
  const count = users.length
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)

  const handleToggleBookMark = (id) => {
    onToggleBookMark(id)
  }

  const handleDelete = (id) => {
    onDelete(id)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const userCrop = paginate(users, currentPage, pageSize)

  return (
    <>
      {count > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {userCrop.map((user) => {
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
      )}
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  )
}

export default Users