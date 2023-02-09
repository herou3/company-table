import React from "react";

const Bookmark = ({ isBookmark, ...rest}) => {

  return (
    <button type="button" {...rest}>
      <i
        className={isBookmark ? "bi bi-star-fill" :"bi bi-star"}
      >
      </i>
    </button>
  )
}

export default Bookmark