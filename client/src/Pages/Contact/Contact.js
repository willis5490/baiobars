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
          <BigHr color={'#F3CC35'}></BigHr>
          <ContactForm headerColor={'white'}></ContactForm>
        </div>
      </div>
    );
  }
}


export default Contact;
