import React from "react"
import Bookmark from "./bookmark"
import Qualities from "./qualitie"

const User = ({ user, onToggleBookMark, onDelete }) => {

  return (
    <tr key={user._id}>
      <td>
        <span>{user.name}</span>
      </td>
      <td>
        {user.qualities.map((quality) => {
          return <Qualities key={quality.name} {...quality}></Qualities>
        })}
      </td>
      <td>
        <span key={user.profession._id}>
          {user.profession.name}
        </span>
      </td>
      <td>
        <span>{user.completedMeetings}</span>
      </td>
      <td>
        <span>{user.rate}</span>
      </td>
      <td>
        <Bookmark
          isBookmark={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  )
}

// User.propTypes = {
//   _id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired
// }

export default User
