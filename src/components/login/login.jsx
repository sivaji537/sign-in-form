import React, { useState } from "react";
import { login } from './login.io'
import { requiredValidation } from './login.validations'
import { initialFormValues, labelMap } from './login.content'
import './login.scss'

export function Login() {
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const field = formValues[name]
    setFormValues({
      ...formValues,
      [name]: { ...field, value },
    })
  }

  const formValidation = async () => {
    let formValid = true
    const validationFields = {}
    for (const fieldName of Object.keys(formValues)) {
      const field = formValues[fieldName]
      //required validation
      if (field.required) {
        const isEmpty = requiredValidation(field.value)
        validationFields[fieldName] = {
          ...field,
          error: isEmpty,
          helperText: isEmpty ? 'Required' : '',
        }
        formValid = formValid && !isEmpty
      }
    }
    setFormValues({ ...formValues, ...validationFields })
    return formValid
  }

  const onSignIn = async () => {
    const isFormValid = await formValidation()
    if (!isFormValid) {
      return false
    }

    login(formValues.email.value, formValues.password.value)
      .then(res => {
        alert('Logged In')
      })
      .catch(err => {
        console.log('err', err)
      })
  }
 
  return (
    <div className="backdrop">
      <div className="form-container">
        <form id="form-login">
          <h1>{labelMap.headers.signIn}</h1>
          <div className="form-field">
            <label htmlFor="email">{labelMap.fields.email}</label>
            <input type="email" name="email" value={formValues.email.value} onChange={handleInputChange}/>
            {formValues.email.error ? <span className='form-error'>{formValues.email.helperText}</span> : '' }
          </div>
          <div className="form-field">
            <label htmlFor="password">{labelMap.fields.password}</label>
            <input type="password" name="password" value={formValues.password.value} onChange={handleInputChange}/>
            {formValues.password.error ? <span className='form-error'>{formValues.password.helperText}</span> : '' }
          </div>
          <div className="form-checkbox">
            <label htmlFor="checkbox-id">
              <input type="checkbox" id="checkbox-id"/>{labelMap.fields.rememberMe}
            </label>
          </div>
          <div className="form-field">
            <button type="button" name="submit" onClick={onSignIn}>{labelMap.fields.signIn}</button>
          </div>
          <div className="form-footer">
            <a href="#">{labelMap.links.forgotPassword}</a>
            <div>
              <span>{labelMap.generalText.signup}</span>
              <a href="#">{labelMap.links.signup}</a>
            </div>
            <a href="#">{labelMap.links.resendEmail}</a>
          </div>
        </form>
      </div>
    </div>
  )
}