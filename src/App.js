import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Products from './components/Header'
import Footer from './components/Footer'
import SingleLineImageList from './components/Landing'

import { PostsList } from './components/ShopList'
import { SinglePostPage } from './components/Post'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Products />
        <div className="App">
          <Switch>
            <Route path='/' exact component={SingleLineImageList} />
            <Route
              exact
              path="/shop"
              render={() => (
                <React.Fragment>
                  <PostsList />
                </React.Fragment>
              )}
            />
            <Route exact path="/shop/:postId" component={SinglePostPage} />
            <Redirect to="/shop" />
          </Switch>
        </div>
        <Footer />
      </Router>
    )
  }
}

export default App
