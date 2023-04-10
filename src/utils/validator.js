export function validator(data, config) {
  const errors = {}
  function validate(validateMethod, data, config) {
    let statusValidate
    switch (validateMethod) {
    case "isRequired":
      statusValidate = data.trim() === ""
      break
    case "isEmail":
      const emailRexExp = /^\S+@\S+\.\S+$/g
      statusValidate = !emailRexExp.test(data)
      break
    case "isCapitalSymbol":
      const passwordRexExp = /[A-Z]+/g
      statusValidate = !passwordRexExp.test(data)
      break
    case "isContaintDigit":
      const passwordDigitRexExp = /\d+/g
      statusValidate = !passwordDigitRexExp.test(data)
      break
    case "mint":
      statusValidate = data.length < config.value
      break
    default:
      break
    }
    if (statusValidate) {
      return config.message
    }
  }
  for (const fieldName in data) {
    for (const validateMethod in config[fieldName]) {
      const error = validate(validateMethod, data[fieldName], config[fieldName][validateMethod])
      if (error && !errors[fieldName]) {
        errors[fieldName] = error
      }
    }
  }
  return errors
}
