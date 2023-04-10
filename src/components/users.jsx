import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"
import UserTable from "./usersTable"
import _ from "lodash"

const Users = () => {
  const pageSize = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
  const [users, setUsers] = useState()
  const [searchingText, setSearchingText] = useState("")

  useEffect(() => {
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
  const handleSearchUser = (event) => {
    if (searchingText.length === 0) {
      clearFilters()
    }
    setSearchingText(event.target.value)
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
    if (!selectedProf) {
      clearFilters()
    }
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
    setSearchingText("")
  }

  if (users) {
    const filtredUsers =
      (selectedProf && !searchingText) && selectedProf._id
        ? users.filter((user) => {
          return user.profession._id === selectedProf._id
        })
        : (
          searchingText
            ? users.filter((user) => {
              return String(user.name).toLowerCase().includes(searchingText.toLowerCase())
            })
            : users
        )
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
            <div className="input-group mb-3">
              <input type="text" value={searchingText} className="form-control" placeholder="🔍 Search..." aria-label="search" aria-describedby="basic-addon1" onChange={handleSearchUser}/>
            </div>
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
