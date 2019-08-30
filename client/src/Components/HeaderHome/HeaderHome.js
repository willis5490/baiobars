import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
            <div style={this.style1} >
                <ul className="uk-nav uk-nav-default">
                    <li className="uk-nav-header">
                        <a style={this.style1} onClick={this.closeNavHandler} className="uk-offcanvas-close" uk-close>X</a>
                        <li className={this.props.cart}>
                              <div id='cartContainerMobile'>
                                  <p style={{color:'white'}} id='cartItemsNumberMobile'>{this.props.store.checkout.lineItems.length}</p>
                                  </div>
                                  <Link to="/ShoppingCart"  onClick={this.closeNavHandler}><span id='cartPicture' style={{backgroundColor:'#EC2B2C', color:'white', fontWeight:this.props.cart, fontSize:'20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
                          </li>
                    </li>
                    <li style={{backgroundColor:'white'}} className="uk-nav-divider"></li>
                    <li className=""><Link to="/"  onClick={this.closeNavHandler}><span style={this.style1} href="/">HOME</span></Link></li>
                    <li className=""><Link to="/Cricketflour"  onClick={this.closeNavHandler}><span style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</span></Link></li>
                    <li className=""><Link to="/Shop"  onClick={this.closeNavHandler}><span style={this.style1} href="/Shop">SHOP</span></Link></li>
                    <li className=""><Link to="/OurStory"  onClick={this.closeNavHandler}><span style={this.style1} href="/OurStory">OUR STROY</span></Link></li>
                    <li className=""><Link to="/FAQ"  onClick={this.closeNavHandler}><span style={this.style1} href="/FAQ">FAQ</span></Link></li>
                    <li className=""><Link to="/Contact"  onClick={this.closeNavHandler}><span style={this.style1} href="/Contact">CONNECT</span></Link></li>
                    
                </ul>
            </div>
        </div>
    </div>
      )
      const sideBarButton = (
        <Link onClick={this.openNavHandler}  id="mobileMenu" uk-icon="icon: menu; ratio: 2.5"></Link>
      )
    return (
      <div>
          <div style={this.style1}  uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
            <nav id = 'header' style={this.style1} className="uk-navbar-container uk-margin" uk-navbar='true' uk-navbar="mode: click">
                  <div style={{paddingLeft:'50px'}} className="uk-navbar-left uk-visible@m ">
                      <ul className="uk-navbar-nav">
                          <li className=""><Link to='/'><span href = "/"><img id='logo-nav' src = "../images/Cricket-Logo_Header_WHT.png" alt=''></img></span></Link></li>
                          
                      </ul>
                  </div>
                  <div className="uk-navbar-right uk-visible@m">
                      <ul id="middlenav" style={this.style1} className="uk-navbar-nav">
                          <li className={this.props.cricket}><Link to='Cricketflour'><span style={this.style1} href="/Cricketflour">CRICKET FLOUR,WAIT WHAT?</span></Link></li>
                          <li className={this.props.shop}><Link to="/Shop"><span style={this.style1} href="/Shop">SHOP</span></Link></li>
                          <li className={this.props.story}><Link to="/OurStory"><span style={this.style1} href="/OurStory">OUR STROY</span></Link></li>
                          <li className={this.props.faq}><Link to='/FAQ'><span style={this.style1} href="/FAQ">FAQ</span></Link></li>
                          <li className={this.props.connect}><Link to="/Contact"><span style={this.style1} href="/Contact">CONNECT</span></Link></li>
                          <hr className="uk-divider-vertical uk-margin-auto-vertical" style={this.style2}></hr>
                          <li className={this.props.cart}>
                            <div id='cartContainer'>
                                <p style={{color:'white'}} id='cartItemsNumber'>{this.props.store.checkout.lineItems.length}</p>
                                </div>
                                <Link to="/ShoppingCart"><span id='cartPicture' style={{backgroundColor:'#EC2B2C', color:'white', fontWeight:this.props.cart, fontSize:'20px' }} href="/ShoppingCart"><i className="fas fa-2x fa-shopping-cart uk-margin-small-right"></i> CART</span></Link>
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
                  {this.state.isVisbile ? sideBar : sideBarButton}
                         
                  </div>
                 
          </nav>
        </div>
      </div>
    );
  }
}


export default HeaderHome;
