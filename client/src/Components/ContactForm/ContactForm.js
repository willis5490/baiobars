import React, { Component } from 'react';
import axios from 'axios'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ContactForm extends Component {
    style3={
      paddingLeft: '20px'
    }
    style1={
      backgroundColor: 'white',
      color:'black',
      border: 'none',
      padding: '10px 20px 10px 20px',
      textAlign: 'center',
      margin: '4px 2px',
      cursor: 'pointer',
      borderRadius: '40px',
      fontWeight:'600',
      letterSpacing:'3px'
  }
  style2={
      backgroundColor: 'red',
      color:'white',
      padding:'3px',
   
  }
  stlyeInputBarBad={
    backgroundColor:'#EC2B2C',
    color:'black'
  }
  stlyeInputBarGood={
    backgroundColor:'white'
  }

  

  state = {
    name: {
      val:'',
      touched:false
    },
    email: {
      val:'',
      touched:false
    },
    subject: {
      val:'',
      touched:false
    },
    subject1:{
      val:'',
      touched:false
    },
    message: {
      val:'',
      touched:false
    }
   }

   notify = () => {
    toast.success("Your Email Has Been Sent !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError = () => {
    toast.error("You Must Fill Out All Forms Correctly !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError3 = () => {
    toast.error("You Must Give A Valid Email !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };
  notifyError2 = () => {
    toast.error("You Must Verify You Are Not A Robot !", {
      position: toast.POSITION.BOTTOM_CENTER
    });
  };

   sendEmail = event => {
    //  event.preventDefault()
     if(this.state.name.val.length < 3){
       this.notifyError()
     }else if(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.state.email.val) == false){
      this.notifyError3()
     }else if(this.state.subject.val.length < 3){
      this.notifyError()
     }else if(this.state.message.val.length < 3){
      this.notifyError()
     }
     else if(this.state.subject1.val.length < 3){
      this.notifyError()
     }
     
     else {
      axios.post("https://baiobar.herokuapp.com/sendEmail", {
        email: this.state.email.val,
         name: this.state.name.val,
         subject: this.state.subject.val,
         subject1: this.state.subject1.val,
         message: this.state.message.val
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


   };

   handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
       [name]: {
         val:value,
         touched:true
       }
       
     });
   };

   emptyFields = () => {
     this.setState({
      name: {
        val:'',
        touched:false
      },
      email: {
        val:'',
        touched:false
      },
      subject: {
        val:'',
        touched:false
      },
      subject1:{
        val:'',
        touched:false
      },
      message: {
        val:'',
        touched:false
      }
     })
   }

  // render nav
  render() {
    return (
      <div>
         <div id='homeContactSection' className=''>
                <div className='uk-container'>
                    <h1 style={{color:this.props.headerColor}} className='uk-margin-medium-top uk-margin-medium-bottom'><b>CONNECT WITH US</b></h1>
                    <div className="formDiv ">
                        <form>
                            <fieldset className="uk-fieldset ">
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-2@m  uk-width-1-1">                          
                                <input
                                value={this.state.name.val}
                                onChange={this.handleInputChange}
                                style={this.state.name.val.length < 3 && this.state.name.touched==true ? this.stlyeInputBarBad : this.stlyeInputBarGood}
                                name='name'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Name" />
                                </div>
                                
                                  <div  id='formLastName' style={this.style3} className="uk-inline uk-width-1-2@m uk-width-1-1 contactMobileAdjust">                            
                                  <input
                                  value={this.state.email.val}
                                  onChange={this.handleInputChange}
                                  style={/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(this.state.email.val) ==false && this.state.email.touched==true ? this.stlyeInputBarBad : this.stlyeInputBarGood}
                                  name='email'true
                                      className="uk-input ContactInputBody"
                                      type="text"false
                                      placeholder="Email" />
                                  </div>              
                            </div>
                            <div className="uk-margin">
                                <div id="emailInput" className="uk-inline uk-width-1-2@m uk-width-1-1">                          
                                <input
                                value={this.state.subject.val}
                                onChange={this.handleInputChange}
                                style={this.state.subject.val.length < 3 && this.state.subject.touched==true ? this.stlyeInputBarBad : this.stlyeInputBarGood}
                                name='subject'
                                    className="uk-input ContactInputBody"
                                    type="text"
                                    placeholder="Subject" />
                                </div>                            
                                <div style={this.style3}  className="uk-inline uk-width-1-2@m uk-width-1-1 contactMobileAdjust contactFormAdjust">                
                                  <input
                                  value={this.state.subject1.val}
                                  onChange={this.handleInputChange}
                                  style={this.state.subject1.val.length < 3 && this.state.subject1.touched==true ? this.stlyeInputBarBad : this.stlyeInputBarGood}
                                  name='subject1'
                                      className="uk-input ContactInputBody"
                                      type="text"
                                      placeholder="Subject" />
                                  </div>                      
                            </div>
                           

                            <div id="textInput" className="uk-margin uk-width-1-1">

                                <textarea
                                value={this.state.message.val}
                                onChange={this.handleInputChange}
                                style={this.state.message.val.length < 3 && this.state.message.touched==true ? this.stlyeInputBarBad : this.stlyeInputBarGood}
                                name='message'
                                className="uk-textarea ContactInputBody"
                                rows="5"
                                placeholder="Message">
                                </textarea>
                            </div>
                            </fieldset>
                        </form>
                        {/* <button onClick={this.sendEmail} id="send-button" type="submit" name="action" style={this.style1} className=" uk-button uk-margin-auto uk-button-default uk-margin-large-bottom ">SUBMIT<a  style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a></button> */}
                        < a className='' onClick={this.sendEmail} type="submit" name="action"><img className='SubmitButtons uk-margin-small-top uk-margin-large-bottom' src='../images/submit-button.png'></img></a>
                        </div>
                        <ToastContainer position="bottom-center" autoClose={4000} />
                </div>
            </div>
      </div>
    );
  }
}


export default ContactForm;
