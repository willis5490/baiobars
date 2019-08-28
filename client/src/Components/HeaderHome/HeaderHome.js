import React, { Component } from 'react';

class HeaderHome extends Component {

    componentDidMount() {

    }

  style1={
    backgroundColor: '#EC2B2C',
    color:'white',
    fontSize:'20px',
    marginRight:'15px',
   paddingTop:'3px'
  }
  style2={
    height:'30px',
    marginRight:'15px',
    marginLeft:'15px'
  }
  style3={
    margin:'5px',
    color:'#EC2B2C'
  }


  // render nav
  render() {
    return (
      <div>
          <div style={this.style1}  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav id = 'header' style={this.style1} className="uk-navbar-container uk-margin" uk-navbar='true' uk-navbar="mode: click">
                  <div style={{paddingLeft:'50px'}} className="uk-navbar-left uk-visible@m ">
                      <ul className="uk-navbar-nav">
                          <li className=""><a href = "/"><img id='logo-nav' src = "../images/Cricket-Logo_Header_WHT.png" alt=''></img></a></li>
                          
                      </ul>
                  </div>
                  <div className="uk-navbar-right uk-visible@m">
                      <ul id="middlenav" style={this.style1} className="uk-navbar-nav">
                          <li className={this.props.cricket}><a style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</a></li>
                          <li className={this.props.shop}><a style={this.style1} href="/Shop">SHOP</a></li>
                          <li className={this.props.story}><a style={this.style1} href="/OurStory">OUR STROY</a></li>
                          <li className={this.props.faq}><a style={this.style1} href="/FAQ">FAQ</a></li>
                          <li className={this.props.connect}><a style={this.style1} href="/Contact">CONNECT</a></li>
                          <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                          <li className={this.props.cart}>
                            <div id='cartContainer'>
                                <p style={{color:'white'}} id='cartItemsNumber'>{0}</p>
                                </div>
                                <a id='cartPicture' style={{backgroundColor:'#EC2B2C', color:'white', fontWeight:this.props.cart, fontSize:'20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a>
                          </li>
                          <hr className="uk-divider-vertical uk-margin-small-right uk-margin-auto-vertical" style={this.style2}></hr>
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
                                          <li className="uk-nav-header">
                                              <a style={this.style1}  className="uk-offcanvas-close" uk-close>X</a>
                                              <li className={this.props.cart}>
                                                    <div id='cartContainerMobile'>
                                                        <p style={{color:'white'}} id='cartItemsNumberMobile'>{0}</p>
                                                        </div>
                                                        <a id='cartPicture' style={{backgroundColor:'#EC2B2C', color:'white', fontWeight:this.props.cart, fontSize:'20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a>
                                                </li>
                                          </li>
                                          <li style={{backgroundColor:'white'}} className="uk-nav-divider"></li>
                                          <li className=""><a style={this.style1} href="/">HOME</a></li>
                                          <li className=""><a style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</a></li>
                                          <li className=""><a style={this.style1} href="/Shop">SHOP</a></li>
                                          <li className=""><a style={this.style1} href="/OurStory">OUR STROY</a></li>
                                          <li className=""><a style={this.style1} href="/FAQ">FAQ</a></li>
                                          <li className=""><a style={this.style1} href="/Contact">CONNECT</a></li>
                                          
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


export default HeaderHome;
