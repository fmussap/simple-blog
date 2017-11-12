'use strict'

import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import PostsIndex from 'components/posts-index'
import PostsNew from 'components/posts-new'
import PostsShow from 'components/posts-show'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={PostsIndex} />
          <Route path='/posts/new' component={PostsNew} />
          <Route path='/posts/show/:id' component={PostsShow} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
