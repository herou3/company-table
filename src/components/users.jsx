import React, { useState, useEffect } from "react"
import { paginate } from "../utils/paginate"
import Pagination from "./pagination"
import User from "./user"
import PropTypes from "prop-types"
import api from "../api"
import GroupList from "./groupList"
import SearchStatus from "./searchStatus"

const Users = ({ users: allUsers, onDelete, onToggleBookMark }) => {
  const pageSize = 4
  const [currentPage, setCurrentPage] = useState(1)
  const [professions, setProfessions] = useState()
  const [selectedProf, setSelectedProf] = useState()
  useEffect(() => {
    console.log("Send request")
    api.professions
      .fetchAll()
      .then((data) =>
        setProfessions(
          Object.assign(data, { allProfession: { name: "Все профессии" } })
        )
      )
  }, [])
  useEffect(() => {
    setCurrentPage(1)
  }, [selectedProf])

  const handleProfessionSelect = (item) => {
    setSelectedProf(item)
  }

  const handleToggleBookMark = (id) => {
    onToggleBookMark(id)
  }

  const handleDelete = (id) => {
    onDelete(id)
  }

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
    console.log("handlePageChange", pageIndex)
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
  const userCrop = paginate(filtredUsers, currentPage, pageSize)

  return (
    <div className="d-flex justify-content-center">
      {professions && (
        <div className="d-flex.flex-column.flex-shrink-0.p-3">
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
      {count > 0 && (
        <div className="d-dlex flex-column">
          <SearchStatus length={filtredUsers.length} />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {userCrop.map((user) => {
                return (
                  <User
                    key={String(user._id)}
                    user={user}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                  />
                )
              })}
            </tbody>
          </table>
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
