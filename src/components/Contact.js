import React, {Component} from 'react';

export default class Contact extends Component{
  render(){
    return (
      <div id="contact">
        <h3>Contact </h3>
        <div>Phone: (305) 123-4567</div>
        <div>Email: danielreedsilver@gmail.com</div>
        <div>
          <a href="mailto:danielreedsilver@gmail.com">
            <i className="far fa-envelope"></i>
          </a>
          <a href="https://www.twitter.com/danielsilver/">
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a href="https://www.github.com/danielrsilver/">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    )
  }
}
