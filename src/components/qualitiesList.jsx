import React from "react"
import PropTypes from "prop-types"
import Qualities from "./qualitie"

const QualitiesList = ({ qualities }) => {
  return (
    <>
      {qualities.map((quality) => {
        return <Qualities key={quality.name} {...quality}></Qualities>
      })}
    </>
  )
}

QualitiesList.propTypes = {
  qualities: PropTypes.array.isRequired
}

export default QualitiesList
