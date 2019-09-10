import React, { Component } from 'react';
import { Route, Router, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
// import Header from './Components/Header/Header.js'
import Footer from './Components/Footer/Footer.js'

// Pages
import About from './Pages/About/About.js'
import Contact from './Pages/Contact/Contact.js'
import Cricketflour from './Pages/CricketFlour/CricketFlour.js'
import FAQ from './Pages/FAQ/FAQ.js'
import Home from './Pages/Home/Home.js'
import Shop from './Pages/Shop/Shop.js'
import ShoppingCart from './Pages/ShoppingCart/ShopingCart.js'
import NotFound from './Pages/NotFound/NotFound.js'
import { createBrowserHistory } from 'history'



// redux
import { connect } from 'react-redux';
import store from './store';



require("dotenv").config();

const history = createBrowserHistory()

history.listen(_ => {
  window.scrollTo(0, 0)  
})


class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
}

updateQuantityInCart(lineItemId, quantity) {
  const state = store.getState(); // state from redux store
  const checkoutId = state.checkout.id
  const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
  state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
    store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
  });
}
removeLineItemInCart(lineItemId) {
  const state = store.getState(); // state from redux store
  const checkoutId = state.checkout.id
  state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
    store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
  });
}
handleCartClose() {
  store.dispatch({type: 'CLOSE_CART'});
}
handleCartOpen() {
  store.dispatch({type: 'OPEN_CART'});
}
addVariantToCart(variantId, quantity) {
  const state = store.getState(); // state from redux store
  const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
  const checkoutId = state.checkout.id
  state.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
    store.dispatch({type: 'ADD_VARIANT_TO_CART', payload: {isCartOpen: true, checkout: res}});
  });
}
  render() {
    const state = store.getState();
   
    return (
      <Router  history={history}>
         <div className="App">

            <Switch>

              <Route exact path="/" render={props =><Home store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} 
              addVariantToCart={this.addVariantToCart} handleCartOpen={this.handleCartOpen} />} />
              
              <Route exact path="/OurStory" render={props =><About store={state} updateQuantityInCart={this.updateQuantityInCart}
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart}/>} />
              
              <Route exact path="/Contact" render={props =><Contact  store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart} />} />
              
              <Route exact path="/Cricketflour" render={props =><Cricketflour  store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart} />} />
              
              <Route exact path="/FAQ" render={props =><FAQ  store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart} />} />
              
              <Route exact path="/Shop" render={props =><Shop  store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart} />} />
              
              <Route exact path="/ShoppingCart" render={props =><ShoppingCart  store={state} updateQuantityInCart={this.updateQuantityInCart} 
              removeLineItemInCart={this.removeLineItemInCart} handleCartClose={this.handleCartClose} handleCartOpen={this.handleCartOpen}
              addVariantToCart={this.addVariantToCart} />} />            
                           
              
              <Route render={props =><NotFound/>}/>
              
            </Switch>
          
        <Footer></Footer>
        <ToastContainer position="bottom-center" autoClose={1600} />
        </div>
      </Router>
  
    );
   
  }
}

export default connect((state) => state)(App);
