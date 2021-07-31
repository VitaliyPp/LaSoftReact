import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header'
import ShopList from './components/ShopList'
import SingleLineImageList from './components/Landing'
import Footer from './components/Footer'
import Post from './components/Post'
// import NotFound from './components/NotFound'

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="Routing">
            <Route path='/' exact component={SingleLineImageList} />
            <Route path='/shop' exact component={ShopList} />
            <Route path='/shop/:id' exact component={Post} />
            {/* <Route path='*' exact component={NotFound} /> */}
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
