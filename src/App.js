import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import ShopList from './components/Shop'
import SingleLineImageList from './components/Landing'
import Footer from './components/Footer'

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="Routing">
            <Route path='/' exact component={SingleLineImageList} />
            <Route path='/shop' component={ShopList} />
          </div>  
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
