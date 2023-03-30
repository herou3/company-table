import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const UserLink = ({ _id, name }) => {
  return (
    <Link to={`/users/${_id}`}>{name}</Link>
  )
}
UserLink.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default UserLink
