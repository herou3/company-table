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
      {(!Array.isArray(items) ? Object.keys(items) : items).map((item) => {
        return (
          <li
            key={
              items[item] !== undefined ? items[item][valueProperty] : item._id
            }
            className={
              "list-group-item" +
              ((JSON.stringify(items[item]) === JSON.stringify(selectedItem) &&
                items[item] !== undefined) ||
              item === selectedItem
                ? " active"
                : "")
            }
            onClick={
              items[item] !== undefined
                ? () => onItemSelect(items[item])
                : () => onItemSelect(item)
            }
            role="button"
          >
            {items[item] !== undefined
              ? items[item][contentProperty]
              : item[contentProperty]}
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
