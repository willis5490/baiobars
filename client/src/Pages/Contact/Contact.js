import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import ContactForm from '../../Components/ContactForm/ContactForm.js'
import BigHr from '../../Components/BigHR/BigHr.js'
class Contact extends Component {

  // render nav
  render() {
    return (
      <div>
        <Header {...this.props} connect={900}></Header>
        <div id='contactPic'></div>
        <div id='contactPage'>
          <div className='uk-container'>
          <h4 style={{color:'white'}} className=' uk-margin-large-top uk-text-center'>
            "We would love to hear from you. Be it product feedback or just sharing a tall tale from your adventures with the bar. Also contact the Baio-Bar team if you would like us to sponsor any of your events or become an ambassador for the brand."
          </h4>
          </div>
          <BigHr color={'#F3CC35'}></BigHr>
          <ContactForm headerColor={'white'}></ContactForm>
        </div>
      </div>
    );
  }
}


export default Contact;
