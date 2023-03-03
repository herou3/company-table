import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import PropTypes from "prop-types"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import UserTable from "./usersTable"
import _ from "lodash"

const Users = ({ users: allUsers, onDelete, onToggleBookMark }) => {
  const pageSize = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })

  useEffect(() => {
    api.professions.fetchAll().then((data) => {
      setProfessions(data)
    })
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleSort = (item) => {
    setSortBy(item)
  }

  const clearFilters = () => {
    setSelectedProf()
  }
  const filtredUsers =
    selectedProf && selectedProf._id
      ? allUsers.filter((user) => {
        return user.profession._id === selectedProf._id
      })
      : allUsers
  const count = filtredUsers.length
  const sortedUsers = _.orderBy(filtredUsers, [sortBy.iter], [sortBy.order])
  const usersCrop = paginate(sortedUsers, currentPage, pageSize)
  return (
    <div className="d-flex justify-content-center">
      {professions && (
        <div className="d-flex flex-column flex-shrink-0 p-3">
          <GroupList
            selectedItem={selectedProf}
            items={professions}
            onItemSelect={handleProfessionSelect}
          />
          <button className="btn btn-secondary mt-2" onClick={clearFilters}>
            Очистить
          </button>
        </div>
      )}
      {count >= 0 && (
        <div className="d-dlex flex-column">
          <SearchStatus length={filtredUsers.length} />
          <UserTable
            users={usersCrop}
            onSort={handleSort}
            currentSort={sortBy}
            onDelete={onDelete}
            onToggleBookMark={onToggleBookMark}
          />
          <div className="d-flex justify-content-center">
            <Pagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </div>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleBookMark: PropTypes.func.isRequired
}

export default Users
