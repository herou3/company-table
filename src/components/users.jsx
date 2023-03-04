import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import UserTable from "./usersTable"
import _ from "lodash"

const Users = () => {
  const pageSize = 12
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })

  const [users, setUsers] = useState()

  useEffect(() => {
    console.log("Send request")
    api.users.fetchAll()
    api.users.fetchAll().then((data) => setUsers(Object.assign(data)))
  }, [])

  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId))
  }

  const handleToggleBookMark = (userId) => {
    setUsers(
      users.map((user) => {
        return user._id === userId
          ? {
            ...user,
            bookmark: !user.bookmark
          }
          : user
      })
    )
  }

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

  if (users) {
    const filtredUsers =
      selectedProf && selectedProf._id
        ? users.filter((user) => {
          return user.profession._id === selectedProf._id
        })
        : users
    const count = filtredUsers.length
    const sortedUsers = _.orderBy(filtredUsers, [sortBy.path], [sortBy.order])
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
              selectedSort={sortBy}
              onDelete={handleDelete}
              onToggleBookMark={handleToggleBookMark}
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
  return "loading..."
}

export default Users
