'use strict'

import _ from 'lodash'

import * as actions from 'actions/actions-type'

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  // console.log('type', action.type)
  switch (action.type) {
    case actions.FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
  }
  return state
}
