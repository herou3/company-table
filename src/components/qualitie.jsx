import React from "react"
import PropTypes from "prop-types"

const Qualities = ({ _id, color, name }) => {
  return (
    <span key={_id} className={String("m-1 badge rounded-pill bg-" + color)}>
      {name}
    </span>
  )
}
Qualities.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
}

export default Qualities
