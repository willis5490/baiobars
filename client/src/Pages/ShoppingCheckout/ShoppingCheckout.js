import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import BigHr from '../../Components/BigHR/BigHr.js';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Shoppingcheckout extends Component {

  // styles
  styleHeader={
    fontWeight:'800',
    fontSize:'90px'
  }
  styleHR={
    borderTop: '2px solid black',
  }
  styleHR2={
    borderTop: '1px solid black',
  }
  style4={
    fontWeight:'800',
    fontSize:'40px'
  }
  style3={
    paddingLeft: '20px'
  }
  style1={
    backgroundColor: 'white',
    color:'black',
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
    backgroundColor: 'red',
    color:'white',
    padding:'3px',
 
}

  // JS
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber:'',
    address: '',
    Apt: '',
    country: '',
    State: '',
    zipCode:'',


    shippingOption:'',
    paymentMethod: '',
    cardName: '',
    cardNumber: '',
    expDate: '',
    expYear:'',
    CVV: '',
    couponCode:''
   }

   notify = () => {
    toast.success("Your Email Has Been Sent !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Fill Out All Forms !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError2 = () => {
    toast.error("You Must Verify You Are Not A Robot !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

   sendEmail = event => {
    //  event.preventDefault()
     if(this.state.firstName === ''){
       this.notifyError()
     }else if(this.state.lastName === ''){
      this.notifyError()
     }else if(this.state.email === ''){
      this.notifyError()
     }else if(this.state.phoneNumber === ''){
      this.notifyError()
     }
     else if(this.state.address === ''){
      this.notifyError()
     }else if(this.state.country === ''){
      this.notifyError()
     }else if(this.state.State === ''){
      this.notifyError()
     }
     else if(this.state.zipCode === ''){
      this.notifyError()
     }
    //  else if(this.state.shippingOption === ''){
    //   this.notifyError()
    //  }
     else if(this.state.paymentMethod === ''){
      this.notifyError()
     }else if(this.state.cardName === ''){
      this.notifyError()
     }else if(this.state.cardNumber === ''){
      this.notifyError()
     }else if(this.state.expDate === ''){
      this.notifyError()
     }else if(this.state.expYear === ''){
      this.notifyError()
     }else if(this.state.CVV === ''){
      this.notifyError()
     }
     
     else {
       console.log(this.state)
      // axios.post("", {
      //   email: this.state.email,
      //    name: this.state.name,
      //    inquiry: this.state.inquiry,
      //    message: this.state.message
      //  })
      //    .then((response) => {
      //     console.log(response)
      //    })
      //    .catch((err) => {
      //      console.log(err)
      //    })
      //    this.notify()
         this.emptyFields()

         
     }


   };

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: value
     });
   };

   emptyFields = () => {
     this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber:'',
      address: '',
      Apt: '',
      country: '',
      State:'',
      zipCode:'',
      shippingOption: '',

      paymentMethod: '',
      cardName: '',
      cardNumber: '',
      expDate:'',
      expYear:'',
      CVV:'',
      couponCode:''
     })
   }

  // render nav
  render() {
    return (
      <div>
        <Header {...this.props}></Header>

        <div className='checkoutWrapper'>
          <div className='uk-container uk-margin-medium-top'>
            <div uk-grid='true'>
              <div className='uk-width-1-1'>
                  <h1  className='uk-margin-medium-bottom'  id='shoppingCartHeader' style={this.styleHeader}>CHECK OUT</h1>
                  <hr className='uk-margin-small-top uk-margin-small-bottom' style={this.styleHR}></hr>                                    
              </div>
            </div>
            <div uk-grid='true'>
            <div className='uk-width-1-1  '>
            <hr className='uk-margin-small-top' style={{borderTop: '25px solid',width: '70px',color:'#F3CC35'}}></hr>
            </div>
              <div className='uk-width-2-5@m uk-width-1-1 uk-margin-small-top'>
                 <h1 className='uk-margin-remove-top CheckoutHeaders' style={this.style4}>BILLING ADDRESS</h1>   
                  <form>
                      <fieldset className="uk-fieldset uk-margin-medium-top ">
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1">   
                          <p>First Name</p>                     
                          <input
                          value={this.state.firstName}
                          onChange={this.handleInputChange}
                          name='firstName'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="First Name" />
                          </div>
                                     
                          <div  id='formLastName' style={this.style3} className="uk-inline uk-width-1-2@m uk-width-1-1 shoppingMobileMargin">
                            <p>Last Name</p>
                            <input
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            name='lastName'
                                className="uk-input ContactInputBody"
                                type="text"
                                placeholder="Last Name" />
                          </div> 
                          </div>                    
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1">   
                          <p>Email</p>                     
                          <input
                          value={this.state.email}
                          onChange={this.handleInputChange}
                          name='email'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="Email" />
                          </div>           
                            <div  id='formLastName' style={this.style3} className="uk-inline uk-width-1-2@m uk-width-1-1 shoppingMobileMargin">
                              <p>Phone Number</p>
                              <input
                              value={this.state.phoneNumber}
                              onChange={this.handleInputChange}
                              name='phoneNumber'
                                  className="uk-input ContactInputBody"
                                  type="text"
                                  placeholder="Phone Number" />
                            </div>          
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Address</p>
                          <input
                          value={this.state.address}
                          onChange={this.handleInputChange}
                          name='address'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="Address" />
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Apt, Suite, Etc.</p>
                          <input
                          value={this.state.Apt}
                          onChange={this.handleInputChange}
                          name='Apt'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="Apt" />
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Country</p>
                          <select
                            value={this.state.country}
                            onChange={this.handleInputChange}
                            name='country'
                          className="uk-select ContactInputBody">
                            <option>{`Country`}</option>
                            <option>United States</option>          
                            <span uk-icon="icon: chevron-down"></span>
                          </select>
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1">   
                          <p>State</p>                
                          <select
                            value={this.state.State}
                            onChange={this.handleInputChange}
                            name='State'
                          className="uk-select ContactInputBody">
                            <option>{`State`}</option>
                            <option>AK</option>                            
                            <span uk-icon="icon: chevron-down"></span>
                          </select>
                          </div>     
                          <div  id='formLastName' style={this.style3} className="uk-inline uk-width-1-2@m uk-width-1-1 shoppingMobileMargin">
                            <p>Zip Code</p>
                            <input
                            value={this.state.zipCode}
                            onChange={this.handleInputChange}
                            name='zipCode'
                                className="uk-input ContactInputBody"
                                type="text"
                                placeholder="Zip Code" />
                            </div>                         
                      </div>
                      

                      </fieldset>
                  </form>                                 
              </div>

              <div className='uk-width-1-5 uk-margin-xlarge-top uk-visible@m'>
              <hr className="uk-divider-vertical uk-margin-auto-vertical" style={{height:'100%'}}></hr>
              </div>


              <div className='uk-width-2-5@m uk-width-1-1'>
                  <h1  className='uk-margin-medium-bottom CheckoutHeaders' style={this.style4}>SHIPPING OPTIONS</h1>
                  <form class="uk-form-stacked">
                  <fieldset className="uk-fieldset ">
                  <div class="uk-margin">      
                      <div class="uk-form-controls uk-form-controls-text uk-margin-small-bottom">
                      <label><input
                       class="uk-checkbox uk-margin-small-right"
                        type="checkbox" 
                        value={this.state.shippingOption}
                        onChange={this.handleInputChange}
                        name='shippingOption'
                        /> <b>STANDARD - $999.99</b></label>
                      </div>
                      <div class="uk-form-controls uk-form-controls-text uk-margin-small-bottom">
                      <label><input 
                      class="uk-checkbox uk-margin-small-right" 
                      value={this.state.shippingOption}
                        onChange={this.handleInputChange}
                        name='shippingOption'
                      type="checkbox" /> <b>STANDARD - $999.99</b></label>
                      </div>
                      <div class="uk-form-controls uk-form-controls-text">
                      <label><input 
                      class="uk-checkbox uk-margin-small-right" 
                      value={this.state.shippingOption}
                        onChange={this.handleInputChange}
                        name='shippingOption'
                      type="checkbox" /> <b>STANDARD - $999.99</b></label>
                      </div>
                  </div>
                  </fieldset>
                  </form>
                  <h1  className='uk-margin-medium-bottom uk-margin-large-top CheckoutHeaders' style={this.style4}>PAYMENT INFO</h1>
                  <form>
                    <fieldset className="uk-fieldset ">
                      <div className="uk-margin">
                            <div id="emailInput" className="uk-inline uk-width-1-1">
                            <p>Payment Method</p>
                            <select
                              value={this.state.paymentMethod}
                              onChange={this.handleInputChange}
                              name='paymentMethod'
                            className="uk-select ContactInputBody">
                              <option>{`Payment Method`}</option>
                              <option>Visa</option>          
                              <span uk-icon="icon: chevron-down"></span>
                            </select>
                            </div>
                        </div>
                        <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Name On Card</p>
                          <input
                          value={this.state.cardName}
                          onChange={this.handleInputChange}
                          name='cardName'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="Name On Card" />
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Card Number</p>
                          <input
                          value={this.state.cardNumber}
                          onChange={this.handleInputChange}
                          name='cardNumber'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="Card Number" />
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1">   
                          <p>Expiration Date</p>                
                          <select
                            value={this.state.expDate}
                            onChange={this.handleInputChange}
                            name='expDate'
                          className="uk-select ContactInputBody">
                            <option>{`00`}</option>
                            <option>AK</option>                            
                            <span uk-icon="icon: chevron-down"></span>
                          </select>
                          </div>                     
                            <div style={this.style3} id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1 shoppingMobileMargin">   
                            <p>Experation Year</p>                
                            <select
                              value={this.state.expYear}
                              onChange={this.handleInputChange}
                              name='expYear'
                            className="uk-select ContactInputBody">
                              <option>{`0000`}</option>
                              <option>AK</option>                            
                              <span uk-icon="icon: chevron-down"></span>
                            </select>
                            </div>                         
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>CVV</p>
                          <input
                          value={this.state.CVV}
                          onChange={this.handleInputChange}
                          name='CVV'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="XXX" />
                          </div>
                      </div>
                      <div className="uk-margin">
                          <div id="emailInput" className="uk-inline uk-width-1-1">
                          <p>Coupon Code</p>
                          <input
                          value={this.state.couponCode}
                          onChange={this.handleInputChange}
                          name='couponCode'
                              className="uk-input ContactInputBody"
                              type="text"
                              placeholder="XXXX-XXXX-XXXX-XXXX" />
                          </div>
                      </div>
                    </fieldset>
                  </form>
              </div>               
            </div>
          </div>
        </div>

        <div id='checkoutWrapper2'>
          <div className='uk-container'>
            <div uk-grid='true'>
                <div className='uk-width-3-4@m uk-width-1-1'>
                  <div uk-grid='true'>
                    <div className='uk-width-1-1'>
                      <h1  className='uk-margin-medium-bottom uk-margin-large-top uk-visible@m CheckoutHeaders' style={this.style4}>ORDER TOTAL</h1>
                      <h1  className='uk-margin-medium-bottom uk-margin-large-top uk-text-center uk-hidden@m CheckoutHeaders' style={this.style4}>ORDER TOTAL</h1>
                      <h2 className='uk-visible@m'>$9999.99</h2>
                      <h2 className='uk-hidden@m uk-text-center'>$9999.99</h2>
                    </div>
                  </div>
                  <div  uk-grid='true' className='uk-margin-small-bottom mobileShoppingCartChange'>
                    <div className='uk-width-2-5@m uk-width-2-5'>
                        <h6>Product</h6>              
                    </div>
                    <div className='uk-width-1-5@m uk-width-1-5'>
                          <h6>QTY</h6>           
                    </div>
                    <div className='uk-width-1-5@m uk-width-2-5'>
                          <h6>Subtotal</h6>          
                    </div>
                  </div>
                    <div uk-grid='true' className='uk-margin-remove-top uk-margin-large-bottom'>
                      <div className='uk-width-1-1'>
                        <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                      </div>
                    </div>
                    <div  uk-grid='true' className='uk-margin-small-bottom mobileShoppingCartChange'>
                      <div style={{color:'black'}} className='uk-width-2-5@m uk-width-2-5'>
                          <p>Baio bar ingredients exc. ect. blaher blaher blur blur blru</p> 
                          <p>3 Pack</p>             
                      </div>
                      <div className='uk-width-1-5@m uk-width-1-5 uk-align-auto-vertical'>
                          <form>
                            <fieldset className="uk-fieldset ">
                              <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-3@m uk-with-1-1 ">
                                    <input
                                    // value={}
                                    // onChange={this.handleInputChange}
                                    name='name'
                                        className="uk-input uk-text-center"
                                        type="text"
                                        placeholder="1" />
                                  </div>
                              </div>
                            </fieldset>
                          </form>         
                      </div>
                      <div style={{color:'black'}} className='uk-width-1-5@m uk-width-2-5 uk-align-auto-vertical'>
                            <p>$9999.99</p>       
                      </div>                
                  </div>
                  <div uk-grid='true' className='uk-remove-margin-top'>
                    <div className='uk-width-1-1 '>
                        <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                    </div>
                  </div>
                  <div uk-grid='true' className='uk-margin-small-top '>
                    <div className='uk-width-3-5 '>
                        <h5 className='uk-align-auto-vertical'>Subtotal</h5>
                    </div>
                    <div className='uk-width-1-5 '>
                        <h5>$9999.99</h5>
                    </div>
                    <div className='uk-width-1-1 uk-margin-small-top'>
                       <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                    </div>
                  </div>
                  <div uk-grid='true' className='uk-margin-small-top'>
                    <div className='uk-width-3-5 '>
                        <h5>Shipping and Handling</h5>
                    </div>
                    <div className='uk-width-1-5 '>
                        <h5>$9999.99</h5>
                    </div>
                    <div className='uk-width-1-1 uk-margin-small-top'>
                       <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                    </div>
                  </div>
                  <div uk-grid='true' className='uk-margin-small-top'>
                    <div className='uk-width-3-5 '>
                        <h5>Taxes</h5>
                    </div>
                    <div className='uk-width-1-5 '>
                        <h5>$9999.99</h5>
                    </div>
                    <div className='uk-width-1-1 uk-margin-small-top'>
                       <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                    </div>
                  </div>
                  <div uk-grid='true' className='uk-margin-small-top'>
                    <div className='uk-width-3-5 '>
                        <h5>Total</h5>
                    </div>
                    <div className='uk-width-1-5 '>
                        <h5>$9999.99</h5>
                    </div>
                    <div className='uk-width-1-1 uk-margin-small-top'>
                       <hr className='shoppingCartHR' style={this.styleHR2}></hr>
                    </div>
                  </div>
                  <form class="uk-form-stacked uk-margin-medium-top ">
                    <fieldset className="uk-fieldset ">
                      <div class="uk-margin">      
                          <div class="uk-form-controls uk-form-controls-text uk-margin-small-bottom">
                          <label><input
                          class="uk-checkbox uk-margin-small-right"
                            type="checkbox" 
                            value={this.state.newsLetter}
                            onChange={this.handleInputChange}
                            name='newsLetter'
                            /> <b>Subscribe to our newsletter</b></label>
                          </div>
                          
                      </div>
                    </fieldset>
                  </form>
                  <div className='uk-margin-medium-top'>                    
                    <a  type="submit"name="action"  onClick={this.sendEmail}><img className='buyButtons uk-margin-auto uk-margin-large-bottom' src='../images/but-now-button.png'></img></a>
                  </div>
                  
                </div>                
            </div>
          </div>
        </div>

        <div id='checkoutWrapper3' className='uk-margin-large-top uk-margin-xlarge-bottom'>
          <div className='uk-container'>
            <div className='uk-grid-match' uk-grid='true'>
              <div className='uk-width-1-3@s uk-width-1-1'>
                <img src='https://via.placeholder.com/500x400'></img>
              </div>
              <div className='uk-width-1-3@s uk-width-1-1'>
                <img src='https://via.placeholder.com/500x400'></img>
              </div>
              <div className='uk-width-1-3@s uk-width-1-1'>
                <img src='https://via.placeholder.com/500x400'></img>
              </div>
            </div>
          </div>
        </div>



      </div>
    );
  }
}


export default Shoppingcheckout;
