import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Button from '../../Components/BaioBarButton/BaioBarButton.js'
import ContactForm from '../../Components/ContactForm/ContactForm.js'
import BigHr from '../../Components/BigHR/BigHr.js'
import Insta from '../../Components/Instagram/Instagram.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Cricketflour extends Component {

    headerStyle={
      fontWeight:'1000',
      fontSize:'100px'
    }
    headerStyle2={
      fontWeight:'1000',
      fontSize:'100px',
      color:'red',
      marginTop:'-20px'
    }

    
    HRstyle={
      borderTop: '4px solid white',
        width: '160px',
        backroundColor:'white',
        marginTop:'80px'
    }
    HRstyle2={
      borderTop: '4px solid white',
        width: '160px',
        backroundColor:'white',
        marginBottom:'50px',
        marginTop:'50px'
    }
    

    style2={
      fontSize:'70px',
      fontWeight:'1000',
      color:'white'
    }
  // render nav
  render() {
    return (
      <div>
        <Header {...this.props } size={'30px'} cricketF={900}></Header>

        <div className='uk-margin-xlarge-bottom uk-margin-large-top' id='flourWrapper1'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1'>
                    <h4>
                      Welcome to Baio-Bar! At Baio-Bar we hope to provide you with a light,
                      delicious, high protein packed bar for both pre and post workout, as
                      well as just a snack throughout the day to get your protein on the go.
                      What makes us special you might ask (besides the fact that we use
                      crickets as the source for our protein)? We are a woman founded,
                      family started, company created for one purpose! (Well, maybe a
                      few, but here's the big one) Challenging the Status Quo - while
                      also actively pursuing ways to protect and preserve our environment.
                      What we want to do is blast open the doors on cricket derived
                      protein, and show others there's nothing to be afraid of! We
                      (nor our bars) bite! We'll leave that to you and the bar! 
                    </h4>
                    <h4>
                    For more frequently asked questions, take a look at our <Link to='/FAQ'><a href='/FAQ' className='crickFlourMainTextLinks'>FAQ </a></Link>
                     where you can find out what so many others are already asking! If you
                      can't find the answers you're looking for there, you're more than
                       welcome to <Link to='/Contact'><a href='/Contact' className='crickFlourMainTextLinks'>Contact Us </a></Link> directly! 
                    </h4>
                </div>
              </div>
            </div>
        </div>

        <div className='uk-margin-xlarge-top' id='flourWrapper2'>
            <div className='uk-container'>
              <div className='uk-grid-match' uk-grid='true'>
                <div className=' uk-width-1-2@m uk-width-1-1 uk-margin-auto-vertical'>
                  <div  uk-grid='true'>
                    <div className='uk-width-1-3@m uk-width-1-2@m uk-width-1-1 uk-margin-auto-vertical'>
                        <img  className='uk-align-center flourIcons' src='../images/icon-1.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical '>
                      <h4 className='cricketFLourH4 ' style={{marginLeft:'-30px'}}>
                      Crickets contain essential Vitamin and Minerals Iron and Vitamin B12
                      </h4>
                    </div>
                    <div className='uk-width-1-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical '>
                        <img className='uk-align-center flourIcons uk-margin-medium-top@m uk-margin-small-top' src='../images/icon-2.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical'>
                      <h4 className='uk-margin-medium-top@m uk-margin-small-top cricketFLourH4' style={{marginLeft:'-30px'}}>
                      Roughly 80% less water is used to produce the same amount of protein in crickets as bovine
                      </h4>
                    </div>
                    <div className='uk-width-1-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical'>
                        <img className='uk-align-center flourIcons uk-margin-medium-top@m uk-margin-small-top' src='../images/icon-3.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical'>
                      <h4 className='uk-margin-medium-top@muk-margin-small-top cricketFLourH4' style={{marginLeft:'-30px'}}>
                      Crickets are composed of 70-80% protein vs beef which ranges anywhere from 17%-40%
                      </h4>
                    </div >
                    <div className='uk-width-1-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical'>
                        <img className='uk-align-center flourIcons uk-margin-medium-top@m uk-margin-small-top' src='../images/icon-4.png'></img>
                    </div>
                    <div className='uk-width-2-3@m uk-width-1-2@m  uk-width-1-1 uk-margin-auto-vertical'>
                      <h4 className='uk-margin-medium-top@m uk-margin-small-top cricketFLourH4' style={{marginLeft:'-30px'}}>
                      80% of the world already eats insects!
                      </h4>
                    </div>
                  </div>
                </div>
              <div className='uk-width-1-2@m uk-width-1-1'>
                <img  className='uk-margin-medium-bottom cricketFlourTopPics' src='../images/Baiobar_Website_Wait What_Image_1.jpg'></img>
                <img  className='cricketFlourTopPics'  src='../images/Baiobar_Website_Wait What_Image_2.jpg'></img>
              </div>
              </div>
            </div>
        </div>

        <div className='uk-margin-large-top' id='flourWrapper3'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1 uk-align-auto-vertical uk-text-center '>
                    <hr style={this.HRstyle} className='uk-align-center '></hr>
                    <h1 className='homeHeader1' style={this.style2}>CHALLENGE THE <span style={{color:'red'}}>STATUS QUO</span></h1>
                    <hr style={this.HRstyle2} className=' uk-align-center '></hr>
                </div>

              </div>
            </div>
        </div>

           
           <div id='homeWrapper3'>
          <div className='uk-container uk-margin-xlarge-top'>
            <div className='' uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-flex-last uk-flex-first@m'>
                <img className='uk-align-center ingredientPics' src='../images/Baiobar_Website Ingredients_Honey_1.jpg'></img>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1'>
                <img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img>
                <h1 className='uk-margin-remove-top'>Made with Organic Clover Honey</h1>
              
              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <h1 className='uk-text-right uk-margin-remove-bottom'><img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img></h1>
                <h1 className='uk-margin-remove-top uk-text-right'>Made with Organic Almond Butter</h1>
                
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <img className='uk-align-center ingredientPics3' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Almond Butter_2.jpg'></img>
              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 uk-flex-last uk-flex-first@m'>
                <img className='uk-align-center ingredientPics2' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Oats_3.jpg'></img>
              </div>
              <div className='uk-width-1-2@m uk-width-1-1'>
                <img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img>
                <h1 className='uk-margin-remove-top'>Made with Organic GF Oats</h1>               
              </div>
            </div>
            <div uk-grid='true'>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <h1 className='uk-text-right uk-margin-remove-bottom'><img className='ingredientLogoText' src='../images/Baiobar_Logo_Words_GRAY.png'></img></h1>
                <h1 className='uk-margin-remove-top uk-text-right'>Made With Organic Cocoa</h1>
                
              </div>
              <div className='uk-width-1-2@m uk-width-1-1 '>
                <img className='uk-align-center ingredientPics3' style={{ marginTop: '' }} src='../images/Baiobar_Website Ingredients_Cocoa_4.jpg'></img>
              </div>
            </div>
          </div>
        </div>

        

        <div className='uk-margin-large-top' id='flourWrapper5'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1'>
                  <h1 className='uk-margin-large-top uk-margin-medium-bottom  uk-text-center'>SHORT FAQ SECTION</h1>
                  <div className='uk-align-center uk-text-center uk-margin-large-bottom'>
                  <Link to='/FAQ'><Button  Text={'Click here for FAQ section'} Href={'/FAQ'}></Button></Link>
                  </div>

                </div>
              </div>
            </div>
        </div>

         <Insta></Insta>

        <div className='uk-margin-large-top' id='flourWrapper7'>
            <BigHr  color={'#F3CC35'}></BigHr>
            <ContactForm headerColor={'white'}></ContactForm>
        </div>
      </div>
    );
  }
}


export default Cricketflour;
