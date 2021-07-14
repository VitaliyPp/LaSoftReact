import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/Header'
import ShopList from './components/ShopList'
import SingleLineImageList from './components/MainPage'
import Footer from './components/Footer'

function App() {
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
  );
}

export default App;
