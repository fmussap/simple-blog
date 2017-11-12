'use strict'

import axios from 'axios'

import * as actions from './actions-type'

import { API_BLOG_POST_KEY as KEY } from '../keys'

const ROOT_URL = 'http://reduxblog.herokuapp.com/api/'
const url = `${ROOT_URL}posts${KEY}`

export const fetchPosts = () => {
  const request = axios.get(url)
  return {
    type: actions.FETCH_POSTS,
    payload: request
  }
}

export const createPost = (values, callback) => {
  const request = axios.post(url, values)
  .then(() => callback())
  return {
    type: actions.CREATE_POST,
    payload: request
  }
}

export const fetchPost = (id) => {
  const request = axios.get(`${ROOT_URL}posts/${id}${KEY}`)
  return {
    type: actions.FETCH_POST,
    payload: request
  }
}

export const deletePost = (id, callback) => {
  axios.delete(`${ROOT_URL}posts/${id}${KEY}`)
  .then(() => callback())
  return {
    type: actions.DELETE_POST,
    payload: id
  }
}
