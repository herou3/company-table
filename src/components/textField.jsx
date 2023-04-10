import React from "react"
import PropTypes from "prop-types"

const TextField = ({ labelText, type, name, value, onChange, error, onExtraAction, status, buttonTexts }) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  return (
    <div className="mb-4">
      <label htmlFor="email">{labelText}</label>
      <div className="row g-2">
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        { onExtraAction
          ? status
            ? <button className="btn btn-outline-primary mt-2" onClick={onExtraAction}>
              {buttonTexts[0]} 
            </button>
            : <button className="btn btn-outline-primary mt-2" onClick={onExtraAction}>
              {buttonTexts[1]}
            </button>
          : ""}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  )
}
TextField.defaultProps = {
  type: "text"
}
TextField.propTypes = {
  labelText: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onExtraAction: PropTypes.func,
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  buttonTexts: PropTypes.array
}

export default TextField
