import React from 'react'
import { reduxForm, Field } from 'redux-form'

const StreamForm = ({ onSubmit, handleSubmit }) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      )
    }
  }
  const renderInput = ({ input, label, meta }) => {
    return (
      <div className={`field ${meta.error && meta.touched ? 'error' : null}`}>
        <label>{label}</label>
        <input {...input} />
        <div>{renderError(meta)}</div>
      </div>
    )
  }

  // const onSubmit = (formValues) => {
  //   onSubmit(formValues)
  // }

  return (
    <form className='ui form error' onSubmit={handleSubmit(onSubmit)}>
      <Field name='title' component={renderInput} label='Enter Title' />
      <Field name='description' component={renderInput} label='Enter Description' />
      <button className='ui primary button '>Submit</button>
    </form>
  )
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate,
  enableReinitialize: true
})(StreamForm)
