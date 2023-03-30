import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import QualitiesList from "./qualitiesList"
import api from "../api"

const User = ({ id }) => {
  const [user, setUser] = useState()

  useEffect(() => {
    console.log("Send request")
    api.users
      .getById(id.toString())
      .then((data) => setUser(Object.assign(data)))
  }, [])

  if (user) {
    const targetUser = Object.assign(user)
    console.log(user)
    console.log(targetUser)
    console.log(user.profession.name)
    return (
      <>
        <h1>{targetUser.name}</h1>
        <h2>Профессия: {user.profession.name}</h2>
        <QualitiesList qualities={targetUser.qualities} />
        <p>completedMeetings: {targetUser.completedMeetings}</p>
        <h2>Rate: {targetUser.rate}</h2>
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
