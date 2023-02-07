import React, { useState } from "react";
import User from "./user";

const Users = ({users, onDelete, onToggleBookMark}) => {
  
  const handleToggleBookMark = (id) => {
    onToggleBookMark(id)
  }

  const handleDelete = (id) => {
    onDelete(id)
  }
  return (
    <>
      {users.length > 0 ?
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
          {users.map((user) => {
            return (
              <User
                key={String(user._id)} 
                user = {user}
                onDelete = {handleDelete}
                onToggleBookMark = {handleToggleBookMark}
              />
            )
        })}
      </tbody>
    </table>
    : ""}
  </>
  )
}

export default Users