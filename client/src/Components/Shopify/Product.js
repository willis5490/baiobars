import React, { Component } from 'react';
import VariantSelector from './VariantSelector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Product extends Component {

  style1={
    backgroundColor: 'red',
    color:'white',
    border: 'none',
    padding: '10px 20px 10px 20px',
    textAlign: 'center',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '40px',
    fontWeight:'600',
    letterSpacing:'3px'
}
style2={
    backgroundColor: 'white',
    color:'red',
    padding:'3px',
 
}


  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  
  render() {
    let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
    const notify = () => toast("Your Item Has Been Added To Your Cart!");
    toast.configure({
      position:"bottom-center",
      autoClose: 2000,
      
    })
    return (
<div>
    
      <div id='ProductsWrapper1' className='uk-margin-large-top uk-margin-large-bottom'>
        <div className='uk-container'>
          <div uk-grid='true'>
            <div className='uk-width-4-5@m  uk-width-1-1'>
              <div uk-grid='true'>
                <div className='uk-width-2-5@m uk-width-1-1 '>
                {this.props.product.images.length ? <img className='shopProductPics' src={variantImage.src} alt={`${this.props.product.title} product shot`} /> : null}
                </div>
                <div className='uk-width-3-5@m '>
                  <div  >
                    <img src='../images/new-icon.png'></img>
                  </div>
                  <h3><b>{this.props.product.title}</b></h3>
                  <h3 style={{ color: 'red' }}><b>${variant.price}</b></h3>
                  <p>Tom Lorent ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat</p>
                  <div>
                    <hr></hr>
                    <p>View Product Specifications <span uk-icon="icon: triangle-down"></span></p>
                    <hr></hr>
                  </div>
                  <div uk-grid='true'>
                    <div className='uk-width-3-5'>
                      <p>Specifics</p>
                      {variantSelectors}
                    </div>
                    <div className='uk-width-2-5'>
                      <p>Quantity</p>                      
                        <input min="1" type="number" className="uk-input ContactInputBody" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
                    </div>
                  </div>
                  <div className='uk-margin-medium-top'>
                    <button style={this.style1}  onClick={() => {this.props.addVariantToCart(variant.id, variantQuantity); notify()} }>
                      ADD TO CART<a style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>      
      </div>
    );
  }
}

export default Product;