import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import QualitiesList from "./qualitiesList"
import api from "../api"

const User = ({ id }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    api.users
      .getById(id.toString())
      .then((data) => setUser(Object.assign(data)))
  }, [])

  if (user) {
    console.log(user)
    return (
      <>
        <h1>{user.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={user.qualities} />
        <p>completedMeetings: {user.completedMeetings}</p>
        <h2>Rate: {user.rate}</h2>
        <Link to={`/users`}>Вся компашка</Link>
      </>
    )
  }
  return "loading..."
}

User.propTypes = {
  id: PropTypes.string.isRequired
}

export default User
