import React from "react"
import PropTypes from "prop-types"
import Bookmark from "./bookmark"
import QualitiesList from "./qualitiesList"
import Table from "./table/table"
import UserLink from "./userLink"

const UserTable = ({
  users,
  onSort,
  selectedSort,
  onDelete,
  onToggleBookMark
}) => {
  const columns = {
    name: {
      path: "name",
      name: "Имя",
      component: (user) => <UserLink _id={user._id} name={user.name}/>
    },
    qualities: {
      name: "Качество",
      component: (user) => <QualitiesList qualities={user.qualities} />
    },
    professions: { path: "profession.name", name: "Профессия" },
    completedMeetings: { path: "completedMeetings", name: "Встретились, раз" },
    rate: { path: "rate", name: "Оценка" },
    bookmark: {
      path: "bookmark",
      name: "Избранное",
      component: (user) => (
        <Bookmark
          isBookmark={user.bookmark}
          onClick={() => onToggleBookMark(user._id)}
        />
      )
    },
    delete: {
      component: (user) => (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDelete(user._id)}
        >
          delete
        </button>
      )
    }
  }

  return (
    <Table
      onSort={onSort}
      selectedSort={selectedSort}
      columns={columns}
      data={users}
    />
  )
}

UserTable.propTypes = {
  users: PropTypes.array.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired
}

export default UserTable
