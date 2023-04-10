import React, { useState } from "react"
import PropTypes from "prop-types"

const TextField = ({ labelText, type, name, value, onChange, error }) => {
  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (
    <div className="mb-4">
      <label htmlFor="email">{labelText}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={getInputClasses()}
        />
        { type === "password" && (
          <button className="btn btn-outline-secondary" onClick={toggleShowPassword}>
            <i className={"bi bi-eye" + (showPassword ? "-slash" : "")}></i>
          </button>
        )
        }
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
