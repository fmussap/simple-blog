'use strict'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchPost, deletePost } from 'actions'

class PostsShow extends Component {
  constructor () {
    super()

    this.backPostsList = () => {
      this.props.history.push('/')
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete (e) {
    const { id } = this.props.match.params
    this.props.deletePost(id, this.backPostsList)
  }
  componentDidMount () {
    const { id } = this.props.match.params
    this.props.fetchPost(id)
  }
  render () {
    const { post } = this.props
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div style={{ padding: 10 }}>
        <div style={{ marginBottom: 10 }}>
          <Link to='/' className='btn btn-primary'>
            Back
          </Link>
          <button
            className='btn btn-danger pull-xs-right'
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </div>
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ posts }, ownProps) => ({
  post: posts[ownProps.match.params.id]
})

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
