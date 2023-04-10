import React, { useEffect, useState } from "react"
import TextField from "../textField"
import { validator } from "../../utils/validator"

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const isValid = Object.keys(errors).length === 0
  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const validatorConfig = {
    email: {
      isRequired: {
        message: "Электронная почта обязательна для заполнения"
      },
      isEmail: {
        message: "Email введен некорректно"
      }
    },
    password: {
      isRequired: {
        message: "Пароль обязателен для заполнения"
      },
      isCapitalSymbol: {
        message: "Пароль должен содержать заглавную буквку"
      },
      isContaintDigit: {
        message: "Пароль должен содержать хотя бы одну цифру"
      },
      mint: {
        message: "Пароль должен состоять минимум из 8 символов",
        value: 8
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const handleSubmit = (event) => {
    event.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(event)
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          <h3 className="mb-4">Login</h3>
          <form onSubmit={handleSubmit}>
            <TextField labelText="Email" name="email" value={data.email} onChange={handleChange} error={errors.email}/>
            <TextField labelText="Password" name="password" type="password" value={data.password} onChange={handleChange} error={errors.password} />
            <button disabled={!isValid} className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
