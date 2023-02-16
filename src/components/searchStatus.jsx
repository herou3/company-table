import React from "react"

const SearchStatus = (length) => {
  const renderPhrase = (number) => {
    const valueLessHundred = Math.abs(number) % 100
    const valueLessTen = valueLessHundred % 10
    if (valueLessHundred > 10 && valueLessHundred < 20) {
      return `${number} человек пойдет тусовать с тобой`
    }
    if (valueLessTen > 1 && valueLessTen < 5) {
      return `${number} человека пойдут тусовать с тобой`
    }
    if (number === 0) {
      return `Никто с тобой не тусанет`
    }
    return `${number} человек пойдет тусовать с тобой`
  }

  return (
    <h2>
      <span
        className={length.length > 0 ? "badge bg-primary" : "badge bg-danger"}
      >
        {renderPhrase(length.length)}
      </span>
    </h2>
  )
}

export default SearchStatus
