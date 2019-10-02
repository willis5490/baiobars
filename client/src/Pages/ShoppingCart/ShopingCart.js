import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Products from '../../Components/Shopify/Products'
import Cart from '../../Components/Shopify/Cart'


class Shoppingcart extends Component {
  styleHeader = {
    fontWeight: '800',
    fontSize: '90px'
  }
  styleHR = {
    borderTop: '2px solid black',
  }
  styleHR2 = {
    borderTop: '1px solid black',
  }

  style1 = {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    padding: '10px 10px 10px 10px',
    textAlign: 'center',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '40px',
    fontWeight: '600',
    letterSpacing: '4px'
  }
  style2 = {
    backgroundColor: 'white',
    color: 'red',
    padding: '3px',

  }

  specialDiv = {
    paddingRight: '100px',
    paddingLeft: '100px'
  }
  // render nav
  render() {
    // console.log(this.props)
    return (
      <div>
        <Header {...this.props} cart={900}></Header>

        <div id='shoppingCartContainer1'>
          <div className='uk-container uk-margin-medium-top'>
            <div uk-grid='true'>
              <div className='uk-width-1-1'>
                <h1 className='uk-margin-medium-bottom' id='shoppingCartHeader' style={this.styleHeader}>SHOPPING CART</h1>
                <hr className='uk-margin-medium-bottom uk-margin-small-top' style={this.styleHR}></hr>
              </div>
            </div>
            <div  style={this.specialDiv} uk-grid='true' className='uk-margin-small-bottom mobileShoppingCartChange'>
              <div className='uk-width-3-5@m uk-width-2-5'>
                <p className='productMobileChange'>Product</p>
              </div>
              <div className='uk-width-1-5@m uk-width-1-5'>
                <p className='uk-text-center qtyMobileChange'>QTY</p>
              </div>
              <div className='uk-width-1-5@m uk-width-2-5'>
                <p className='subtotalMobileChange'>Subtotal</p>
              </div>
            </div>
            <div style={this.specialDiv} uk-grid='true' className='uk-margin-remove-top mobileShoppingCartChange'>
              <div className='uk-width-1-1'>
                <hr className='shoppingCartHR' style={this.styleHR2}></hr>
              </div>
            </div>

            {/* MAP USERS PURCHASES */}

           

            {/* <div style={this.specialDiv}  uk-grid='true' className='uk-margin-small-bottom mobileShoppingCartChange'>
              <div className='uk-width-1-5@m uk-width-2-5 '>
                  <img src='https://via.placeholder.com/100'></img> 
                  <div className='uk-hidden@m'>
                  <p>Product INFO Ingredients and flavors plus some delicious statment that makes me want to eat crickets</p>   
                   <p>3 pack</p>  
                  </div>             
              </div>
              <div className='uk-width-2-5 uk-visible@m'>
                   <p>Product INFO Ingredients and flavors plus some delicious statment that makes me want to eat crickets</p>   
                   <p>3 pack</p>           
              </div>
              <div className='uk-width-2-5@m uk-width-2-5 uk-align-auto-vertical divshoppingCartChange'>
                           
              </div>
            </div>
            <div style={this.specialDiv}  uk-grid='true' className='uk-margin-remove-top mobileShoppingCartChange'>
                <div className='uk-width-1-1 '>
                  <hr className='' style={this.styleHR2}></hr>
                </div>
              </div> */}

            {/* end mapping of products from shopify */}

            <Cart
              checkout={this.props.store.checkout}
              isCartOpen={this.props.isCartOpen}
              handleCartClose={this.props.handleCartClose}
              updateQuantityInCart={this.props.updateQuantityInCart}
              removeLineItemInCart={this.props.removeLineItemInCart}
            ></Cart>


          </div>
        </div>



      </div>
    );
  }
}


export default Shoppingcart;
