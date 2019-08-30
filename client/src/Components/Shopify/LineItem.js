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
          <div className='uk-width-1-5@m uk-width-1-5 uk-align-auto-vertical'>
            <div className="uk-align-center">
              {this.props.line_item.variant.image ? <img id='inShoppingCartPics' src={this.props.line_item.variant.image.src} alt={`${this.props.line_item.title} product shot`} /> : null}
            </div>          
          </div>
          <div className='uk-width-2-5@m uk-align-auto-vertical'>
            <p className=''>{this.props.line_item.title}</p>
            <p className=''>{this.props.line_item.variant.title}</p>
            </div>
          <div className='uk-width-1-5@m uk-width-1-5 uk-align-auto-vertical uk-text-center uk-align-center'>
              <span className='uk-text-center'>
                <a  onClick={() => this.decrementQuantity(this.props.line_item.id)}><i class="fas fa-arrow-circle-down"></i></a>
                <span className="uk-margin-small-right uk-margin-small-left">{this.props.line_item.quantity}</span>
                <a onClick={() => this.incrementQuantity(this.props.line_item.id)}><i class="fas fa-arrow-circle-up"></i></a>
                
              </span>
          </div>
          <div className='uk-width-1-5@m  uk-width-2-5 uk-align-auto-vertical'>
            <div uk-grid='true'>
              <div className="uk-width-1-2 ">                        
                    <h5>$ {(this.props.line_item.quantity * this.props.line_item.variant.price).toFixed(2)}</h5>                             
              </div>
              <div className="uk-width-1-2 ">                        
                    <a  onClick={() => this.props.removeLineItemInCart(this.props.line_item.id)}><h5 style={{color:'red'}}>X</h5></a>                            
              </div>
            </div>
          </div>
          <hr></hr>
        </div>
      </div>
    );
  }
}

export default LineItem;