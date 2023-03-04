import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
  const renderContent = (item, column) => {
    if (columns[column].component) {
      const component = columns[column].component
      if (typeof component === "function") {
        return component(item)
      }
      return component
    }
    return _.get(item, columns[column].path)
  }

  return (
    <tbody>
      {data.map((item) => {
        return (
          <tr key={item._id}>
            {Object.keys(columns).map((column) => {
              return <td key={column}>{renderContent(item, column)}</td>
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

TableBody.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.object.isRequired
}

export default TableBody

/*

      <tbody>
        {users.map((user) => {
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
*/
