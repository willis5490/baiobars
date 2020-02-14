import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends Component {
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
  tempstyle = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '10px',
    marginRight: '15px'
  }
  style1 = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '20px',
    marginRight: '15px',
    paddingTop: '3px'
  }
  style9 = {
    backgroundColor: 'white',
    color: 'black',
    fontSize: '20px',

    paddingTop: '3px'
  }
  style2 = {
    height: '30px',
    backgroundColor: 'black',
    marginRight: '15px',
    marginLeft: '15px',
    borderLeft: '1px solid black'

  }
  style4 = {
    height: '30px',
    backgroundColor: 'black',
    marginRight: '15px',
    marginLeft: '15px',
    borderLeft: '2px solid black'

  }
  style3 = {
    margin: '5px',
    backgroundColor: 'black',
    color: 'white'
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
          <div style={this.style1}  >
            <ul className="uk-nav uk-nav-default">
              <li className="uk-nav-header mobileLinksNav">
                <Link style={this.style1} onClick={this.closeNavHandler} className="uk-offcanvas-close uk-hidden@s">X</Link>
                <li  className={this.props.cart}>
                  <div id='cartContainerMobile'>
                      <p style={{ color: 'black' }} id='cartItemsNumberMobile'>{this.cartNumberHandler(this.props.store.checkout.lineItems)}</p>
                  </div>
                  <Link to="/ShoppingCart" onClick={this.closeNavHandler}><span id='cartPicture' style={{ backgroundColor: 'white', color: 'black', fontSize: '20px', fontWeight: this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
                </li>
              </li>
              <li style={{ backgroundColor: 'black' }} className="uk-nav-divider"></li>
              <li className="mobileLinksNav"><Link to="/" onClick={this.closeNavHandler}><span style={this.style1} href="/">HOME</span></Link></li>
              <li className="mobileLinksNav"><Link to="/Cricketflour" onClick={this.closeNavHandler}><span style={this.style1} href="/Cricketflour">CRICKET FLOUR</span></Link></li>
              <li className="mobileLinksNav"><Link to="/Shop" onClick={this.closeNavHandler}><a style={this.style1} href="/Shop">SHOP</a></Link></li>
              <li className="mobileLinksNav"><Link to="/OurStory" onClick={this.closeNavHandler}><a style={this.style1} href="/OurStory">OUR STORY</a></Link></li>
              <li className="mobileLinksNav"><Link to="/FAQ" onClick={this.closeNavHandler}><a style={this.style1} href="/FAQ">FAQ</a></Link></li>
              <li className="mobileLinksNav"><Link to="/Contact" onClick={this.closeNavHandler}><a style={this.style1} href="/Contact">CONNECT</a></Link></li>          

            </ul>
          </div>
        </div>
      </div>
    )

    const sideBarButton = (
      <div>
      <Link to='/'><img id='logo-nav-mobile' src="../images/Baiobar_Logo_Words_BLK.png"></img></Link>
    <Link onClick={this.openNavHandler}  id="mobileMenu2" uk-icon="icon: menu; ratio: 2.5"></Link>
    </div>
    )
    // console.log(this.props)
    return (
      <div>
        <div style={this.style9} uk-sticky="sel-target: .uk-navbar-container;  cls-active: uk-navbar-sticky">
          <nav id='header' style={this.style1} className="uk-navbar-container " uk-navbar='true' uk-navbar="mode: click">
            <div style={{ paddingLeft: '50px' }} className="uk-navbar-left uk-visible@l ">
              <ul className="uk-navbar-nav">
                <li className=""><Link to='/' ><img id='logo-nav' src="../images/Baiobar_Logo_Words_BLK.png" alt=''></img></Link></li>

              </ul>
            </div>
            <div className="uk-navbar-right uk-visible@l">
              <ul id="middlenav" style={{ backgroundColor: 'white', color: 'black' }} className="uk-navbar-nav">
                <li className={this.props.cricket}><Link to="/Cricketflour"><span style={{ backgroundColor: 'white', color: 'black', fontWeight: this.props.cricketF, fontSize: '20px', marginRight: '15px' }} href="/Cricketflour">CRICKET FLOUR</span></Link></li>
                <li className='uk-active'><Link to="/Shop"><span style={{ backgroundColor: 'white', color: 'black', fontWeight: this.props.shop, fontSize: '20px', marginRight: '15px' }} href="/Shop">SHOP</span></Link></li>
                <li className={this.props.story}><Link to="/OurStory"><a style={{ backgroundColor: 'white', color: 'black', fontWeight: this.props.story, fontSize: '20px', marginRight: '15px' }} href="/OurStory">OUR STORY</a></Link></li>
                <li className={this.props.faq}><Link to="/FAQ"><a style={{ backgroundColor: 'white', color: 'black', fontWeight: this.props.faq, fontSize: '20px', marginRight: '15px' }} href="/FAQ">FAQ</a></Link></li>
                <li className={this.props.connect}><Link to="/Contact"><a style={{ backgroundColor: 'white', color: 'black', fontWeight: this.props.connect, fontSize: '20px', marginRight: '15px' }} href="/Contact">CONNECT</a></Link></li>
                <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                <li className={this.props.cart}>
                  <div className='cartContainer'>
                    <p className='cartItemsNumber'>{this.cartNumberHandler(this.props.store.checkout.lineItems)}</p>
                  </div>
                  <Link to="/ShoppingCart"><a className='cartPicture' style={{ backgroundColor: 'white', color: 'black', fontSize: '20px', fontWeight: this.props.cart }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</a></Link>
                </li>
                <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style4}></hr>
                <a target='_blank' href="https://twitter.com/baio_bar" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="twitter"></a>
                <a target='_blank' href="https://www.instagram.com/baiobarprotein/" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="instagram"></a>
                <a target='_blank' href="https://business.facebook.com/baiobar/?ref=your_pages " className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="facebook"></a>
                <a target='_blank' href="https://www.linkedin.com/company/baio-bar/about/?viewAsMember=true" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="linkedin"></a>
                <a target='_blank' href="https://www.pinterest.com/baiobar/" className="uk-icon-button uk-margin-auto-vertical" style={this.style3} uk-icon="pinterest"></a>
              </ul>
            </div>

            {/* mobile view */}
            <div className="uk-hidden@l">

              {this.state.isVisbile ? sideBar : sideBarButton}
            </div>



          </nav>
          <nav id="secondNAvBar" style={{ backgroundColor: 'black', width:'100%' }} class="uk-navbar-container " uk-navbar='true'>
            <div class="uk-navbar-center uk-margin-small-top uk-margin-small-bottom">
              <h5 style={{ color: 'white' }} className='uk-text-center uk-margin-auto-vertical secondBorderText'>* FREE SHIPPING ON ORDERS OVER <span style={{ color: '#EC2B2C' }}>$60 *</span></h5>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}


export default Header;
