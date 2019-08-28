import React, { Component } from 'react';

class BigHr extends Component {

    
    
  // render nav
  render() {
    return (
      <div className='uk-container uk-margin-remove-bottom'>
          <hr className='uk-margin-large-top' style={{borderTop: '25px solid',width: '70px',color:this.props.color}}></hr>
      </div>
    );
  }
}


export default BigHr;
