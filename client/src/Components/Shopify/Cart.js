import React, { Component } from 'react';
import LineItem from './LineItem';

class Cart extends Component {
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
  // specialDiv = {
  //   paddingRight: '100px',
  //   paddingLeft: '100px'
  // }

  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl,'_self');
  }



  render() {
    console.log(this.props)
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });
    let emptyCartMessage = (
      <h2 id='emptyCartMessage' className='uk-text-center'>You have no items in your cart</h2>
    )

    return (

      <div id='cartShopify' uk-grid='true' style={this.specialDiv}>
        <div className='uk-width-1-1 uk-align-auto-vertical'>
          <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>           
            <ul className="Cart__line-items">
              {this.props.checkout.lineItems.length ==0  ? emptyCartMessage : line_items }
            </ul>
          </div>
        </div>
        <div className='uk-width-1-1 uk-align-auto-vertical '>
          <div uk-grid='true'>
          <div className="uk-width-1-3@m uk-width-1-1">
              <div uk-grid='true'>
            
                <div className="uk-width-2-5@m uk-width-1-1 ">
                  
                </div>
                <div className="uk-width-3-5@m  uk-width-1-1 ">
                  <p className="uk-margin-remove-bottom uk-text-right uk-text-left@m">Cart Total</p>
                  <h2 className="uk-margin-remove-top uk-text-right uk-text-left@m">$ {this.props.checkout.totalPrice}</h2>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3@m uk-width-1-1 uk-flex-first@m">
              <a id='shoppingCartClearButton' onClick={this.props.handleCartClose} class="uk-button uk-button-default uk-align-right uk-align-left@m">clear shoppping cart</a>
            </div>        
            <div className="uk-width-1-3@m uk-width-1-1 ">
              <a  onClick={this.openCheckout} ><button style={this.style1} className="uk-button uk-margin-auto uk-margin-small-top uk-margin-small-bottom uk-button-default  uk-align-right uk-align-left@m"><b>Place Order</b><a style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a></button></a>
            </div>

          </div>

        </div>
      </div>

    )
  }
}

export default Cart;