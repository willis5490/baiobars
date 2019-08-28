import React, { Component } from 'react';

class BaioBarButton extends Component {
    style1={
        backgroundColor: 'white',
        color:'black',
        border: 'none',
        padding: '10px 10px 10px 10px',
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
  // render nav
  render() {
    return (
      <div>
          <a href={this.props.Href}><button style={this.style1}  id='BaioButton'  className="uk-button uk-margin-auto uk-margin-small-top uk-margin-small-bottom uk-button-default ">{this.props.Text}<a href={this.props.Href} style={this.style2} className='uk-margin-small-left uk-icon-button uk-icon-link' uk-icon="icon: play-circle; ratio: 2"></a></button></a>
      </div>
    );
  }
}


export default BaioBarButton;
