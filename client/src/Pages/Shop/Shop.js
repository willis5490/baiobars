import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Newsletter from '../../Components/Newsletter/Newsletter'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from '../../Components/Shopify/Products'


class Shop extends Component {
  homeCardStyle={
    border:'2px solid grey'
  }
  HRstyle3={
    borderTop: '2px solid grey',
      width: '100px',
      marginTop:'0px'
     
  }


  // render nav
  render() {
    console.log(this.props)
    return (
      <div>
        <Header {...this.props} shop={900} ></Header>

        <div id='shopMainHeaderPic' style={{width:'100%', height:'900px', }}></div>

        
       {/* <div id='homeWrapper4' className='uk-margin-xlarge-top'>
          <div className='uk-container'>
            <div className='' uk-grid='true'>
              <div style={{padding:'50px'}} className='uk-width-1-3@m uk-width-1-1 uk-text-center productCardsMobile'>
                <div style={this.homeCardStyle} id='productCards' className='uk-card'>
                  <img className='uk-text-center uk-align-center uk-margin-small-top' src='https://via.placeholder.com/200x250'></img>
                  <h2 className='uk-margin-small-bottom'>Product One</h2>
                  <hr style={this.HRstyle3} className='uk-align-center uk-margin-remove-top uk-margin-small-bottom'></hr>
                  <div>
                  <p className='uk-margin-remove-top'><b>Starting at $19</b><span  style={{fontSize:'10px', verticalAlign:'30%'}}><b>.95</b></span></p>
                  </div>
                  <div id='product1Div' className=''>
                    <BaioButton Text={'BUY NOW'} Href={'/ShopProduct'} customStyle={{marginTop:'200px', marginBottom:'200px'}}></BaioButton>
                  </div>
                  <div id='homeProductBadge' style={{width:'80px',height:'50px', backgroundColor:'black', color:'white'}}>
                    <p className='uk-margin-small-top'><b>NEW!</b></p>
                  </div>
                </div>
              </div>
              <div style={{padding:'50px'}}  className='uk-width-1-3@m uk-width-1-1 uk-text-center productCardsMobile'>
                <div style={this.homeCardStyle} id='productCards' className='uk-card'>
                    <img className='uk-text-center uk-align-center uk-margin-small-top' src='https://via.placeholder.com/200x250'></img>
                    <h2 className='uk-margin-small-bottom'>Product One</h2>
                    <hr style={this.HRstyle3} className='uk-align-center uk-margin-remove-top uk-margin-small-bottom'></hr>
                    <div>
                    <p className='uk-margin-remove-top'><b>Starting at $19</b><span  style={{fontSize:'10px', verticalAlign:'30%'}}><b>.95</b></span></p>
                    </div>
                    <div id='product1Div' className=''>
                      <BaioButton Text={'BUY NOW'} Href={'/ShopProduct'} customStyle={{marginTop:'200px', marginBottom:'200px'}}></BaioButton>
                    </div>
                    <div id='homeProductBadge' style={{width:'80px',height:'50px', backgroundColor:'black', color:'white'}}>
                      <p className='uk-margin-small-top'><b>NEW!</b></p>
                    </div>
                  </div>
              </div>
              <div style={{padding:'50px'}}  className='uk-width-1-3@m uk-width-1-1 uk-text-center productCardsMobile'>
                  <div style={this.homeCardStyle} id='productCards' className='uk-card'>
                    <img className='uk-text-center uk-align-center uk-margin-small-top' src='https://via.placeholder.com/200x250'></img>
                    <h2 className='uk-margin-small-bottom'>Product One</h2>
                    <hr style={this.HRstyle3} className='uk-align-center uk-margin-remove-top uk-margin-small-bottom'></hr>
                    <div>
                    <p className='uk-margin-remove-top'><b>Starting at $19</b><span  style={{fontSize:'10px', verticalAlign:'30%'}}><b>.95</b></span></p>
                    </div>
                    <div id='product1Div' className=''>
                      <BaioButton Text={'BUY NOW'} Href={'/ShopProduct'} customStyle={{marginTop:'200px', marginBottom:'200px'}}></BaioButton>
                    </div>
                    <div id='homeProductBadge' style={{width:'80px',height:'50px', backgroundColor:'black', color:'white'}}>
                      <p className='uk-margin-small-top'><b>NEW!</b></p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
       </div> */}


        <div className='uk-margin-medium-top  uk-margin-xlarge-bottom'>
        <Products
              products={this.props.store.products}
              client={this.props.store.client}
              addVariantToCart={this.props.addVariantToCart}
            />
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



      <div id='shopWrapper3' className='uk-margin-xlarge-top'>
        <div className='shopspecialContainer'>
          <div className='uk-grid-match' uk-grid='true'>
            <div className='uk-width-1-3@m  uk-width-1-1'>
               <img className='shopLifestyleImages'  src='../images/lifestyle shots_1.jpg'></img>
            </div>
            <div className='uk-width-1-3@m  uk-width-1-1'>
              <img className='shopLifestyleImages'   src='../images/lifestyle shots_2.jpg'></img>
            </div>
            <div className='uk-width-1-3@m  uk-width-1-1'>
              <img  className='shopLifestyleImages'   src='../images/lifestyle shots_3.jpg'></img>
            </div>
          </div>
        </div>
      </div>

        <Newsletter></Newsletter>




      </div>
    );
  }
}


export default Shop;
