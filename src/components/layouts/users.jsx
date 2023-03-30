import React from "react"
import PropTypes from "prop-types"
import { useParams, useLocation } from "react-router-dom"
import UsersList from "./../users"
import User from "./../user"

const Users = () => {
  const params = useParams()
  const location = useLocation()
  const { userId } = params


  return (
    <>
      {userId ? <User id = { userId } history = {history} /> : <Users />}
    </>
  )
}

export default Users