import React from "react"
import PropTypes from "prop-types"
import Bookmark from "./bookmark"
import Qualities from "./qualitie"

const User = ({ user, onToggleBookMark, onDelete }) => {
  return (
    <tr key={user._id}>
      <td>
        <span>{user.name}</span>
      </td>
      <td>
      </td>
      <td>
        <span key={user.profession._id}>{user.profession.name}</span>
      </td>
      <td>
        <span>{user.completedMeetings}</span>
      </td>
      <td>
        <span>{user.rate}</span>
      </td>
      <td>
      </td>
      <td></td>
    </tr>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default User
