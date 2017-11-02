'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from 'actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    const myPosts = this.props.posts
    if (myPosts) {
      return _.map(myPosts, post => {
        return (
          <li className='list-group-item' key={post.id}>
            {post.title}
          </li>
        )
      })
    }
  }
  render () {
    return (
      <div>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.PostsReducer
})

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)
