'use strict'

import axios from 'axios'

import * as actions from './actions-type'

// import { API_BLOG_POST_KEY as KEY } from '../keys'

// const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'
const urlTest = 'http://reduxblog.herokuapp.com/api/posts?key=123'

export const fetchPosts = () => {
  // const url = `${ROOT_URL}posts${KEY}`
  const request = axios.get(urlTest)
  return {
    type: actions.FETCH_POSTS,
    payload: request
  }
}
