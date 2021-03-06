import React, { Component } from 'react';
import VariantSelector from './VariantSelector';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'react-modal';
import Slide from '../../Components/ProductSlider/Slide'
import RightArrow from '../../Components/ProductSlider/RightArrow'
import LeftArrow from '../../Components/ProductSlider/LeftArrow'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '../../Components/BaioBarButton/BaioBarButton.js'
import Insta from '../../Components/Instagram/Instagram.js'

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
      modalIsOpen: null,
      images: [
        this.props.product.images.map(image => { return image.src })


      ],
      currentIndex: 0,
      translateValue: 0
    };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    // this.findImage = this.findImage.bind(this);
  }


  // carousel Fucntion
  goToPrevSlide = () => {
    if (this.state.currentIndex === 0)
      return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }))
  }

  goToNextSlide = () => {
    // Exiting the method early if we are at the end of the images array.
    // We also want to reset currentIndex and translateValue, so we return
    // to the first image in the array.
    if (this.state.currentIndex === this.state.images[0].length - 2) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      })
    }

    // This will not run if we met the if condition above
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -(this.slideWidth())
    }));
  }

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth
  }



  // modal Functions
  openModal = (_id) => {
    this.setState({ modalIsOpen: _id });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: null });
  }



  // Shopify Functions
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
    // console.log(this.state.images)

    let variantImage = this.props.product.images[this.props.product.images.length - 1] || this.props.product.images[0]
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
    const notify = () => toast(this.props.product.title + "-" + " Has Been Added To Your Cart!");
    toast.configure({
      position: "bottom-center",
      autoClose: 3000,
    })

    const comingSoonPRice = (price) => {
      if (price === '0.00') {

        return ''
      } else {
        return '$ ' + price
      }
    }

    let sliderWrapper = (
      <div>
        <LeftArrow
          goToPrevSlide={this.goToPrevSlide}
        />
        <div className="slider">

          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
            {
              this.state.images[0].map((image, i) => (
                <Slide key={i} image={image} />
              ))
            }
          </div>
        </div>
        <RightArrow
          goToNextSlide={this.goToNextSlide}
        />
      </div>
    )

    let comingSoonItem = (
      <div>
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
    )

    return (
      <div className='uk-width-1-3@m uk-width-1-2@s uk-margin-large-top shopProductsDivs'>
        <a onClick={() => this.openModal(this.props.key)} href='#'><img className='shopProductPics uk-align-center' src={variantImage.src} alt={`${this.props.product.title} product shot`} /> </a>
        <div uk-grid='true'>
          <div className='uk-width-2-3 productsTitleMobile'>
            <a onClick={() => this.openModal(this.props.key)} href='#'><h5><b>{this.props.product.title}</b></h5></a>
          </div>
          <div className='uk-width-1-3 productsPriceMobile'>
            <h5 className='uk-text-right'><b>{comingSoonPRice(this.props.product.variants[0].price)}</b></h5>
          </div>
        </div>
        <Modal
          isOpen={this.state.modalIsOpen === this.props.key}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className=""
        >
          <div className='beep'>
            <div className='uk-container'>
              <div className='uk-text-right'>
              <button className='ModalXButton' onClick={this.closeModal} ><a onClick={this.closeModal}><h4 style={{color:'#EC2B2C'}} className='uk-margin-auto-vertical '>X</h4></a></button>  
              </div>
            </div>
          </div>
          <div id='ProductsWrapper1' className=' uk-margin-large-bottom'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-5-5@m  uk-width-1-1'>
                  <div uk-grid='true'>
                    <div className='uk-width-3-5@m uk-width-1-1 '>
                      {/* {this.props.product.images.length ? <img className='shopProductPicsModal uk-align-center' src={variantImage.src} alt={`${this.props.product.title} product shot`} /> : null} */}
                      {this.props.product.images.length ? sliderWrapper : null}
                    </div>
                    <div className='uk-width-2-5@m '>
                      <div  >
                        <img src='../images/new-icon.png'></img>
                      </div>
                      <h3><b>{this.props.product.title}</b></h3>
                      <h3 style={{ color: '#EC2B2C' }}><b>${variant.price}</b></h3>
                      <p>{this.props.product.description}</p>
                      {this.props.product.images.length > 1 ? comingSoonItem: null}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='productWrapper2'>
            <div className='uk-container'>
              <div uk-grid='true'>
                {/* <div className='uk-width-1-2@m uk-width-1-1'>
                  <div className='modalProductDetailSect'>
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
                </div> */}
                <div className='uk-width-1-2@m uk-width-1-1 '>
                  <div className='modalProductDetailSect'>
                    <p style={{ color: 'black' }}>Specifications</p>
                    <div uk-grid='true'>
                      <div className='uk-width-1-2@m uk-width-1-1 uk-margin-remove-bottom'>
                      <ul>
                      <li>Organic Oats</li>
                      <li>Organic Almond Butter</li>
                      <li>Organic Clover Honey</li>
                      <li>Organic Dates</li>                     
                    </ul>

                      </div>
                      <div className='uk-width-1-2@m uk-width-1-1 uk-margin-remove-top'>
                      <ul>                     
                      <li>Organic Cocoa</li>
                      <li>Organic Coconut</li>
                      <li>Sea Salt</li>
                    </ul>

                      </div>
                    </div>
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
                <div className=' uk-width-1-1'>
                  <img className='uk-align-center shopProductIngredientPics'src="..\images\Product Page_Image 1.jpg" />
                </div>
                
              </div>
            </div>
          </div>
          <div className='uk-margin-large-top' id='flourWrapper5'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1'>
                  <h1 className='uk-margin-large-top uk-margin-medium-bottom  uk-text-center'>Hop To More Facts</h1>
                  <div className='uk-align-center uk-text-center uk-margin-large-bottom'>
                    <Link to='/FAQ'><Button Text={'Click For Facts'} Href={'/FAQ'}></Button></Link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Insta></Insta>


        </Modal>

      </div>





    );
  }
}

export default Product;