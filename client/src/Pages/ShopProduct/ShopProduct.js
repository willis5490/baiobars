import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Button from '../../Components/BaioBarButton/BaioBarButton.js'
import Products from '../../Components/Shopify/Products'


class ShopProduct extends Component {
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
style3={
  color:'black',
  fontWeight:'1000',
  fontSize:'70px',
  
}



  state = {
    packageSize: '',
    quantity: ''
   }
   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // render nav
  render() {
    return (
      <div id='shopProductMain'>
        <Header {...this.props}></Header>
        <Products
              products={this.props.store.products}
              client={this.props.store.client}
              addVariantToCart={this.props.addVariantToCart}
            />

          <div id='productWrapper2'>
              <div className='uk-container'>
                <div uk-grid='true'>
                  <div className='uk-width-1-2'>
                    <div className='uk-section'>
                      <p style={{color:'black'}}>Details</p>
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
                      <p style={{color:'black'}}>Specifications</p>
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
                      <h1 id='productPageLargeText' style={this.style3}>CHALLENGE THE <span style={{color:'red'}}>STATUS QUO</span></h1>
                  </div>
                  <div className='uk-width-1-3@m uk-width-1-2@s  uk-width-1-1'>
                    <img style={{width:'400px', height:'400px'}} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-1.jpg" />
                  </div>
                  <div className='uk-width-1-3@m uk-width-1-2@s uk-width-1-1'>
                    <img style={{width:'400px', height:'400px'}} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-2.jpg" />
                  </div>
                  <div className='uk-width-1-3@m uk-width-1-2@s uk-width-1-1'>
                    <img style={{width:'400px', height:'400px'}} className='uk-align-center shopProductIngredientPics' src="../images/ingredient-3.jpg" />
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
                  <Button  Text={'Click here for FAQ section'} Href={'/FAQ'}></Button>
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



      </div>
    );
  }
}


export default ShopProduct;
