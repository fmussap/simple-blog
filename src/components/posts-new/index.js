'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import { createPost } from 'actions'

class PostsNew extends Component {
  constructor () {
    super()
    this.backPostsList = () => {
      this.props.history.push('/')
    }
    this.onSubmit = (values) => {
      this.props.createPost(values, this.backPostsList)
    }
  }
  renderField (field) {
    const { meta: { touched, error }, label, input } = field
    const classNameCheck = touched && error
      ? 'form-group has-danger'
      : 'form-group'

    return (
      <div className={classNameCheck}>
        <label>{label}</label>
        <input
          className='form-control'
          type='text'
          {...input}
        />
        <div className='text-help'>
          {touched ? error : ''}
        </div>
      </div>
    )
  }

  render () {
    const { handleSubmit } = this.props
    return (
      <div style={{ padding: 10 }}>
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
          <button type='submit' className='btn btn-success'>Add</button>
          <Link style={{ marginLeft: 10 }} to='/' className='btn btn-danger'>
            Cancel
          </Link>
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
})(connect(null, { createPost })(PostsNew))
