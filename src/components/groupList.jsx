import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
  items,
  valueProperty,
  contentProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {(typeof !Array.isArray(items)
        ? Object.keys(items)
        : items)
        .map((item) => {
          return (
            <li
              key={
                items[item][valueProperty] !== undefined
                  ? items[item][valueProperty]
                  : "defaultId"
              }
              className={
                "list-group-item" +
                (items[item] === selectedItem ? " active" : "")
              }
              onClick={() => onItemSelect(items[item])}
              role="button"
            >
              {items[item][contentProperty]}
            </li>
          )
        })}
    </ul>
  )
}

GroupList.defaultProps = {
  valueProperty: "_id",
  contentProperty: "name"
}

GroupList.propTypes = {
  items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  onItemSelect: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
}

export default GroupList
