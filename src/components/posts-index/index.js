'use strict'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from 'actions'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class PostsIndex extends Component {
  constructor () {
    super()
    this.handleDelete = (id) => {
      this.props.deletePost(id, () => null)
    }
  }

  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    const myPosts = this.props.posts
    if (myPosts) {
      return _.map(myPosts, post => {
        return (
          <li className='list-group-item' key={post.id}>
            <Link to={`/posts/show/${post.id}`}>
              {post.title}
            </Link>
            <button
              className='btn btn-danger pull-xs-right'
              onClick={() => this.handleDelete(post.id)}
            >
              Delete
            </button>
          </li>
        )
      })
    }
  }
  render () {
    return (
      <div style={{ padding: 10 }}>
        <div className='text-xs-right'>
          <Link to='/posts/new' className='btn btn-primary'>
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className='list-group'>
          <ReactCSSTransitionGroup
            transitionName='fade'
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {this.renderPosts()}
          </ReactCSSTransitionGroup>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }) => ({
  posts
})

export default connect(mapStateToProps, { fetchPosts, deletePost })(PostsIndex)
