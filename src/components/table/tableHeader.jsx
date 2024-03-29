import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
  const handleSort = (item) => {
    if (selectedSort.path === item) {
      onSort({
        ...selectedSort,
        order: selectedSort.order === "asc" ? "desc" : "asc"
      })
    } else {
      onSort({ path: item, order: "asc" })
    }
  }
  return (
    <thead>
      <tr>
        {Object.keys(columns).map((column) => {
          return (
            <th
              key={column}
              onClick={
                columns[column].path
                  ? () => handleSort(columns[column].path)
                  : undefined
              }
              {...{ role: columns[column].path && "button" }}
              scope="col"
            >
              {columns[column].path === selectedSort.path
                ? (
                  <i
                    className={
                      selectedSort.order === "asc"
                        ? "bi bi-caret-up-fill"
                        : "bi bi-caret-down-fill"
                    }
                  ></i>
                )
                : (
                  ""
                )}
              {columns[column].name}
            </th>
          )
        })}
      </tr>
    </thead>
  )
}

TableHeader.propTypes = {
  columns: PropTypes.object.isRequired,
  selectedSort: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired
}

export default TableHeader
