import React from "react"
import PropTypes from "prop-types"

const Bookmark = ({ isBookmark, ...rest }) => {
  return (
    <button type="button" {...rest}>
      <i className={isBookmark ? "bi bi-star-fill" : "bi bi-star"}></i>
    </button>
  )
}

Bookmark.propTypes = {
  isBookmark: PropTypes.bool.isRequired
}

export default Bookmark
