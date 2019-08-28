import React, { Component } from 'react';


class NotFound extends Component {

  // render nav
  render() {
    return (
      <div className="uk-container">
      <div className="uk-text-center">
        <h1>404</h1>
        <h1>Sorry this page cannot be found</h1>
        <a href="/"><button class="uk-button uk-button-primary">Click here to go back.</button></a>
      </div>
      </div>
    );
  }
}


export default NotFound;