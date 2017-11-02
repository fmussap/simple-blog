'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends Component {
  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>
            Back
          </Link>
        </div>
        <form>
          <div>
            <Field
              name='title'
              component='input'
              type='text'
            />
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew)
