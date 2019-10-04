import React, { Component } from 'react';
import Header from '../../Components/Header/Header.js'
import Insta from '../../Components/Instagram/Instagram.js'

class About extends Component {
aboutPicStyle={
  height:'350px',
  width:'550px',
  backgroundColor:'grey', 
  border:'1px solid white',
}
aboutPicStyle2={
  height:'350px',
  width:'450px',
  backgroundColor:'grey', 
  border:'1px solid white',
}
StoryStyle={
  color:'black',
  fontWeight:'1000',
  fontSize:'80px',
}
StoryStyle2={
  color:'black',
  fontWeight:'1000',
  fontSize:'70px',
 
}

  // render nav
  render() {
    // console.log(this.props)
    
    return (
      <div>
        <Header {...this.props} story={900}></Header>       
        <div id='aboutWrapper1'>
          <div className='uk-container'>
            <div uk-grid='true'>
              <div className='uk-width-1-1'>
              {/* <img className='baiobarWordsPic uk-margin-large-top' src='../images/Baiobar_Logo_Words_WHT.png'></img> */}
              </div>
            </div>
          </div>
        </div>

        <div id='aboutWrapper2'>
          <div className='uk-container '>
            <div  uk-grid='true'>
              <div className='uk-width-1-4@m uk-width-1-1 aboutInfoSection'>
                <div id='picsDiv1' style={{padding:'20px', backgroundColor:'#EAEAEB',  }}>
                <img id='aboutFirstPic'  className='aboutPics uk-margin-xlarge-top uk-align-center' src="../images/Baiobar_Website_Our Story_Ariana.jpg" />
                </div>
                <h2 id='aboutTitle' style={{color:'red'}}>ARIANA FRANGOS<br></br> <span  style={{color:'grey'}}>Co-Founder</span></h2>
                    <p>
                        Ariana has worked in the food industry since the age of 14, helping in her uncle’s pizza shop. She 
                        graduated with a double major in Dietetics and Food business and she has worked in the corporate food 
                        world having experience in regulatory as well as in trends and ingredients sales. Ariana is an active 
                        long distance runner and trains for many half marathons throughout the year. Her passion for Baiø-Bar 
                        began in 2013 when she was first introduced to the idea of crickets as a source of protein after a 
                        presentation she attended. Ever since that day, she knew it was a matter of time before people would 
                        need to look at alternative options for obtaining protein. “I’m very excited to share this vision and 
                        passion with all of you and hope that you’ll tag along for the long run to see where we go!” 
                       
                    </p>
              </div>               
              <div  className='uk-width-1-4@m uk-width-1-1 aboutInfoSection'>
                <div id='picsDiv2' style={{padding:'20px', backgroundColor:'#EAEAEB',  }}>
                <img id='aboutFirstPic'  className='aboutPics uk-margin-xlarge-top uk-align-center' src="../images/Baiobar_Website_Our Story_John.jpg" />
                </div>
                <h2 id='aboutTitle' style={{color:'red'}}>JOHN FRANGOS<br></br> <span  style={{color:'grey'}}>Co-Founder</span></h2>
                    <p>
                        John is a co-founder and veteran of the United States Army and graduate 
                        from the Defense Language Institute. During his time in service, he has 
                        come in contact with a wide variety of people of varying levels of fitness. 
                        One thing they all had in common though, was a passion for maintaining a 
                        healthy lifestyle and protecting this beautiful world we live in. When 
                        he heard Ariana, his sister, was starting a protein bar company using 
                        crickets, he just needed to get involved. John wants to take what the team 
                        has made and share it with as many people as possible. Using crickets or 
                        insects in general in food is not uncommon in most places in the world, 
                        but it's often unheard of here in the United States. He hopes all of 
                        you can enjoy this adventure together while promoting a way to help 
                        keep our environment safe and clean for decades to come! 
                       
                    </p>
              </div>
              <div className='uk-width-1-4@m uk-width-1-1 aboutInfoSection2'>
              <div id='AboutInfoDiv2' style={{padding:'20px', backgroundColor:'#EAEAEB' }}>
                <img id='aboutSecondPic'  className=' uk-margin-xlarge-top  uk-align-center' src="../images/Baiobar_Website_Our Story_Garrett.jpg" />             
                </div>                
                <h2 id='aboutTitle' style={{color:'red'}}>GARRET HINCKLEY<br></br> <span  style={{color:'grey'}}>Chief Marketing Officer</span></h2>
                    <p>
                      Garret is an Army veteran and an advocate of fitness and nutrition. He is currently working on his bachelor’s
                      in kinesiology with a concentration in pre-physical therapy. He founded 4 Your Health Marketing in order to make
                      the world a healthier place by attracting more customers and clients to services and products that improve the
                      health of humans and the environment. Garret joined the Baio Bar team because he believes in the vision and believes 
                      Baio Bar will have a great impact on the health of our people and our planet.
                       
                    </p>
              </div> 
              <div className='uk-width-1-4@m uk-width-1-1 aboutInfoSection2'>
              <div id='AboutInfoDiv2' style={{padding:'20px', backgroundColor:'#EAEAEB' }}>
                <img id='aboutSecondPic'  className=' uk-margin-xlarge-top  uk-align-center' src="../images/Baiobar_Website_Our Story_Thomas.jpg" />             
                </div>                
                <h2 id='aboutTitle' style={{color:'red'}}>THOMAS <br></br> ERNY<br></br> <span  style={{color:'grey'}}>Creative Director</span></h2>
                    <p>
                      Who is ready for some pure, clean protein power! Boom! Thomas is a just little excited about joining 
                      the Baiobar team. Can you blame him. With a passion for all things active and a love for environmental 
                      friendly products, he was the perfect fit to be our creative director. He brings a fresh and clean design 
                      style to our brand, which we are in love with. Downtime isn't really downtime for this guy. If he isn't 
                      crushing the keys on the computer creating awesome designs, he is crushing the pedals on his mountain bike. 
                      His happy place is hiking, biking, running, camping and cruising through the mountains of Colorado with his 
                      PIC. Keep your eyes out for more beautiful design, photos and packaging from this guy. 
                       
                    </p>
              </div> 
            </div>
          </div>
        </div>

        <div id='aboutWrapper3'>
          <div className='uk-container  uk-margin-auto-vertical'>
            <div uk-grid='true'>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-xlarge-top'>
                  <h1 className='aboutStoryText' style={this.StoryStyle}>THE <br></br> <span style={{color:'red'}}>BAIØ-BAR</span><br></br> STORY</h1>
                </div>
                <div className='uk-width-1-2@m uk-width-1-1 uk-margin-xlarge-top  '>
                  <p className=''>
                  Baiø-Bar is a woman founded and family run business that began with a desire to make an impact and spur change in society 
                  and the way we think. Each member of the Baiø-Bar team in one way or another has worked to defy odds and to challenge the 
                  status quo, hence our motto. We believe that insects and insect protein are the future in food and food technology, reducing 
                  hunger and starvation in third world countries and sustainably preserving our environment.
                  </p>
                  <p>
                  It's just an added benefit that 
                  crickets are protein rich and contain nutrients important for human function. We hope you are as excited about Baiø-Bar as 
                  we are, and we are excited to continue developing more tasty products for you to try! 
                  </p>
                  
                </div>
            </div>
          </div>
        </div>

        <div id='aboutWrapper4'>
          <div className='specialAboutContainer uk-margin-large-bottom'>
            <div className='uk-margin-large-top uk-grid-match' uk-grid='true'>
                <div className='uk-width-2-5@m uk-width-1-1'>
                  <img  className='aboutMiddlePicsLarge' src="..\images\Baiobar_Website_Our Story_Image_1.jpg" />
                </div>
                <div className='uk-width-2-5@m uk-width-1-1'>
                  <img  className='aboutMiddlePicsLarge' src="..\images\Baiobar_Website_Our Story_Image_2.jpg" />
                </div>
                <div className='uk-width-1-5@m uk-width-1-1'>
                  <img  className='aboutMiddlePicsSmall uk-margin-medium-bottom' src="..\images\Baiobar_Website_Our Story_Image 3.jpg" />
                  <img  className='aboutMiddlePicsSmall' src="..\images\Baiobar_Website_Our Story_Image 4.jpg" />
                </div>
              </div>
              {/* <div uk-grid='true'>
                  <div className='uk-grid-1-1 specialAboutContainer2'>
                    <p className='uk-margin-medium-top'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit 
                  lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit 
                  esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
                    </p>
                    <p className=''>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet                 
                    </p>
                    <p className='uk-margin-large-bottom'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet 
                  dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit              
                    </p>
                  </div>
              </div> */}
          </div>
        </div>

        <div id='aboutWrapper5'>
          <div className='uk-container'>
            <div className=' uk-margin-large-top' uk-grid='true'>
              <div className='uk-width-1-4@m  uk-width-1-1 uk-margin-auto-vertical'>
                  <h1 className='aboutStoryText'  style={this.StoryStyle2}>WHAT'S <br></br> <span style={{color:'red'}}>NEXT</span></h1>
              </div>
              <div className='uk-width-3-4@m   uk-width-1-1'>
                <img  className='whatsNextPic' src="../images/Baiobar_Website_Our Story_Whats Next Image.png" />
              </div>
              
              <div className='uk-width-1-2@s uk-width-1-1'>
                  <p className='uk-margin-medium-top uk-margin-xlarge-bottom aboutWhatsNextText1'>
                    The Baiø-Bar team is working to add to the portfolio, and we are excited to announce that 
                    in the near future, we will be adding single serve ready to mix stick protein powders along 
                    with a bulk 24oz tubs. The flavors we are working on currently are Chocolate and Vanilla. 
                    That could change of course based on feedback from our customers. Our timeline is set for 
                    a launch of 2020 but we will keep you updated through out the rest of the year.
                  </p>
              </div>
              <div className='uk-width-1-2@s uk-width-1-1 uk-margin-xlarge-bottom aboutWhatsNextText2'>
                  <p className='uk-margin-medium-top '>
                    We are also going to be offering cricket powder on its own in 2020 and are working on 
                    creating a cookbook filled with recipes for utilizing crickets and getting the benefits 
                    from the awesome benefits. 
                  </p>
                  <p>
                  In the latter half of 2020, we are working towards adding 2 additional protein bar flavors 
                  to the portfolio. Stay tuned, because we may be reaching out to you, our customers for 
                  feedback on the type of flavors you want to see! 
                  </p>
              </div>
            </div>
          </div>
        </div>

         <Insta></Insta>


      </div>
    );
  }
}


export default About;
