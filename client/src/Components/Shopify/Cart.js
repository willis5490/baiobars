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
  constructor(props) {
    super(props);

    this.openCheckout = this.openCheckout.bind(this);
  }

  openCheckout() {
    window.open(this.props.checkout.webUrl);
  }

  render() {
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

    return (

      <div uk-grid='true'>
        <div className='uk-width-1-1 uk-align-auto-vertical'>
          <div className={`Cart ${this.props.isCartOpen ? 'Cart--open' : ''}`}>
            <header className="Cart__header">
              <h2>Your cart</h2>
            </header>
            <ul className="Cart__line-items">
              {line_items}
            </ul>
          </div>
        </div>
        <div className='uk-width-1-1 uk-align-auto-vertical'>
          <div uk-grid='true'>
            <div className="uk-width-1-3">
              <a onClick={this.props.handleCartClose} class="uk-button uk-button-default uk-margin-small-bottom" href="">clear shoppping cart</a>
            </div>
            <div className="uk-width-1-3">
              <div uk-grid='true'>
                <div className="uk-width-1-3">
                  <div className="Cart-info__total Cart-info__small">Subtotal</div>
                  <span className="pricing">$ {this.props.checkout.subtotalPrice}</span>
                </div>
                <div className="uk-width-1-3">
                  <div className="Cart-info__total Cart-info__small">Taxes</div>
                  <span className="pricing">$ {this.props.checkout.totalTax}</span>
                </div>
                <div className="uk-width-1-3">
                  <div className="Cart-info__total Cart-info__small">Total</div>
                  <span className="pricing">$ {this.props.checkout.totalPrice}</span>
                </div>
              </div>
            </div>
            <div className="uk-width-1-3">
              <a  onClick={this.openCheckout} ><button style={this.style1} className="uk-button uk-margin-auto uk-margin-small-top uk-margin-small-bottom uk-button-default "><b>Place Order</b><a style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a></button></a>
            </div>

          </div>

        </div>
      </div>

    )
  }
}

export default Cart;