import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

  state = {
      isVisbile: false
  }

  openNavHandler = () => {
    this.setState({
        isVisbile: true
    })
  }
  closeNavHandler = () => {
    this.setState({
        isVisbile: false
    })
}

  // render nav
  render() {

    const sideBar = (
        <div  className="uk-offcanvas-content">
                              <div style={this.style1}  >
                                  <div style={this.style1}  >
                                      <ul className="uk-nav uk-nav-default">
                                          <li className="uk-nav-header ">
                                              <Link style={this.style1} onClick={this.closeNavHandler}  className="uk-offcanvas-close">X</Link>
                                              <li className={this.props.cart}>
                                                    <div id='cartContainerMobile'>
                                                        <p style={{color:'black'}} id='cartItemsNumberMobile'>{this.props.store.checkout.lineItems.length}</p>
                                                        </div>
                                                        <Link to="/ShoppingCart" onClick={this.closeNavHandler}><span id='cartPicture' style={{backgroundColor:'white', color:'black', fontSize:'20px', fontWeight:this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
                                                </li>
                                          </li>
                                          <li style={{backgroundColor:'black'}} className="uk-nav-divider"></li>
                                          <li className=""><Link to="/" onClick={this.closeNavHandler}><span style={this.style1} href="/">HOME</span></Link></li>
                                          <li className=""><Link to="/Cricketflour" onClick={this.closeNavHandler}><span style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</span></Link></li>
                                          <li className=""><Link to="/Shop" onClick={this.closeNavHandler}><a style={this.style1} href="/Shop">SHOP</a></Link></li>
                                          <li className=""><Link to="/OurStory" onClick={this.closeNavHandler}><a style={this.style1} href="/OurStory">OUR STORY</a></Link></li>
                                          <li className=""><Link to="/FAQ" onClick={this.closeNavHandler}><a style={this.style1} href="/FAQ">FAQ</a></Link></li>
                                          <li className=""><Link to="/Contact" onClick={this.closeNavHandler}><a style={this.style1} href="/Contact">CONNECT</a></Link></li>                                      
                                          <li className=""><Link to="/ShopProduct" onClick={this.closeNavHandler}><a style={this.tempstyle} href="/ShopProduct">shop product(temp)</a></Link></li>
                                          
                                      </ul>
                                  </div>
                              </div>
                          </div>
    )

    const sideBarButton = (
        <Link  onClick={this.openNavHandler} id="mobileMenu" uk-icon="icon: menu; ratio: 2.5"></Link>
    )
    console.log(this.props)
    return (
      <div>
        <div style={this.style1}  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav id = 'header' style={this.style1} className="uk-navbar-container uk-margin" uk-navbar='true' uk-navbar="mode: click">
                  <div style={{paddingLeft:'50px'}} className="uk-navbar-left uk-visible@m ">
                      <ul className="uk-navbar-nav">
                          <li className=""><Link to='/' ><img id='logo-nav' src = "../images/Cricket-Logo_Header_BLK.png" alt=''></img></Link></li>                          
                          
                      </ul>
                  </div>
                  <div className="uk-navbar-right uk-visible@m">
                      <ul id="middlenav" style={{backgroundColor:'white', color:'black'}} className="uk-navbar-nav">
                      <li ><Link to="/ShopProduct" onClick={this.closeNavHandler}><span style={{backgroundColor:'white', color:'black', fontWeight:this.props.cricketF, fontSize:'20px', marginRight:'15px' }}  >PP</span></Link></li>
                          <li className={this.props.cricket}><Link to="/Cricketflour"><span style={{backgroundColor:'white', color:'black', fontWeight:this.props.cricketF, fontSize:'20px', marginRight:'15px' }}  href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</span></Link></li>
                          <li className='uk-active'><Link to="/Shop"><span style={{backgroundColor:'white', color:'black', fontWeight:this.props.shop, fontSize:'20px', marginRight:'15px' }} href="/Shop">SHOP</span></Link></li>
                          <li className={this.props.story}><Link to="/OurStory"><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.story, fontSize:'20px', marginRight:'15px' }} href="/OurStory">OUR STORY</a></Link></li>
                          <li className={this.props.faq}><Link to="/FAQ"><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.faq, fontSize:'20px', marginRight:'15px' }} href="/FAQ">FAQ</a></Link></li>
                          <li className={this.props.connect}><Link to="/Contact"><a style={{backgroundColor:'white', color:'black', fontWeight:this.props.connect, fontSize:'20px', marginRight:'15px' }} href="/Contact">CONNECT</a></Link></li>
                          <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                          <li className={this.props.cart}>
                            <div id='cartContainer'>
                                <p id='cartItemsNumber'>{this.props.store.checkout.lineItems.length}</p>
                                </div>
                                <Link to="/ShoppingCart"><a id='cartPicture' style={{backgroundColor:'white', color:'black', fontSize:'20px', fontWeight:this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a></Link>
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
                        
                          {this.state.isVisbile ? sideBar : sideBarButton}
                  </div>

                  
                 
          </nav>
        </div>
      </div>
    );
  }
}


export default Header;
