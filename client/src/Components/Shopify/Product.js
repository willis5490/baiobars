import React, { Component } from 'react';
import VariantSelector from './VariantSelector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';

class Product extends Component {

  style1 = {
    backgroundColor: '#EC2B2C',
    color: 'white',
    border: 'none',
    padding: '10px 20px 10px 20px',
    textAlign: 'center',
    margin: '4px 2px',
    cursor: 'pointer',
    borderRadius: '40px',
    fontWeight: '600',
    letterSpacing: '3px'
  }
  style2 = {
    backgroundColor: 'white',
    color: '#EC2B2C',
    padding: '3px',

  }



  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });

    this.state = {
      selectedOptions: defaultOptionValues,
      modalIsOpen: null
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    // this.findImage = this.findImage.bind(this);
  }

  openModal = (_id) => {
    this.setState({ modalIsOpen: _id });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: null });
  }

  // findImage(images, variantId) {
  //   const primary = images[0];

  //   const image = images.filter(function (image) {
  //     return image.variant_ids.includes(variantId);
  //   })[0];

  //   return (image || primary).src;
  // }

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
 
    const popAndLock = (prodImage) => {


      if (prodImage.length !== 1) {
        prodImage.shift()
        return prodImage;
      }
      else {
        return prodImage;
      }
    }
    let variantImage = this.props.product.images[this.props.product.images.length - 1] || this.props.product.images[0]
    let variantFilter = popAndLock(this.props.product.images)
    // let variantImages = this.state.selectedVariantImage || variantFilter.map((image)=>{
    //   console.log(image)
    //   return image
    // })

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
    const notify = () => toast(this.props.product.title + "-" + this.state.selectedOptions.selection + " Has Been Added To Your Cart!");
    toast.configure({
      position: "bottom-center",
      autoClose: 1600,

    })

    const comingSoonPRice = (price) => {
      if (price === '0.00') {

        return ''
      } else {
        return '$ ' + price
      }
    }

    return (
      <div className='uk-width-1-3@m uk-margin-large-top shopProductsDivs uk-width-1-1'>
        <a onClick={() => this.openModal(this.props.key)} href='#'><img className='shopProductPics uk-align-center' src={variantImage.src} alt={`${this.props.product.title} product shot`} /> </a>
        <div uk-grid='true'>
          <div className='uk-width-2-3'>
            <a onClick={() => this.openModal(this.props.key)} href='#'><h5><b>{this.props.product.title}</b></h5></a>
          </div>
          <div className='uk-width-1-3'>
            <h5 className='uk-text-right'><b>{comingSoonPRice(this.props.product.variants[0].price)}</b></h5>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen === this.props.key}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className=""
        >
          <div className='uk-margin-small-top '>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1 uk-text-right'>
                  <a><h4 style={{color:'#EC2B2C'}} onClick={this.closeModal}>X</h4></a>
                </div>
              </div>
            </div>
          </div>
          <div id='ProductsWrapper1' className='uk-margin-medium-top uk-margin-large-bottom'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-5-5@m  uk-width-1-1'>
                  <div uk-grid='true'>
                    <div className='uk-width-3-5@m uk-width-1-1 '>
                      {this.props.product.images.length ? <img className='shopProductPicsModal' src={variantImage.src} alt={`${this.props.product.title} product shot`} /> : null}
                    </div>
                    <div className='uk-width-2-5@m '>
                      <div  >
                        <img src='../images/new-icon.png'></img>
                      </div>
                      <h3><b>{this.props.product.title}</b></h3>
                      <h3 style={{ color: '#EC2B2C' }}><b>${variant.price}</b></h3>
                      <p>{this.props.product.description}</p>
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
                        <button id='addToCartButton' style={this.style1} onClick={() => { this.props.addVariantToCart(variant.id, variantQuantity); this.closeModal(); notify(); }}>
                          ADD TO CART<a style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a>
                        </button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='productWrapper2'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-2'>
                  <div className='uk-section'>
                    <p style={{ color: 'black' }}>Details</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                      nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                    </p>
                  </div>
                </div>
                <div className='uk-width-1-2 '>
                  <div className='uk-section'>
                    <p style={{ color: 'black' }}>Specifications</p>
                    <ul>
                      <li>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit</li>
                      <li>Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='productWrapper3' className='uk-margin-large-bottom'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1 uk-text-center uk-margin-large-top uk-margin-large-bottom'>
                  <h1 id='productPageLargeText' style={this.style3}>CHALLENGE THE <span style={{ color: 'red' }}>STATUS QUO</span></h1>
                </div>
                <div className='uk-width-1-3@m uk-width-1-2@s  uk-width-1-1'>
                  <img style={{ width: '400px', height: '400px' }} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-1.jpg" />
                </div>
                <div className='uk-width-1-3@m uk-width-1-2@s uk-width-1-1'>
                  <img style={{ width: '400px', height: '400px' }} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-2.jpg" />
                </div>
                <div className='uk-width-1-3@m uk-width-1-2@s uk-width-1-1'>
                  <img style={{ width: '400px', height: '400px' }} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-3.jpg" />
                </div>
              </div>
            </div>
          </div>
          <div className='uk-margin-large-top' id='flourWrapper5'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1'>
                  <h1 className='uk-margin-large-top uk-margin-medium-bottom  uk-text-center'>SHORT FAQ SECTION</h1>
                  <div className='uk-align-center uk-text-center uk-margin-large-bottom'>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='uk-margin-xlarge-bottom' id='flourWrapper6'>
            <div id='instagramcontainer' className='uk-container'>
              <div className='uk-margin-medium-top' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <h2 className='uk-text-left@m uk-text-center instagramTextAllPages'>#CHALLENGETHESTATUSQUO</h2>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1'>
                  <a target="_blank" className='uk-align-right uk-visible@m' href='https://www.instagram.com/baiobarprotein/?hl=en'><span style={{ backgroundColor: 'red', color: 'white', margin: '5px' }} class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                  <a target="_blank" className='uk-align-center uk-margin-remove-top uk-text-center uk-hidden@m' href='https://www.instagram.com/baiobarprotein/?hl=en'><span style={{ backgroundColor: 'red', color: 'white', margin: '5px' }} class="uk-icon-button " uk-icon="icon:instagram"></span></a>
                </div>
              </div>
              <div className='uk-grid-match' uk-grid='true'>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img src='https://via.placeholder.com/200'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img src='https://via.placeholder.com/200'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img src='https://via.placeholder.com/200'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img src='https://via.placeholder.com/200'></img>
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img src='https://via.placeholder.com/200'></img>
                </div>
              </div>
            </div>
          </div>


        </Modal>

      </div>





    );
  }
}

export default Product;