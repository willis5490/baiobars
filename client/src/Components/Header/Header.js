import React, { Component } from 'react';

class Header extends Component {
    tempstyle={
        backgroundColor: 'white',
        color:'black',
        fontSize:'10px',
        marginRight:'15px'
      }
  style1={
    backgroundColor: 'white',
    color:'black',
    fontSize:'20px',
    marginRight:'15px',
    paddingTop:'3px'
  }
  style2={
    height:'30px',
  backgroundColor:'black',
     marginRight:'15px',
    marginLeft:'15px',
    borderLeft:'1px solid black'
    
  }
  style4={
    height:'30px',
  backgroundColor:'black',
     marginRight:'15px',
    marginLeft:'15px',
    borderLeft:'2px solid black'
    
  }
  style3={
    margin:'5px',
    backgroundColor: 'black',
    color:'white'
  }

  // render nav
  render() {
    console.log(this.props)
    return (
      <div>
        <div style={this.style1}  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav id = 'header' style={this.style1} className="uk-navbar-container uk-margin" uk-navbar='true' uk-navbar="mode: click">
                  <div style={{paddingLeft:'50px'}} className="uk-navbar-left uk-visible@m ">
                      <ul className="uk-navbar-nav">
                          <li className=""><a href = "/"><img id='logo-nav' src = "../images/Cricket-Logo_Header_BLK.png" alt=''></img></a></li>                          
                          
                      </ul>
                  </div>
                  <div className="uk-navbar-right uk-visible@m">
                      <ul id="middlenav" style={{backgroundColor:'white', color:'black'}} className="uk-navbar-nav">
                          <li className={this.props.cricket}><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.cricketF, fontSize:'20px', marginRight:'15px' }}  href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</a></li>
                          <li className='uk-active'><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.shop, fontSize:'20px', marginRight:'15px' }} href="/Shop">SHOP</a></li>
                          <li className={this.props.story}><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.story, fontSize:'20px', marginRight:'15px' }} href="/OurStory">OUR STORY</a></li>
                          <li className={this.props.faq}><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.faq, fontSize:'20px', marginRight:'15px' }} href="/FAQ">FAQ</a></li>
                          <li className={this.props.connect}><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.connect, fontSize:'20px', marginRight:'15px' }} href="/Contact">CONNECT</a></li>
                          <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                          <li className={this.props.cart}>
                            <div id='cartContainer'>
                                <p id='cartItemsNumber'>{this.props.store.checkout.lineItems.length}</p>
                                </div>
                                <a id='cartPicture' style={{backgroundColor:'white', color:'black', fontSize:'20px', fontWeight:this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a>
                          </li>
                          <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style4}></hr>
                          <a target='_blank' href="" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="twitter"></a>
                          <a target='_blank' href="https://www.instagram.com/baiobarprotein/" className="uk-icon-button uk-margin-auto-vertical"  style={this.style3} uk-icon="instagram"></a>
                          <a target='_blank' href="" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="facebook"></a>
                          <a target='_blank' href="" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="youtube"></a>
                      </ul>
                  </div>

                  {/* mobile view */}
                  <div  className="uk-hidden@m">
                      <a   id="mobileMenu" uk-icon="icon: menu; ratio: 2.5" uk-toggle="target: #offcanvas-nav-primary"></a>
                          <div  className="uk-offcanvas-content">
                              <div style={this.style1}  id="offcanvas-nav-primary" uk-offcanvas="overlay: true">
                                  <div style={this.style1}  className="uk-offcanvas-bar">
                                      <ul className="uk-nav uk-nav-default">
                                          <li className="uk-nav-header ">
                                              <a style={this.style1}  className="uk-offcanvas-close" uk-close>X</a>
                                              <li className={this.props.cart}>
                                                    <div id='cartContainerMobile'>
                                                        <p style={{color:'black'}} id='cartItemsNumberMobile'>{this.props.store.checkout.lineItems.length}</p>
                                                        </div>
                                                        <a id='cartPicture' style={{backgroundColor:'white', color:'black', fontSize:'20px', fontWeight:this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a>
                                                </li>
                                          </li>
                                          <li style={{backgroundColor:'black'}} className="uk-nav-divider"></li>
                                          <li className=""><a style={this.style1} href="/">HOME</a></li>
                                          <li className=""><a style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</a></li>
                                          <li className=""><a style={this.style1} href="/Shop">SHOP</a></li>
                                          <li className=""><a style={this.style1} href="/OurStory">OUR STORY</a></li>
                                          <li className=""><a style={this.style1} href="/FAQ">FAQ</a></li>
                                          <li className=""><a style={this.style1} href="/Contact">CONNECT</a></li>
                                          <li className=""><a style={this.tempstyle} href="/Shoppingcheckout">checkout(temp)</a></li>
                                          <li className=""><a style={this.tempstyle} href="/ShopProduct">shop product(temp)</a></li>
                                          
                                      </ul>
                                  </div>
                              </div>
                          </div>
                  </div>
                 
          </nav>
        </div>
      </div>
    );
  }
}


export default Header;
