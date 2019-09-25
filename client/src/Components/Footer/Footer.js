import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Footer extends Component {
style1={
  borderTop: '2px solid black',
  width: '100%',
  // marginLeft:'40px',
  marginTop:'0px'
}
style2={
  margin:'5px',
  color:'white',
  backgroundColor: 'black'
}
style3={
  margin:'5px',
  color:'black',
  fontSize:'18px'
}
style4={
  width:'35px',
  height:'30px'
}

style6={
  borderTop: '2px solid black',
  width: '100%',
  marginLeft:'30px',
  marginTop: '20px',
  marginBottom:'10px'
}
  // render nav
  render() {
    return (
      <div>
        <div className='footerWrapper'>
          <div className='uk-container uk-margin-medium-top'>
            <div className='uk-visible@m' uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-align-center uk-margin-auto-vertical'>
               <Link to='/'><a href='/'><img className='footerLogo ' src='../images/Cricket-Logo_Header_BLK.png'></img></a></Link>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1  uk-margin-auto-vertical'>
                <div className='uk-align-right@m uk-align-center'>
                    <div className='uk-margin-small-bottom uk-align-right@m uk-align-center footerIconWrpper '>
                    <a target='_blank' href='https://twitter.com/bar_baio'><span style={this.style2}  class="uk-icon-button footerIcons" uk-icon="icon:twitter"></span></a>
                    <a target='_blank' href='https://www.instagram.com/baiobarprotein/'><span style={this.style2}  class="uk-icon-button footerIcons " uk-icon="icon:instagram"></span></a>
                    <a target='_blank' href='https://business.facebook.com/baiobar/?ref=your_pages '><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:facebook"></span></a> 
                    <a target='_blank' href='https://www.linkedin.com/company/baio-bar/about/?viewAsMember=true'><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:linkedin"></span></a> 
                    <a target='_blank' href='https://www.pinterest.com/baiobar/'><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:pinterest"></span></a>
                    </div>
                    <br></br>
                    <div className='uk-margin-remove-bottom uk-align-right@m uk-align-center uk-visible@m' >
                    <ul class="uk-comment-meta uk-subnav uk-subnav-divider   uk-margin-remove-top bottomFooterInfo">
                        <li style={this.style3} className='letterspaced '>877-872-5176</li>
                        <li style={this.style3} className='letterspaced '>ariana.frangos@baiobar.com</li>
                    </ul>
                    </div>
                </div>
              </div>
              <div className='uk-width-1-1 uk-margin-remove-top'>
                <hr style={this.style1} className=''></hr>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 uk-margin-auto-vertical'>
              <p id='FooterC' className='uk-margin-medium-top uk-margin-medium-bottom'><b>© 2019. BaioBar.com</b></p>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 uk-margin-auto-vertical'>
                <div className='uk-align-right uk-'>
                    <div className='uk-margin-small-bottom uk-align-right footerIconWrpper '>
                        <img className='footerPaymentPic' src='../images/Forms Of Payment Image.png'></img>                        
                    </div>
            
                </div>
              </div>
            </div>

            {/* MOBILE */}

            <div className='uk-hidden@m' uk-grid='true'>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-margin-auto '>          
                <Link to='/'><img className='footerLogo uk-align-center uk-margin-small-bottom' src='../images/Cricket-Logo_Header_BLK.png'></img></Link>
              </div>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-text-center uk-margin-auto uk-margin-small-top'>
                  <div className=' uk-align-center footerIconWrpper '>
                    <a  target='_blank' href='https://twitter.com/bar_baio'><span style={this.style2}  class="uk-icon-button footerIcons" uk-icon="icon:twitter"></span></a>
                    <a  target='_blank' href='https://www.instagram.com/baiobarprotein/'><span style={this.style2}  class="uk-icon-button footerIcons " uk-icon="icon:instagram"></span></a>
                    <a  target='_blank' href='https://business.facebook.com/baiobar/?ref=your_pages '><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:facebook"></span></a> 
                    <a  target='_blank' href='https://www.linkedin.com/company/baio-bar/about/?viewAsMember=true'><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:linkedin"></span></a>
                    <a  target='_blank' href='https://www.pinterest.com/baiobar/'><span style={this.style2} class="uk-icon-button footerIcons" uk-icon="icon:pinterest"></span></a> 
                  </div>
              </div>
              <div className='uk-width-1-1 uk-margin-remove-top'>
                  <div className='uk-margin-small-top  uk-align-center uk-text-center '>
                   <a className='uk-margin-remove-bottom' href="tel:877-872-5176">877-872-5176</a>
                  </div>
              </div>
              <div className='uk-width-1-1  uk-margin-remove-top uk-margin-remove-bottom'>
                  <div className='uk-margin-small-top uk-align-center uk-margin-remove-bottom uk-text-center '>
                    <a className='uk-margin-remove-top  uk-margin-small-bottom'>ariana.frangos@baiobar.com</a>
                  </div>
              </div>
              <hr style={this.style6} className=''></hr>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-margin-auto '>
                  <div className='uk-margin-small-top uk-margin-small-bottom uk-align-center uk-text-center '>
                    <p id='FooterC' className=' uk-margin-small-bottom uk-margin-small-top'><b>© 2019. BaioBar.com</b></p>
                  </div>
              </div>
              <div className='uk-width-1-1 uk-margin-auto-vertical uk-margin-auto '>
                  <div className='uk-margin-small-top uk-margin-small-bottom uk-align-center uk-text-center '>
                    <img className='footerPaymentPic' src='../images/Forms Of Payment Image.png'></img>  
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Footer;
