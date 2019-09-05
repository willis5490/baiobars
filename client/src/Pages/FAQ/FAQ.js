
import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Insta from '../../Components/Instagram/Instagram.js'

class FAQ extends Component {
hrStyle1={
  borderTop: '2px solid black',
  width: '100%'
}
hrStyle2={
  borderTop: '1px solid black',
  width: '100%'
}
headerStyle={
  fontWeight:'1000',
  fontSize:'100px'
}
  // render nav
  render() {
    return (
      <div>
        <Header {...this.props} faq={900}></Header>

        <div className='FAQContainer1 uk-margin-large-top'>
          <div className='uk-container'>
            <div uk-grid='true'>
              <div className='uk-width-1-1'>
                  <h1  className='homeHeader1'  style={this.headerStyle}>FAQ</h1>
                  <hr className='uk-margin-large-top uk-margin-large-bottom' style={this.hrStyle1}></hr>
              </div>
            </div>
          </div>
        </div>

        <div className='FAQContainer2'>
          <div className='uk-container'>
            <div uk-grid='true'>
              <div className='uk-width-1-1'>
                  <h2><b>CRICKETS</b></h2>
                  <ul uk-accordion="true" active='0'>
                      <li class="">
                          <a class="uk-accordion-title" href="#"><b>What... Even is "Cricket Protein"?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                Cricket protein and cricket flour are made my milling crickets into fine
                                powder and used to create a variety of products. The Chitinous [(C8H13O5N)n]
                                exoskeleton of many insects (including crickets) contain highly dense
                                quantities of protein, essential amino acids, calcium, iron, B vitamins,
                                minerals, and essential fatty acids. Furthermore, because crickets are a
                                richer host of bio-available nutrients, these essential nutrients are
                                able to be better metabolized and digested by the body; allowing your
                                body to utilize more, for less! 
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Is it safe to eat?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                              Of course! The Food and Agriculture Organization of the United Nations
                               (FAO) have identified well over 2000 types of safe edible insects worldwide.
                                Additionally, their studies indicate that entomophagy (consuming insects as food)
                                 is already practiced by over 2 Billion people worldwide in over 130 countries!
                              </p>
                              <p className='uk-margin-remove-bottom'>Under the Food, Drug, and Cosmetic Act (FD&C): </p>
                              <ul className='uk-margin-remove-top'>
                                    <li>Bugs/insects are considered food if that is the intended use (Sec. 201(f)).
                                       Food must be clean and wholesome (i.e. free from filth, pathogens, toxins),
                                        must have been produced, packaged, stored and transported under sanitary
                                         conditions, and must be properly labeled (Sec.403). The label should include
                                          the scientific name of the insect.
                                    </li>
                                    <li>
                                    Insects must be raised specifically for human food following current good manufacturing practices (cGMP).
                                    </li>
                                    <li>
                                    Insects raised for animal or pet food cannot be diverted to human food. They cannot be
                                     "wildcrafted" (collected in the wild) and sold as food due to the potential of carrying diseases or pesticides. 
                                    </li>
                              </ul>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>What are the Benefits?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                <a href='https://onlinelibrary.wiley.com/doi/epdf/10.1111/nbu.12291'>Research </a>
                                completed by (D. Dobermann  J. A. Swift  L. M. Field) from Rothamsted Research,
                                Harpenden, UK; and University of Nottingham, Nottingham, UK show that it takes
                                approximately 15,500 L of water to produce 1 kg of live animal weight of beef.
                                Out of which only 40% (0.4kg) is edible. Using the same math, this study showed
                                that it takes only 2,500 L of water to produce 0.8kg of edible cricket protein.
                                That means 80% less water is used in order to produce double the amount of
                                final edible product. That’s 13,000 liters of water saved!                                
                              </p>
                              <p>The agriculture industry already accounts for 70% of global fresh water use. Cricket farming presents an incredible opportunity to help decrease that usage.</p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li class="">
                          <a class="uk-accordion-title" href="#"><b>If I am allergic to shellfish will I be allergic to insects?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                It is highly possible. If you are allergic to crustacean shellfish, it is
                                very possible that you could be allergic to crickets and many other insects
                                belonging to the phylum arthropoda. It would not be recommended to try cricket
                                derived food products without first consulting your doctor.
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Raw nutritional values?</b></a>
                          <div class="uk-accordion-content">
                              <p className='uk-margin-remove-bottom'>
                                Due to the nature of how the product is derived, these values may vary slightly. 
                                100 grams of raw cricket contains: 
                              </p>
                              <ul className='uk-margin-remove-top'>
                                  <li>120 calories</li>
                                  <li>13 grams of protein</li>
                                  <li>5.5 g. of fat</li>
                                  <li>5. g. of carbohydrates</li>
                                  <li>5 mg. calcium</li>
                                  <li>180 mg. of phosphorous</li>
                                  <li>9.5 mg. of iron</li>
                                  <li>0.4 mg. of thiamin </li>
                                  <li>1.1 mg. of riboflavin</li>
                                  <li>3 mg. of niacin</li>
                                  <li>.05% fat</li>
                              </ul>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Can I eat crickets if I am vegan?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                              Baiø-Bar products are not vegan or vegetarian since crickets are considered
                               an animal, but if it is important to obtain more nutrients in either of
                                these diets, consumption of crickets is far less invasive and more humane
                                 than consumption of the larger breeds of animals and may be an options to consider trying. 
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>How should I store the bars and what is the shelf life?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                Baiø-Bar uses simple ingredients, so they are best stored in a cool place like the
                                refrigerator and have a shelf life of approximately 3-4 months
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Are Baiø-Bar products Organic?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                Baiø-Bar is not certified organic, but our products do contain some organic ingredients
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Are Baiø-Bar products allergen free?</b></a>
                          <div class="uk-accordion-content">
                              <p>
                                Baiø-Bar products do not contain any WHEAT, SOY, EGG, or DAIRY products, but they are manufactured
                                in a facility that processes these ingredients. 
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                      <li>
                          <a class="uk-accordion-title" href="#"><b>Are Crickets Kosher?</b></a>
                          <div class="uk-accordion-content">
                              <p className='uk-margin-remove-bottom'>
                                Some are, some are not; Leviticus 11 states the Israelites are to consume only four
                                different kinds of ‘leaping’ insects:                                
                              </p>
                              <p className='uk-margin-remove-top'>
                                [21] But among the winged insects that walk on all fours you may eat those that have
                                jointed legs above their feet, with which to leap on the ground. [22] Of them you
                                may eat: the locust according to its kind, the bald locust according to its kind,
                                the cricket according to its kind, and the grasshopper according to its kind.(Lev 11:21-22)
                              </p>
                          </div>
                          <hr style={this.hrStyle2}></hr>
                      </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>

         


          <div className='uk-margin-large-top' id='flourWrapper5'>
            <div className='uk-container'>
              <div uk-grid='true'>
                <div className='uk-width-1-1'>
                  <h1 className='uk-margin-large-top uk-margin-large-bottom  uk-text-center'></h1>
                </div>
              </div>
            </div>
        </div>

        <Insta></Insta>



      </div>
    );
  }
}


export default FAQ;
