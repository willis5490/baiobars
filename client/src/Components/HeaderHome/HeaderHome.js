import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class HeaderHome extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  //   get rid of menu if clicked outside its container
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }
  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.closeNavHandler()
    }
  }
  style9 = {
    backgroundColor: '#EC2B2C',
    color: 'white',
    fontSize: '20px',
    // paddingTop: '3px'
  }

  style1 = {
    backgroundColor: '#EC2B2C',
    color: 'white',
    fontSize: '20px',
    marginRight: '15px',
    // paddingTop: '3px'
  }
  style2 = {
    height: '30px',
    marginRight: '15px',
    marginLeft: '15px'
  }
  style3 = {
    margin: '5px',
    color: '#EC2B2C'
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
  cartNumberHandler = (numberArray) => {
    let totalItems = 0
    for (var i = 0; i <numberArray.length; i++){
      totalItems += numberArray[i].quantity      
    }
    return totalItems
  }


  // render nav
  render() {
    const sideBar = (
      //   ref for closing the navbar when clicking outside its container
      <div ref={this.setWrapperRef} className="uk-offcanvas-content">
        <div style={this.style1}  >
          <div style={this.style1} >
            <ul className="uk-nav uk-nav-default">
              <li className="uk-nav-header mobileLinksNav">
                <a style={this.style1} onClick={this.closeNavHandler} className="uk-offcanvas-close uk-hidden@s" uk-close>X</a>
                <li className={this.props.cart}>
                  <div id='cartContainerMobile'>
                    <p style={{ color: 'white' }} id='cartItemsNumberMobile'>{this.cartNumberHandler(this.props.store.checkout.lineItems)}</p>
                  </div>
                  <Link to="/ShoppingCart" onClick={this.closeNavHandler}><span id='cartPicture' style={{ backgroundColor: '#EC2B2C', color: 'white', fontWeight: this.props.cart, fontSize: '20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
                </li>
              </li>
              <li style={{ backgroundColor: 'white' }} className="uk-nav-divider"></li>
              <li className="mobileLinksNav"><Link to="/" onClick={this.closeNavHandler}><span style={this.style1} href="/">HOME</span></Link></li>
              <li className="mobileLinksNav"><Link to="/Cricketflour" onClick={this.closeNavHandler}><span style={this.style1} href="/Cricketflour">CRICKET FLOUR</span></Link></li>
              <li className="mobileLinksNav"><Link to="/Shop" onClick={this.closeNavHandler}><span style={this.style1} href="/Shop">SHOP</span></Link></li>
              <li className="mobileLinksNav"><Link to="/OurStory" onClick={this.closeNavHandler}><span style={this.style1} href="/OurStory">OUR STORY</span></Link></li>
              <li className="mobileLinksNav"><Link to="/FAQ" onClick={this.closeNavHandler}><span style={this.style1} href="/FAQ">FAQ</span></Link></li>
              <li className="mobileLinksNav"><Link to="/Contact" onClick={this.closeNavHandler}><span style={this.style1} href="/Contact">CONNECT</span></Link></li>

            </ul>
          </div>
        </div>
      </div>
    )
    const sideBarButton = (      
      <div>
        <Link to='/'><img id='logo-nav-mobile' src="../images/Cricket-Logo_Header_WHT.png"></img></Link>
      <Link onClick={this.openNavHandler}  id="mobileMenu2" uk-icon="icon: menu; ratio: 2.5"></Link>
      </div>
      
    )
    return (
      <div>
        <div style={{ backgroundColor: '#EC2B2C' }}>
          <div style={this.style9} uk-sticky="sel-target: .uk-navbar-container;  cls-active: uk-navbar-sticky">
            <nav id='header' style={this.style1} className="uk-navbar-container " uk-navbar='true' uk-navbar="mode: click">
              <div style={{ paddingLeft: '50px' }} className="uk-navbar-left uk-visible@l ">
                <ul className="uk-navbar-nav">
                  <li className=""><Link to='/'><span href="/"><img id='logo-nav' src="../images/Cricket-Logo_Header_WHT.png" alt=''></img></span></Link></li>

                </ul>
              </div>
              <div className="uk-navbar-right uk-visible@l">
                <ul id="middlenav" style={this.style1} className="uk-navbar-nav">
                  <li className={this.props.cricket}><Link to='Cricketflour'><span style={this.style1} href="/Cricketflour">CRICKET FLOUR</span></Link></li>
                  <li className={this.props.shop}><Link to="/Shop"><span style={this.style1} href="/Shop">SHOP</span></Link></li>
                  <li className={this.props.story}><Link to="/OurStory"><span style={this.style1} href="/OurStory">OUR STROY</span></Link></li>
                  <li className={this.props.faq}><Link to='/FAQ'><span style={this.style1} href="/FAQ">FAQ</span></Link></li>
                  <li className={this.props.connect}><Link to="/Contact"><span style={this.style1} href="/Contact">CONNECT</span></Link></li>
                  <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                  <li className={this.props.cart}>
                    <div className='cartContainer'>
                      <p style={{ color: 'white' }} className='cartItemsNumber'>{this.cartNumberHandler(this.props.store.checkout.lineItems)}</p>
                    </div>
                    <Link to="/ShoppingCart"><span className='cartPicture' style={{ backgroundColor: '#EC2B2C', color: 'white', fontWeight: this.props.cart, fontSize: '20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
                  </li>
                  <hr className="uk-divider-vertical uk-margin-small-right uk-margin-auto-vertical" style={this.style2}></hr>
                  <a target='_blank' href="https://twitter.com/bar_baio" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="twitter"></a>
                  <a target='_blank' href="https://www.instagram.com/baiobarprotein/" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="instagram"></a>
                  <a target='_blank' href="https://business.facebook.com/baiobar/?ref=your_pages" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="facebook"></a>
                  <a target='_blank' href="https://www.linkedin.com/company/baio-bar/about/?viewAsMember=true" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="linkedin"></a>
                  <a target='_blank' href="https://www.pinterest.com/baiobar/" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="pinterest"></a>
                </ul>
              </div>

              {/* mobile view */}
              <div className="uk-hidden@l">
                {this.state.isVisbile ? sideBar : sideBarButton}

              </div>

            </nav>
                <nav style={{backgroundColor:'black', width:'100%'}} class="uk-navbar-container " uk-navbar='true'>            
                  <div class="uk-navbar-center uk-margin-small-top uk-margin-small-bottom">
                    <h5 style={{color:'white'}} className='uk-text-center uk-margin-auto-vertical '>* FREE SHIPPING ON ORDERS OVER <span style={{color:'#EC2B2C'}}>$60 *</span></h5>
                  </div>                  
              </nav>
          </div>
        </div>
        
      </div>
    );
  }
}


export default HeaderHome;
