import React, { Component } from 'react';

class Newsletter extends Component {

    state={
        userEmail:''
      }
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      emptyFields = () => {
        this.setState({
          userEmail: ''
        })
      }

    // render nav
    render() {
        return (
            <div>
                <div id='' className='uk-margin-xlarge-top uk-margin-large-bottom'>
                    <div className='uk-container' id='homeNewsletterdiv'>
                        <div className='' uk-grid='true'>
                            <div className='uk-width-1-1 uk-align-center uk-text-center uk-margin-auto-vertical uk-margin-auto'>
                                <h1 className='uk-margin-medium-top'>JOIN OUR NEWSLETTER</h1>
                                <p>Subscripe to be the first to hear about our stuffies.</p>
                                <div className='uk-align-center uk-text-center uk-margin-medium-bottom'>
                                    <form>
                                        <fieldset className="uk-fieldset  uk-align-center uk-text-center">
                                            <div className="uk-form uk-align-center uk-text-center newsLetterForm">
                                                <div id="emailInput" className="uk-inline  uk-width-1-1">
                                                    <a class="uk-form-icon uk-form-icon-flip newsLetterPic" ><img src='../images/newsLetterbutton.png'></img></a>
                                                    <input
                                                        value={this.state.userEmail}
                                                        onChange={this.handleInputChange}
                                                        name='userEmail'
                                                        className="uk-input uk-form-large inputNewsBody"
                                                        type="text"
                                                        placeholder="Email@email.com" />
                                                </div>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}


export default Newsletter;