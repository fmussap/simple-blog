'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  constructor () {
    super()
    this.onSubmit = (values) => {
      console.log('values', values)
    }
  }
  renderField (field) {
    return (
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {field.meta.error}
      </div>
    )
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>
            Back
          </Link>
        </div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            name='title'
            label='Title'
            component={this.renderField}
          />
          <Field
            name='categories'
            label='Categories'
            component={this.renderField}
          />
          <Field
            name='content'
            label='Post Content'
            component={this.renderField}
          />
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    )
  }
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Please enter a title'
  } else if (values.title.length < 3) {
    errors.title = 'Title must be at least 3 characters'
  }

  if (!values.categories) {
    errors.categories = 'Please enter some categories'
  } else if (values.categories.length < 3) {
    errors.categories = 'categories must be at least 3 characters'
  }

  if (!values.content) {
    errors.content = 'Please write some content'
  } else if (values.content.length < 3) {
    errors.content = 'content must be at least 3 characters'
  }

  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew)
