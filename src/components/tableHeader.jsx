import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, serectedSort, columns }) => {

  const handleSort = (item) => {
    if (serectedSort.iter === item) {
      onSort({
        ...serectedSort,
        order: serectedSort.order === "asc" ? "desc" : "asc"
      })
    } else {
      onSort({ iter: item, order: "asc" })
    }
  }
  return (
    <thead>
      <tr>
        { Object.keys(columns).map((column) => {
          return (
            <th 
              key={column}
              onClick={() => handleSort(columns[column].iter)}
              scope="col"
            >
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
  serectedSort: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired
}

export default TableHeader
