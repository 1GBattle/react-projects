import React from 'react'
import { Form, Field } from 'react-final-form'

const StreamForm = ({ handleSubmit, initialValues }) => {
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
        <input {...input} autoComplete='off' />
        <div>{renderError(meta)}</div>
      </div>
    )
  }

  const onSubmit = (formValues) => {
    onSubmit(formValues)
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

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validate={(formValues) => {
        const errors = {}

        if (!formValues.title) {
          errors.title = 'You must enter a title'
        }

        if (!formValues.description) {
          errors.description = 'You must enter a description'
        }

        return errors
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit} className='ui form error'>
          <Field name='title' component={renderInput} label='Enter Title' />
          <Field
            name='description'
            component={renderInput}
            label='Enter Description'
          />
          <button className='ui button primary'>Submit</button>
        </form>
      )}
    />
  )
}

export default StreamForm
