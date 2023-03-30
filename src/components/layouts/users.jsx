import React from "react"
import { useParams } from "react-router-dom"
import User from "./../user"
import UserList from "./../users"

const Users = () => {
  const params = useParams()
  const { userId } = params

  return <>{userId ? <User id={userId} history={history} /> : <UserList />}</>
}

export default Users
