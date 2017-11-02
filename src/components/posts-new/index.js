'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PostsNew extends Component {
  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/' className='btn btn-primary'>
            Back
          </Link>
        </div>
        Posts New
      </div>
    )
  }
}

export default connect(null, null)(PostsNew)
