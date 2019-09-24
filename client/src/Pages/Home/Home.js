import React, { Component } from 'react';
import BigHr from '../../Components/BigHR/BigHr.js'
import ContactForm from '../../Components/ContactForm/ContactForm.js'
import HeaderHome from '../../Components/HeaderHome/HeaderHome.js'
import Insta from '../../Components/Instagram/Instagram.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from '../../Components/Shopify/Products'
import axios from 'axios'
import { toast } from 'react-toastify';




class Home extends Component {

  componentDidMount() {
    //  this.props.store.getState()

  }
  state = {
    userEmail: ''
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state)
  };

  emptyFields = () => {
    this.setState({
      userEmail: ''
    })
  }

  sendNewsletter = () => {
    if (/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.state.userEmail) == false) {
      this.notifyError();
    } else {
      axios.post("https://baiobar.herokuapp.com/sendNewsletter", {
        email: this.state.userEmail,
      })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      this.notify()
      this.emptyFields()
    }

  }


  notify = () => {
    toast.success("You Are Now Subscribed To Our Newsletter !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Give A Valid Email !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };


  headerStyle = {
    fontWeight: '1000',
    fontSize: '80px',
    color: 'black'
  }
  HRstyle2 = {
    borderTop: '4px solid grey',
    width: '160px',

  }
  HRstyle3 = {
    borderTop: '2px solid grey',
    width: '100px',
    marginTop: '0px'

  }
  style2 = {
    fontSize: '70px',
    fontWeight: '1000',
    color: 'black'
  }
  StoryStyle = {
    color: 'black',
    fontWeight: '1000',
    fontSize: '80px'
  }

  homeCardStyle = {
    border: '2px solid grey'
  }
  style5 = {
    width: '50px',
    padding: '5px',
  }




  // render nav
  render() {
    console.log();

    return (
      <div>
        <HeaderHome {...this.props}></HeaderHome>

        <div id='homeWrapper1Inside'>
          <div id='homeWrapper1'>

            <div className='uk-container'>
              <div className='' uk-grid='true'>
                <div className='uk-width-1-1 '>
                  <img className='baiobarWordsPic uk-margin-large-top' src='../images/Baiobar_Logo_Words_WHT.png'></img>
                  <h2 className='homeHeader1' style={this.headerStyle}>CRICKET <br></br> <span style={{ color: 'white' }}>PROTEIN BAR</span></h2>

                  <div className='uk-margin-xlarge-bottom uk-margin-medium-top'>
                    <Link to='/Shop'><a href='/Shop'><img className='buyButtons' src='../images/but-now-button.png'></img></a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id='homeSpacetakerMobile' className='uk-hidden@m'>
          <div id='homeWrapper2'>
            <div id='upwardDownPic'>
              <div className='uk-container '>
                <div className='' uk-grid='true'>
                  <div className='uk-width-1-2@m uk-width-1-1 uk-margin-large-top '>
                    <div className='' uk-grid="true">
                      <div className='uk-width-1-3@m uk-width-1-1 '>
                        <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-1.png'></img>
                      </div>
                      <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                        <h4 className='uk-margin-small-top iconParas'>
                          Crickets contain essential Vitamin and Minerals Iron and Vitamin B12
                          </h4>
                      </div>
                    </div>
                  </div>
                  <div className='uk-width-1-2@m uk-width-1-1 uk-margin-large-top '>
                    <div className='' uk-grid="true">
                      <div className='uk-width-1-3@m uk-width-1-1 '>
                        <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-2.png'></img>
                      </div>
                      <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                        <h4 className='uk-margin-small-top  iconParas'>
                          Roughly 80% less water is used to produce the same amount of protein in crickets as bovine
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-top '>
                    <div className='' uk-grid="true">
                      <div className='uk-width-1-3@m uk-width-1-1 '>
                        <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-3.png'></img>
                      </div>
                      <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                        <h4 className='uk-margin-small-top  iconParas'>
                          Crickets are composed of 70-80% protein vs beef which ranges anywhere from 17%-40%
                          </h4>
                      </div>
                    </div>
                  </div>
                  <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-top uk-margin-large-bottom '>
                    <div className='' uk-grid="true">
                      <div className='uk-width-1-3@m uk-width-1-1 '>
                        <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-4.png'></img>
                      </div>
                      <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                        <h4 className='uk-margin-small-top  iconParas'>
                          80% of the world already eats insects!
                          </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='mobileGirlPicChange'>
              <div className='uk-container'>
                <div uk-grid='true'>
                  <div className='uk-width-1-1 uk-align-auto-vertical uk-text-center uk-align-center homePicSpecialContainer'>
                    <hr style={this.HRstyle2} className='uk-margin-medium-bottom uk-align-center uk-margin-large-top'></hr>
                    <h1 className='homeHeader1' style={this.style2}><b>CHALLENGE THE <span style={{ color: '#EC2D2D' }}>STATUS QUO</span></b></h1>
                    <hr style={this.HRstyle2} className='uk-margin-medium-top uk-align-center uk-margin-xlarge-bottom'></hr>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id='homeSpacetaker' className='uk-visible@m'>
          <div id='homeWrapper2'>
            <div className='uk-container '>
              <div className='' uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-large-top '>
                  <div className='' uk-grid="true">
                    <div className='uk-width-1-3@m uk-width-1-1 '>
                      <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-1.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                      <h4 className='uk-margin-small-top iconParas'>
                        Crickets contain essential Vitamin and Minerals Iron and Vitamin B12
                          </h4>
                    </div>
                  </div>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-large-top '>
                  <div className='' uk-grid="true">
                    <div className='uk-width-1-3@m uk-width-1-1 '>
                      <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-2.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                      <h4 className='uk-margin-small-top  iconParas'>
                        Roughly 80% less water is used to produce the same amount of protein in crickets as bovine
                        </h4>
                    </div>
                  </div>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-top '>
                  <div className='' uk-grid="true">
                    <div className='uk-width-1-3@m uk-width-1-1 '>
                      <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-3.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                      <h4 className='uk-margin-small-top  iconParas'>
                        Crickets are composed of 70-80% protein vs beef which ranges anywhere from 17%-40%
                          </h4>
                    </div>
                  </div>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-medium-top '>
                  <div className='' uk-grid="true">
                    <div className='uk-width-1-3@m uk-width-1-1 '>
                      <img className='uk-align-center uk-margin-auto-vertical homeIcons' src='../images/icon-4.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-1 uk-margin-auto-vertical '>
                      <h4 className='uk-margin-small-top  iconParas'>
                        80% of the world already eats insects!
                          </h4>
                    </div>
                  </div>
                </div>

                <div className='uk-width-1-1 uk-align-auto-vertical uk-text-center uk-align-center homePicSpecialContainer'>
                  <hr style={this.HRstyle2} className='uk-margin-medium-bottom uk-align-center uk-margin-large-top'></hr>
                  <h1 className='homeHeader1' style={this.style2}><b>CHALLENGE THE <span style={{ color: '#EC2D2D' }}>STATUS QUO</span></b></h1>
                  <hr style={this.HRstyle2} className='uk-margin-medium-top uk-align-center uk-margin-xlarge-bottom'></hr>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div id='homeWrapper3'>
          <div className='uk-container uk-margin-xlarge-top'>
            <div className='' uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-flex-last uk-flex-first@m'>
                <img className='uk-align-center ingredientPics' src='../images/Baiobar_Website Ingredients_Honey_1.jpg'></img>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1'>
                <img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img>
                <h1 className='uk-margin-remove-top'>Made with Organic Clover Honey</h1>

              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <h1 className='uk-text-right uk-margin-remove-bottom'><img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img></h1>
                <h1 className='uk-margin-remove-top uk-text-right'>Made with Organic Almond Butter</h1>

              </div>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <img className='uk-align-center ingredientPics3' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Almond Butter_2.jpg'></img>
              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-flex-last uk-flex-first@m'>
                <img className='uk-align-center ingredientPics2' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Oats_3.jpg'></img>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1'>
                <img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img>
                <h1 className='uk-margin-remove-top'>Made with Organic GF Oats</h1>
              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <h1 className='uk-text-right uk-margin-remove-bottom'><img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img></h1>
                <h1 className='uk-margin-remove-top uk-text-right'>Made With Organic Cocoa</h1>

              </div>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <img className='uk-align-center ingredientPics3' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Cocoa_4.jpg'></img>
              </div>
            </div>
          </div>
        </div>




        <div className='uk-margin-large-top uk-margin-large-bottom'>
          <Products
            products={this.props.store.products}
            client={this.props.store.client}
            addVariantToCart={this.props.addVariantToCart}
          />
        </div>

        <div id='homeWrapper8' className='uk-margin-medium-top'>
          <div className='uk-container' id='homeNewsletterdiv'>
            <div className='' uk-grid='true'>
              <div className='uk-width-1-1 uk-align-center uk-text-center uk-margin-auto-vertical uk-margin-auto'>
                <h1 className='uk-margin-medium-top'>JOIN OUR NEWSLETTER</h1>
                <p>Subscribe to hear about our exclusive offers and latest arrivals.</p>
                <div className='uk-align-center uk-text-center uk-margin-medium-bottom'>
                  <form>
                    <fieldset className="uk-fieldset  uk-align-center uk-text-center">
                      <div className="uk-form uk-align-center uk-text-center newsLetterForm">
                        <div id="emailInput" className="uk-inline  uk-width-1-1">
                          <a onClick={this.sendNewsletter} class="uk-form-icon uk-form-icon-flip newsLetterPic" ><img src='../images/newsLetterbutton.png'></img></a>
                          <input
                            value={this.state.userEmail}
                            onChange={this.handleInputChange}
                            name='userEmail'
                            className="uk-input uk-form-large inputNewsBody"
                            type="text"
                            placeholder="Email@email.com" />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>






        <div id='homeWrapper5'>
          <div className='uk-container '>
            <div className='' uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-margin-xlarge-top'>
                <h1 className='homeHeader1' style={this.StoryStyle}>THE <br></br> <span style={{ color: '#EC2D2D' }}>BAIØ-BAR</span><br></br> STORY</h1>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 uk-margin-xlarge-top '>
                <p className=''>
                  Baiø-Bar is a woman founded and family run business that began with a desire to make an impact and spur change in society
                  and the way we think. Each member of the Baiø-Bar team in one way or another has worked to defy odds and to challenge the
                  status quo, hence our motto. We believe that insects and insect protein are the future in food and food technology, reducing
                  hunger and starvation in third world countries and sustainably preserving our environment.
                    </p>
                <p>
                  It's just an added benefit that
                  crickets are protein rich and contain nutrients important for human function. We hope you are as excited about Baiø-Bar as
                  we are, and we are excited to continue developing more tasty products for you to try!
                    </p>
              </div>
              <div className='uk-width-1-1 uk-margin-large-bottom'>
                <Link to='/OurStory'  ><a href='/OurStory'><img className='allButtons' src='../images/find-out-more-button.png'></img></a></Link>
              </div>
            </div>
          </div>
        </div>

        <Insta></Insta>


        <div className='uk-margin-large-top' id='flourWrapper7'>
          <BigHr color={'#F3CC35'}></BigHr>
          <ContactForm headerColor={'white'}></ContactForm>
        </div>

      </div>
    );
  }
}


export default Home;
