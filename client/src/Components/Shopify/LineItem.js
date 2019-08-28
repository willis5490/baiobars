import React, { Component } from 'react';

class LineItem extends Component {
  constructor(props) {
    super(props);

    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    return (
      <div className='uk-container'>
        <div uk-grid='true'>
          <div className='uk-width-1-3 uk-align-auto-vertical'>
            <div className="Line-item__img">
              {this.props.line_item.variant.image ? <img id='inShoppingCartPics' src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} /> : null}
            </div>
          </div>
          <div className='uk-width-1-3 uk-align-auto-vertical'>
            <div className="Line-item__content">
              <div className="Line-item__content-row">
                <div className="Line-item__variant-title">
                  {this.props.line_item.variant.title}
                </div>
                <span className="Line-item__title">
                  {this.props.line_item.title}
                </span>
              </div>
            </div>
          </div>
          <div className='uk-width-1-3 uk-align-auto-vertical'>
            <div className="Line-item__content-row">
              <span className="Line-item__quantity-container">
                <button className="Line-item__quantity-update" onClick={() => this.decrementQuantity(this.props.line_item.id)}>-</button>
                <span className="Line-item__quantity">{this.props.line_item.quantity}</span>
                <button className="Line-item__quantity-update" onClick={() => this.incrementQuantity(this.props.line_item.id)}>+</button>
              </span>
              <span className="Line-item__price">
                $ {(this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)}
              </span>
              <button className="Line-item__remove" onClick={() => this.props.removeLineItemInCart(this.props.line_item.id)}>×</button>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default LineItem;